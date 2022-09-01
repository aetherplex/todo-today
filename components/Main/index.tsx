import { Text, Flex, Heading } from '@chakra-ui/react';
import TodoList from '../TodoList';

function Main() {
    return (
        <Flex
            w="100%"
            flexDir="column"
            gap={6}
            align="center"
            pt={32}
            bgColor="gray.50"
            minH="100vh"
        >
            <Heading size="4xl" fontWeight="extrabold">
                Today
            </Heading>
            <Text>
                A simple todo list using Jōtai, ChakraUI, and React Hook Form
            </Text>
            <TodoList />
        </Flex>
    );
}

export default Main;
