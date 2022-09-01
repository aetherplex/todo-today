import { atom } from 'jotai';
import { atomFamily } from 'jotai/utils';

export type Param = { id: string; title?: string };

export const todoAtomFamily = atomFamily(
    (params: Param) => atom({ title: params.title, completed: false }),
    (a: Param, b: Param) => a.id === b.id
);

export const filterAtom = atom('all');

export const todosAtom = atom<string[]>([]);

export const filteredAtom = atom((get) => {
    const filter = get(filterAtom);
    const todos = get(todosAtom);
    if (filter === 'all') return todos;
    else if (filter === 'complete')
        return todos.filter((id) => get(todoAtomFamily({ id })).completed);
    else return todos.filter((id) => !get(todoAtomFamily({ id })).completed);
});
