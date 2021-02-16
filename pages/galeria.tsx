import { Heading, Stack } from "@chakra-ui/react";
import { Box } from "react-feather";
import { GalleryFinal } from "../components/GalleryFinal";

export default function GaleriaPage() {
    return <Stack>
        <Heading>Nasze</Heading>
        <Box />
        <Heading>Docelowe</Heading>
        <GalleryFinal />
    </Stack>;
}
