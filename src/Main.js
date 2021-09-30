import React from 'react';
import styled from 'styled-components';

import { useQuery } from '@apollo/client';
import { GET_RANDOM_USER } from './graphql/querys';

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

    const { loading, error, data } = useQuery(GET_RANDOM_USER, {
        fetchPolicy: 'cache-first'
    });

    if(data?.user?.id) {
        console.log(data);
    }

    return (
        <MainField>
            <Header loading={loading} error={error}/>
            <Aside/>
            <Section/>
        </MainField>
    )
}

export default Main
