import {
    Badge,
    Button,
    Modal,
    ModalBody,
    ModalCloseButton,
    ModalContent,
    ModalFooter,
    ModalHeader,
    ModalOverlay,
    Text,
    useDisclosure,
} from "@chakra-ui/react";
import { isEqual } from "lodash";
import React, { useEffect, useRef, useState } from "react";
import { ShoppingCart } from "react-feather";
import { animated, useSpring } from "react-spring";

const ANIMATION_DURATION = 300;

enum TRIGGER_STATES {
    RENDER = "RENDER",
    BEFORE_LOAD = "BEFORE_LOAD",
    AFTER_LOAD = "AFTER_LOAD",
}

const useTriggerOnChange = (currentCart, delay = ANIMATION_DURATION * 1.2) => {
    const [shouldTrigger, setShouldTrigger] = useState({
        state: TRIGGER_STATES.RENDER,
        value: false,
    });
    const previousCart = useRef(null);

    useEffect(() => {
        if (
            shouldTrigger.state === TRIGGER_STATES.RENDER ||
            shouldTrigger.state === TRIGGER_STATES.BEFORE_LOAD
        ) {
            previousCart.current = currentCart;
            setShouldTrigger({
                value: false,
                state:
                    shouldTrigger.state === TRIGGER_STATES.RENDER
                        ? TRIGGER_STATES.BEFORE_LOAD
                        : TRIGGER_STATES.AFTER_LOAD,
            });
        } else if (
            shouldTrigger.state === TRIGGER_STATES.AFTER_LOAD ||
            !isEqual(previousCart.current, currentCart)
        ) {
            previousCart.current = currentCart;
            setShouldTrigger({
                value: Boolean(currentCart),
                state: TRIGGER_STATES.AFTER_LOAD,
            });
            const timeout = setTimeout(() => {
                setShouldTrigger({ value: false, state: TRIGGER_STATES.AFTER_LOAD });
            }, delay);
            return () => clearTimeout(timeout);
        }
    }, [currentCart]);

    return shouldTrigger.value;
};

export const ButtonFinal: React.FC<{ cart: Array<string> }> = ({ cart }) => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const shouldShake = useTriggerOnChange(cart);
    const { x } = useSpring({
        immediate: !shouldShake,
        reset: shouldShake,
        from: { x: 0 },
        x: shouldShake ? 1 : 0,
        config: { duration: ANIMATION_DURATION, velocity: 100 },
    });

    return (
        <>
            <Button
                leftIcon={<ShoppingCart />}
                colorScheme={shouldShake ? "green" : null}
                transition={`${ANIMATION_DURATION / 1000 / 2}s all`}
                as={animated.button}
                aria-label="Your shopping cart"
                onClick={onOpen}
                style={{
                    transform: x
                        .interpolate({
                            range: [0, 0.25, 0.5, 1],
                            output: [0, 25, -25, 0],
                        })
                        .interpolate((x) => `rotate(${x}deg)`),
                }}
            >
                <Text as="span" display="inline-block" mr={2}>
                    Koszyk
        </Text>
                <Badge
                    variant="solid"
                    fontSize="md"
                    colorScheme={cart.length ? "green" : null}
                    data-testid="cart-badge"
                >
                    {cart.length}
                </Badge>
            </Button>

            <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>Your shopping cart</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        {cart.map((product, index) => (
                            <Text key={index}>
                                {product}
                            </Text>
                        ))}
                    </ModalBody>
                    <ModalFooter>
                        <Button colorScheme="blue" mr={3} onClick={onClose}>
                            Checkout!
            </Button>
                        <Button variant="ghost" onClick={onClose}>
                            Close
            </Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    );
};
