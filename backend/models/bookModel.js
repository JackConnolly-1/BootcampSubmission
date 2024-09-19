import mongoose from "mongoose";

const ticketSchema = mongoose.Schema(
    {
        concertName: {
            type: String,
            required: false,
        },
        concertDate: {
            type: String,
            required: false,
        },
        ticketColor: {
            type: String,
            required: false,
        },
        ticketPrice: {
            type: String,
            required: false,
        },
    });

export const Ticket = mongoose.model('Cat', ticketSchema);