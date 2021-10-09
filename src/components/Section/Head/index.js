import React from 'react';
import PropTypes from 'prop-types';

import {
    Container,
    Title,
    MembersContainer,
} from './styles';

const Head = ({ loading, error, title = '', members = [] }) => {
    return (
        <Container>
            <Title>{title}</Title>
            <MembersContainer>
                
            </MembersContainer>
        </Container>
    )
}

Head.propTypes = {
    loading: PropTypes.bool,
    loading: PropTypes.object,
    title: PropTypes.string,
    members: PropTypes.arrayOf(PropTypes.object)
}

export default Head;
