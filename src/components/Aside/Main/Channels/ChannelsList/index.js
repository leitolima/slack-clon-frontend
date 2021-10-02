import React from 'react';
import PropTypes from 'proptypes';

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

ChannelsList.proptypes = {
    show: PropTypes.bool,
    loading: PropTypes.bool,
    data: PropTypes.array,
}

export default ChannelsList;
