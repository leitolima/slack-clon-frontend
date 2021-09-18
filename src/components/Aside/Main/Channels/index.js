import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretRight, faEllipsisV, faPlus } from '@fortawesome/free-solid-svg-icons';

import {
    Container,
    TitleContainer,
    Flex,
    Title,
    Button,
} from './styles';

const Channels = () => {
    
    const [open, setOpen] = useState(false);
    const [hover, setHover] = useState(false);

    return (
        <Container>
            <TitleContainer
                onMouseEnter={() => setHover(true)}
                onMouseLeave={() => setHover(false)}
                onClick={() => setOpen(!open)}
            >
                <Flex>
                    <Button show open={open}>
                        <FontAwesomeIcon className="caret" icon={faCaretRight}/>
                    </Button>
                    <Title>Canales</Title>
                </Flex>
                <Flex>
                    <Button hover={hover}>
                        <FontAwesomeIcon icon={faEllipsisV}/>
                    </Button>
                    <Button hover={hover}>
                        <FontAwesomeIcon icon={faPlus}/>
                    </Button>
                </Flex>
            </TitleContainer>
        </Container>
    )
}

export default Channels;
