import { Button } from "@chakra-ui/react"
import { animated, useSpring } from "react-spring"

const ANIMATION_DURATION = 1000;

const ButtonStream = () => {
    const props = useSpring({
        from: {},
        config: { duration: ANIMATION_DURATION }
    })

    return <Button transition={`${ANIMATION_DURATION} / `} colorScheme="green" style={props} as={animated.button}>koszyk!</Button>
}

export { ButtonStream }
