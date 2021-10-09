import React from 'react';
import PropTypes from 'prop-types';

import {
    Container,
    Overlay,
    Modal,
    ModalBody,
} from './styles';

const ModalBig = ({ show = true, setShow, children }) => {
    return (
        <Container show={show}>
            <Overlay onClick={() => setShow(false)}/>
            <Modal show={show}>
                <ModalBody>
                    { children }
                </ModalBody>
            </Modal>
        </Container>
    )
}

ModalBig.propTypes = {
    show: PropTypes.bool,
    setShow: PropTypes.func,
    children: PropTypes.array,
}


export default ModalBig;
