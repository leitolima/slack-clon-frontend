import React from 'react';

import {
    AsideField,
} from './styles';
import Head from './Head';
import Main from './Main';
import Foot from './Foot';
import CreateChannel from '../CreateChannel';

const Aside = () => {

    return (
        <AsideField>
            <Head/>
            <Main/>
            <Foot/>
            <CreateChannel/>
        </AsideField>
    )
}

export default Aside;
