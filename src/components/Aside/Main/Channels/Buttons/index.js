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
import ModalChildren from './ModalChildren';
import ModalSmall from '../../../../Modals/ModalSmall';

const Buttons = ({
    open,
    setOpen,
}) => {

    const [hover, setHover] = useState(false);
    const [modalShow, setModalShow] = useState(false);
    const [modalPos, setModalPos] = useState({ top: 0, left: 0 });

    const handleClick = e => {
        const { pageX, pageY } = e;
        setModalPos({ top: pageY, left: pageX });
        setModalShow(true)
    }

    return (
        <TitleContainer
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
            
        >
            <Flex onClick={() => setOpen(!open)}>
                <Button show open={open}>
                    <FontAwesomeIcon className="caret" icon={faCaretRight}/>
                </Button>
                <Title>Canales</Title>
            </Flex>
            <Flex>
                <Button hover={hover}>
                    <FontAwesomeIcon icon={faEllipsisV}/>
                </Button>
                <Button hover={hover} onClick={handleClick}>
                    <FontAwesomeIcon icon={faPlus}/>
                </Button>
            </Flex>
            <ModalSmall
                show={modalShow}
                top={modalPos.top}
                left={modalPos.left}
                setShow={setModalShow}
            >
                <ModalChildren/>
            </ModalSmall>
        </TitleContainer>
    )
}

Buttons.propTypes = {
    open: PropTypes.bool,
    setOpen: PropTypes.func,
}

export default Buttons;
