import React from 'react';

import { useReactiveVar } from '@apollo/client';
import { createChannelModal } from '../../apollo/state';

import ModalBig from '../Modals/ModalBig';

const CreateChannel = () => {

    const showModal = useReactiveVar(createChannelModal);

    return (
        <ModalBig show={showModal} setShow={() => createChannelModal(false)}>
            
        </ModalBig>
    )
}

export default CreateChannel
