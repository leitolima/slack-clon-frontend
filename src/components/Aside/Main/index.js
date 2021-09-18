import React from 'react';

import {
    Container,
} from './styles';
import Options from './Options';
import Channels from './Channels';
import DirectMessages from './DirectMessages';

const Main = () => {
    return (
        <Container>
            <Options/>
            <Channels/>
            <DirectMessages/>
        </Container>
    )
}

export default Main;
