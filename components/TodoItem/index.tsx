import { todoAtomFamily } from '@/store';
import { Checkbox, CloseButton, Flex, Text } from '@chakra-ui/react';
import { useAtom } from 'jotai';

function TodoItem({
    id,
    remove,
}: {
    id: string;
    remove: (id: string) => void;
}) {
    const [item, setItem] = useAtom(todoAtomFamily({ id }));

    const toggleCompleted = () =>
        setItem({ ...item, completed: !item.completed });

    return (
        <Flex
            gap={4}
            w="100%"
            justifyContent="space-between"
            align="center"
            boxShadow="sm"
            p={4}
            borderRadius="md"
            bgColor="white"
        >
            <Checkbox checked={item.completed} onChange={toggleCompleted} />
            <Text textDecoration={item.completed ? 'line-through' : ''}>
                {item.title}
            </Text>
            <CloseButton onClick={() => remove(id)} />
        </Flex>
    );
}

export default TodoItem;
