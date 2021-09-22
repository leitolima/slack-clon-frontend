import React from 'react';
import styled from 'styled-components';

import Header from './components/Header';
import Aside from './components/Aside';
import Section from './components/Section';

export const MainField = styled.main`
    display: grid;
    height: 100vh;
    max-height: 100vh;
    grid-template-rows: 38px calc(100% - 38px); 
    grid-template-columns: 260px 1fr;
    grid-template-areas:
        'header header'
        'aside section';
`;

const Main = () => {
    return (
        <MainField>
            <Header/>
            <Aside/>
            <Section/>
        </MainField>
    )
}

export default Main
