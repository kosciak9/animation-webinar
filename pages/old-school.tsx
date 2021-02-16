import { Heading, Stack } from "@chakra-ui/react";
import { AnimatedBox } from "../components/AnimatedBox";
import { OldSchool } from "../components/OldSchool";
import { SlidingBox } from "../components/SlidingBox";

export default function OldSchoolPage() {
    return <Stack>
        <Heading>Nasze</Heading>
        <SlidingBox />
        <AnimatedBox />
        <Heading>Docelowe</Heading>
        <OldSchool />
    </Stack>
}
