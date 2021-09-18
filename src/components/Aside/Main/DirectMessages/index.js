import React, { useState } from 'react';

import {
    Container,
    TitleContainer,
    Title,
} from './styles';

const DirectMessages = () => {

    const [open, setOpen] = useState(false);

    return (
        <Container>
            <TitleContainer>
                <Title>Mensajes directos</Title>
            </TitleContainer>
        </Container>
    )
}

export default DirectMessages;
