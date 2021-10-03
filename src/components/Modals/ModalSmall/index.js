import React from 'react';
import PropTypes from 'proptypes';

import {
    Overlay,
    Modal,
    ModalBody,
} from './styles';

const ModalSmall = ({ show, setShow, top, left, children }) => {
    return (
        <>
            <Overlay show={show} onClick={() => setShow(false)}/>
            <Modal show={show} top={top} left={left}>
                <ModalBody>
                    { children }
                </ModalBody>
            </Modal>
        </>
    )
}

ModalSmall.propTypes = {
    show: PropTypes.bool,
    setShow: PropTypes.func,
    top: PropTypes.number,
    left: PropTypes.number,
    children: PropTypes.object,
}

export default ModalSmall;
