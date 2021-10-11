import React from 'react';
import PropTypes from 'prop-types';

import {
    ListContainer,
    ListItem,
    Image,
} from './styles';

const DirectsList = ({
    show,
    loading,
    data,
}) => {
    return (
        <ListContainer show={show}>
            {
                !loading && data?.directs?.length
                    ? data.directs.map(item => (
                        <ListItem
                            key={item.id}
                        >
                            <Image src={item.imageUrl}/>
                            { item.username }
                        </ListItem>
                    ))
                    : null
            }
        </ListContainer>
    )
}

DirectsList.propTypes = {
    show: PropTypes.bool.isRequired,
    loading: PropTypes.bool.isRequired,
    data: PropTypes.object,
}

export default DirectsList;
