import React from 'react';
import { useQuery } from '@apollo/client';
import { GET_USER_ID } from '../../graphql/querys';

import {
    AsideField,
} from './styles';
import Head from './Head';
import Main from './Main';
import Foot from './Foot';

const Aside = () => {

    const { data: { userId } } = useQuery(GET_USER_ID);

    return (
        <AsideField>
            <Head userId={userId}/>
            <Main/>
            <Foot/>
        </AsideField>
    )
}

export default Aside;
