import React from 'react';
import { ThemeProvider } from 'styled-components';
import { theme } from './styles/theme';

const App = () =>  {
    return (
        <ThemeProvider theme={theme}>
            <main>

            </main>
        </ThemeProvider>
    )
}

export default App;
