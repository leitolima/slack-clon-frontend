import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHashtag } from '@fortawesome/free-solid-svg-icons';

import {
    ListContainer,
    ListItem,
} from './styles';

const ChannelsList = ({
    show,
    loading,
    data,
}) => {

    return (
        <ListContainer show={show}>
            {
                !loading && data?.channels?.length
                    ? data.channels.map(item => (
                        <ListItem key={item.id}>
                            <FontAwesomeIcon icon={faHashtag}/>
                            {item.name}
                        </ListItem>
                    ))
                    : null
            }
        </ListContainer>
    )
}

export default ChannelsList;
