import React from 'react';
import PropTypes from 'proptypes';
import { useHistory } from 'react-router-dom';

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

    return (
        <ListContainer show={show}>
            {
                !loading && data?.channels?.length
                    ? data.channels.map(item => (
                        <ListItem
                            key={item.id}
                            selected={route === item.id}
                            onClick={() => history.push(`/${item.id}`)}
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
