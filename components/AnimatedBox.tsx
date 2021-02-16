import { Box } from "@chakra-ui/react"
import styles from "./animatedbox.module.css";

const AnimatedBox = () => {
    return (
        <Box className={styles.outerBox}>
            <Box className={styles.innerBox}></Box>
        </Box>
    );
}

export { AnimatedBox }
