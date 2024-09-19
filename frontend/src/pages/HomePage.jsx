import React from 'react'
import { useState } from 'react'
import { Container, VStack, Heading, Box, Input, Button } from '@chakra-ui/react'
import { useProductStore } from '../store/ticket';

export const HomePage = () => {
    const [newTicket, setNewTicket] = useState({
        concertName: "",
        concertDate: "",
        ticketColor: "",
        ticketPrice: "",
    });

    const { createTicket } = useProductStore()

    const handleAddTicket = async () => {
        console.log("Handling Ticket: ")
        console.log(newTicket)
        const { success, message } = await createTicket(newTicket);
        console.log("Success: ", success);
        console.log("Message: ", message);
    }


    return (
        <Container maxW={"container.sm"}>
            <VStack spacing={8}>
                <Heading as={"h1"} size={"2x1"} textAlign={"center"} mb={8}>
                    Create New Ticket
                </Heading>

                <Box>
                    <VStack spacing={4}>
                        <Input
                            placeholder="Name of concert"
                            name="name"
                            value={newTicket.concertName}
                            onChange={(e) => setNewTicket({ ...newTicket, concertName: e.target.value })}
                        />
                        <Input
                            placeholder="Date of concert"
                            name="name"
                            value={newTicket.concertDate}
                            onChange={(e) => setNewTicket({ ...newTicket, concertDate: e.target.value })}
                        />
                        <Input
                            placeholder="Color of ticket"
                            name="name"
                            value={newTicket.ticketColor}
                            onChange={(e) => setNewTicket({ ...newTicket, ticketColor: e.target.value })}
                        />
                        <Input
                            placeholder="Price of ticket"
                            name="name"
                            value={newTicket.ticketPrice}
                            onChange={(e) => setNewTicket({ ...newTicket, ticketPrice: e.target.value })}
                        />

                        <Button colorScheme="blue" onClick={handleAddTicket} w="full">
                            Create Ticket
                        </Button>
                    </VStack>
                </Box>
            </VStack>
        </Container>
    )
}
