import React from 'react';

import {
    ModalList,
    ModalOption,
} from './styles';

const ModalChildren = () => {
    return (
        <ModalList>
            <ModalOption>Explorar canales</ModalOption>
            <ModalOption>Crear canal</ModalOption>
        </ModalList>
    )
}

export default ModalChildren;
