import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { theme } from './styles/theme';

import Header from './components/Header';
import Aside from './components/Aside';
import Section from './components/Section';

export const Main = styled.main`
    display: grid;
    height: 100vh;
    max-height: 100vh;
    grid-template-rows: 38px calc(100% - 38px); 
    grid-template-columns: 260px 1fr;
    grid-template-areas:
        'header header'
        'aside section';
`;

const App = () =>  {
    return (
        <ThemeProvider theme={theme}>
            <Main>
                <Header/>
                <Aside/>
                <Section/>
            </Main>
        </ThemeProvider>
    )
}

export default App;
