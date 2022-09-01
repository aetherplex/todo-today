import { filterAtom } from '@/store';
import { Radio, RadioGroup } from '@chakra-ui/react';
import { useAtom } from 'jotai';

function Filter() {
    const [filter, setFilter] = useAtom(filterAtom);

    return (
        <RadioGroup
            onChange={(value) => setFilter(value)}
            value={filter}
            display="flex"
            gap={4}
            justifyContent="center"
        >
            <Radio value="all">All</Radio>
            <Radio value="complete">Complete</Radio>
            <Radio value="incomplete">Incomplete</Radio>
        </RadioGroup>
    );
}

export default Filter;
