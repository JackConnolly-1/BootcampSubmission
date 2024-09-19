import express from "express";
import { PORT, mongoDBURL } from "./config.js";
import { Ticket } from "./models/bookModel.js";
import mongoose from 'mongoose';

const app = express();

app.use(express.json());

app.get('/', (request, response) => {
    console.log(request)
    return response.status(234).send('Welcome to first project!')
});

app.post('/tickets', async (request, response) => {
    const newTicket = {
        concertName: request.body.concertName,
        concertDate: request.body.concertDate,
        ticketColor: request.body.ticketColor,
        ticketPrice: request.body.ticketPrice,
    };

    const ticket = await Ticket.create(newTicket)

    return response.status(201).send(ticket);
})

// route to get all tickets 

app.get('/tickets', async (request, response) => {
    try {
        const tickets = await Ticket.find({});

        return response.status(200).json({
            count: tickets.length,
            data: tickets
        });
    } catch (error) {
        console.log(error.message);
        response.status(500).send({ message: error.message });
    }
})

app.put('/tickets/:id', async (request, response) => {
    const { id } = request.params;
    const result = await Ticket.findByIdAndUpdate(id, request.body);

    if (!result) {
        return response.status(404).json({ message: 'ticket not found' });
    }

    return response.status(200).send({ message: 'ticket updated successfully' });
})

app.get('/tickets/:id', async (request, response) => {
    try {

        const { id } = request.params

        const ticket = await Ticket.findById(id);

        return response.status(200).json(ticket);
    } catch (error) {
        console.log(error.message);
        response.status(500).send({ message: error.message });
    }
})

mongoose
    .connect(mongoDBURL)
    .then(() => {
        console.log('App connected to database');
        app.listen(PORT, () => {
            console.log('App is listening to port: ' + PORT);
        });
    })
    .catch((error) => {
        console.log(error);
    });