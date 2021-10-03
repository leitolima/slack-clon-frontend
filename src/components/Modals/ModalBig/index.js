import React from 'react';
import PropTypes from 'proptypes';

import {
    Overlay,
    Modal,
    ModalBody,
} from './styles';

const ModalBig = ({ show = true, setShow, children }) => {
    return (
        <>
            <Overlay show={show} onClick={() => setShow(false)}/>
            <Modal show={show}>
                <ModalBody>
                    { children }
                </ModalBody>
            </Modal>
        </>
    )
}

ModalBig.propTypes = {
    show: PropTypes.bool,
    setShow: PropTypes.func,
    children: PropTypes.object,
}


export default ModalBig;
