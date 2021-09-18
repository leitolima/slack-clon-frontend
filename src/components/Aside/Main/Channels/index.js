import React, { useState } from 'react';

import {
    Container,
    TitleContainer,
    Title,
} from './styles';

const Channels = () => {
    
    const [open, setOpen] = useState(false);

    return (
        <Container>
            <TitleContainer>
                <Title>Canales</Title>
            </TitleContainer>
        </Container>
    )
}

export default Channels;
