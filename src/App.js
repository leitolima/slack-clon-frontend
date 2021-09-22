import React from 'react';
import { client } from './apollo';
import { ApolloProvider } from '@apollo/client';
import { ThemeProvider } from 'styled-components';
import { theme } from './styles/theme';

import Main from './Main';

const App = () =>  {
    return (
        <ThemeProvider theme={theme}>
            <ApolloProvider client={client}>
                <Main/>
            </ApolloProvider>
        </ThemeProvider>
    )
}

export default App;
