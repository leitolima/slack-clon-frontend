import React from 'react';

import {
    AsideField,
} from './styles';
import Head from './Head';
import Main from './Main';
import Foot from './Foot';

const Aside = () => {

    return (
        <AsideField>
            <Head/>
            <Main/>
            <Foot/>
        </AsideField>
    )
}

export default Aside;
