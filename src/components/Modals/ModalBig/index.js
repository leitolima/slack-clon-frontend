import React from 'react';
import PropTypes from 'proptypes';

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
    children: PropTypes.object,
}


export default ModalBig;
