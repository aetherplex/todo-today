import Filter from '@/components/Filter';
import FilteredItems from '@/components/FilteredItems';
import { Param, todoAtomFamily, todosAtom } from '@/store';
import { Button, chakra, Flex, Input } from '@chakra-ui/react';
import { useSetAtom } from 'jotai';
import { nanoid } from 'nanoid';
import { useForm } from 'react-hook-form';

function TodoList() {
    const setTodos = useSetAtom(todosAtom);

    const { register, handleSubmit } = useForm<Partial<Param>>();

    const remove = (id: string) => {
        setTodos((prev) => prev.filter((item) => item !== id));
        todoAtomFamily.remove({ id });
    };

    const onSubmit = ({ title }: Partial<Param>) => {
        const id = nanoid();
        todoAtomFamily({ id, title });
        setTodos((prev) => [...prev, id]);
    };

    return (
        <chakra.form
            onSubmit={handleSubmit(onSubmit)}
            display="flex"
            flexDir="column"
            w="35%"
            gap={6}
            mt={8}
        >
            <Flex gap={2}>
                <Input
                    bgColor="white"
                    placeholder="Add todo"
                    {...register('title', { required: true })}
                />
                <Button type="submit">Add</Button>
            </Flex>
            <Filter />
            <FilteredItems remove={remove} />
        </chakra.form>
    );
}

export default TodoList;
