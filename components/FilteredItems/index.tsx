import TodoItem from '@/components/TodoItem';
import { filteredAtom } from '@/store';
import { a, useTransition } from '@react-spring/web';
import { useAtom } from 'jotai';

function FilteredItems({ remove }: { remove: (id: string) => void }) {
    const [todos] = useAtom(filteredAtom);

    const transitions = useTransition(todos, {
        keys: (id: string) => id,
        from: { opacity: 0, height: 0 },
        enter: { opacity: 1, height: 40 },
        leave: { opacity: 0, height: 0 },
    });
    return transitions((style, id) => (
        <a.div
            style={{
                ...style,
                display: 'flex',
                flexDirection: 'column',
                marginBottom: 8,
            }}
        >
            <TodoItem id={id} remove={remove} />
        </a.div>
    ));
}

export default FilteredItems;
