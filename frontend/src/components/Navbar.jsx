import React from 'react'
import { Container, HStack, Flex, Link, Button } from "@chakra-ui/react"

export const Navbar = () => {
    return (
        <Container width={"max-content"}>
            <Flex h={16} alignItems={"center"} justifyContent={"center"} flexDir={
                {
                    base: "column",
                    sm: "row"
                }
            }>
                <Link to={"/tickets"}>
                    <Button>
                        See Tickets
                    </Button>
                </Link>
            </Flex>
        </Container>

    )
}
