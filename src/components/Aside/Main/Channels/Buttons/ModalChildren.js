import React from 'react';
import PropTypes from 'proptypes';

import { createChannelModal } from '../../../../../apollo/state';

import {
    ModalList,
    ModalOption,
} from './styles';

const ModalChildren = ({ setShow }) => {

    const handleCreateChannel = () => {
        createChannelModal(true);
        setShow(false);
    }

    return (
        <ModalList>
            <ModalOption onClick={() => alert('Explorar canales')}>Explorar canales</ModalOption>
            <ModalOption onClick={handleCreateChannel}>Crear canal</ModalOption>
        </ModalList>
    )
}

ModalChildren.propTypes = {
    setShow: PropTypes.func,
}

export default ModalChildren;
