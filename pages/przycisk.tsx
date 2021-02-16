import { ButtonFinal } from "../components/ButtonFinal"
import { Box as BoxIcon } from "react-feather";
import { Image, Flex, Stack, Box, Button, Text, Heading } from "@chakra-ui/react"
import { useState, useEffect } from "react";
import { ButtonStream } from "../components/ButtonStream";

export default function ButtonPage() {
    const [cart, setCart] = useState([])

    useEffect(() => {
        const token = setTimeout(() => setCart(["produkt na start"]), 1300);
        return () => clearTimeout(token)
    }, [])

    return <>
        <Flex flexDirection="row" justifyContent="space-between">
            <Box my={8}>
                <Heading>Nasz</Heading>
                <ButtonStream />
            </Box>
            <Box my={8}>
                <Heading>Docelowy</Heading>
                <ButtonFinal cart={cart} />
            </Box>
        </Flex>
        <Stack>
            <Image marginY={2} marginX="auto" height={240} width={320} src="http://placeimg.com/640/480/tech" />
            <Heading>Przykładowy produkt</Heading>
            <Text>Voluptatibus odio ipsa aut.
            At omnis ut aut rerum. Voluptas quia nostrum inventore.
            Itaque cum ratione voluptate sint maxime quam enim.
                Quaerat itaque quos nihil ratione molestiae in.</Text>
            <Button onClick={() => setCart(cart => ([...cart, "przykładowy produkt"]))}>Dodaj do koszyka</Button>
        </Stack>
    </>
}
