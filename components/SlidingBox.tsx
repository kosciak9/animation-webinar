import { Box } from "@chakra-ui/react"
import { useState } from "react";

const SlidingBox = () => {
    const [hover, setHover] = useState(false);

    return <>
        <Box
            onMouseLeave={() => setHover(false)}
            onMouseOver={() => setHover(true)}
            border="3px solid black"
            height={30}
            overflow="hidden"
            py={2}
            textAlign="center"
            transition="0.3s all"
            width={hover ? 100 : 0}>
            wysuwane!
        </Box>
    </>
};

export { SlidingBox };
