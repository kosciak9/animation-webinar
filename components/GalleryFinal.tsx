import { Image as ChakraImage, Box, Flex, Button } from "@chakra-ui/react"
import { animated, useTransition } from "react-spring"
import { useState, useEffect } from "react";
import { ArrowLeft, ArrowRight } from "react-feather";

const GalleryFinal = () => {
    const [active, setActive] = useState(
        0
    );
    const items = [
        { id: 1, src: "http://placeimg.com/320/240/animals" },
        { id: 2, src: "http://placeimg.com/320/240/architecture" },
        { id: 3, src: "http://placeimg.com/320/240/nature" },
        { id: 4, src: "http://placeimg.com/320/240/people" }
    ]
    useEffect(() => {
        items.map(item => {
            const i = new Image()
            i.src = item.src
        });
    }, [])
    const transitions = useTransition(items[active], i => i.id, {
        from: { position: "absolute", transform: "translate(-120px)", opacity: 0 },
        enter: { transform: "translate(0px)", opacity: 1 },
        leave: { transform: "translate(120px)", opacity: 0 },
    });
    return (
        <Box>
            <Box height={240} width={320} marginX="auto" position='relative'>
                {transitions.map(({ item, key, props }) => (
                    <animated.div key={key} style={props}>
                        <ChakraImage width={320} height={240} src={item.src} />
                    </animated.div>
                ))}
            </Box>
            <Flex flexDir="row" alignItems="center" justifyContent="space-between">
                <Button colorScheme={active === 0 ? null : "green"} disabled={active === 0} onClick={() => setActive(active - 1)}><ArrowLeft /></Button>
                <Button colorScheme={active === items.length - 1 ? null : "green"} disabled={active === items.length - 1} onClick={() => setActive(active + 1)}><ArrowRight /></Button>
            </Flex>
        </Box >);
}

export { GalleryFinal }
