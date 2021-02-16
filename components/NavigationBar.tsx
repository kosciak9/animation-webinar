import { Link, Flex } from "@chakra-ui/react"
import NextLink from "next/link"

const NavigationLink: React.FC<{ href: string }> = ({ href, children }) => (
    <Link as="div" display="inline-block" mx={2} p={1} href={href}>
        <NextLink href={href}>{children}</NextLink>
    </Link>
)

const NavigationBar: React.FC = () => (
    <Flex my={1} as="nav" flexDirection="row" alignItems="center" justifyContent="center">
        <NavigationLink href="/old-school">Old school!</NavigationLink>
        <NavigationLink href="/przycisk">Przycisk</NavigationLink>
        <NavigationLink href="/galeria">Galeria</NavigationLink>
        <NavigationLink href="/nextjs">Przejścia między stronami</NavigationLink>
    </Flex>
)

export { NavigationBar }
