import React, { useState } from 'react';
import PropTypes from 'proptypes';

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

    return (
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
    )
}

Buttons.propTypes = {
    open: PropTypes.bool,
    setOpen: PropTypes.func,
}

export default Buttons;
