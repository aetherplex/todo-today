import { ChakraProvider } from '@chakra-ui/react';
import { Provider } from 'jotai';
import Main from '@/components/Main';

export default function App() {
    return (
        <Provider>
            <ChakraProvider>
                <Main />
            </ChakraProvider>
        </Provider>
    );
}
