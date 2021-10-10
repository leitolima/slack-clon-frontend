import React, { useState } from 'react';

import {
    Container,
} from './styles';
import Buttons from './Buttons';

const DirectMessages = () => {

    const [open, setOpen] = useState(false);

    return (
        <Container>
            <Buttons open={open} setOpen={setOpen}/>
        </Container>
    )
}

export default DirectMessages;
