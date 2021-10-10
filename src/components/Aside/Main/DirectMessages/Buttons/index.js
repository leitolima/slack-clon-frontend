import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretRight, faEllipsisV, faPlus } from '@fortawesome/free-solid-svg-icons';

import {
    TitleContainer,
    Flex,
    Button,
    Title,
} from './styles';

const Buttons = ({
    open,
    setOpen,
}) => {

    const [hover, setHover] = useState(false);

    const handleClick = () => alert('handleClick')

    return (
        <TitleContainer
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
        >
            <Flex onClick={() => setOpen(!open)}>
                <Button show open={open}>
                    <FontAwesomeIcon className="caret" icon={faCaretRight}/>
                </Button>
                <Title>Mensajes directos</Title>
            </Flex>
            <Flex>
                <Button hover={hover}>
                    <FontAwesomeIcon icon={faEllipsisV}/>
                </Button>
                <Button hover={hover} onClick={handleClick}>
                    <FontAwesomeIcon icon={faPlus}/>
                </Button>
            </Flex>
        </TitleContainer>
    )
}

Buttons.propTypes = {
    open: PropTypes.bool,
    setOpen: PropTypes.func,
}

export default Buttons;
