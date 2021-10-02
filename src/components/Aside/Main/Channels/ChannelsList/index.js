import React, { useEffect } from 'react';
import PropTypes from 'proptypes';
import { useHistory } from 'react-router-dom';

import { channelName } from '../../../../../apollo/state';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHashtag, faLock } from '@fortawesome/free-solid-svg-icons';

import {
    ListContainer,
    ListItem,
} from './styles';

const ChannelsList = ({
    show,
    loading,
    data,
}) => {

    const history = useHistory();
    const { location: { pathname } } = history;
    const route = pathname.replace('/', '');

    const handleSelect = (id, name) => {
        channelName(name);
        history.push(`/${id}`)
    }

    // Load channel name at the first moment
    useEffect(() => {
        if(data && data.channels) {
            const selected = data.channels.filter(item => item.id === route);
            const { name } =  selected[0];
            channelName(name);
        }
    }, [data]);

    return (
        <ListContainer show={show}>
            {
                !loading && data?.channels?.length
                    ? data.channels.map(item => (
                        <ListItem
                            key={item.id}
                            selected={route === item.id}
                            onClick={() => handleSelect(item.id, item.name)}
                        >
                            <FontAwesomeIcon icon={item.public ? faHashtag : faLock}/>
                            {item.name}
                        </ListItem>
                    ))
                    : null
            }
        </ListContainer>
    )
}

ChannelsList.propTypes = {
    show: PropTypes.bool.isRequired,
    loading: PropTypes.bool.isRequired,
    data: PropTypes.object,
}

export default ChannelsList;
