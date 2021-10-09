import React from 'react';
import PropTypes from 'prop-types';

import {
    Container,
    Title,
    MembersContainer,
    List,
    ListItem,
    ListImage,
    Span,
} from './styles';

const Head = ({ loading, error, title = '', members = [] }) => {

    const renderChildren = () => {
        if(loading || error) return null;
        return <>
            <Title>{title}</Title>
            <MembersContainer>
                <List>
                {
                    members.map((m, index) => {
                        if (index > 2) return null;
                        return (
                            <ListItem>
                                <ListImage src={m.imageUrl}/>
                            </ListItem>
                        )
                    })
                }
                </List>
                <Span>{members.length}</Span>
            </MembersContainer>
        </>
    }

    return (
        <Container>
            { renderChildren() }
        </Container>
    )
}

Head.propTypes = {
    loading: PropTypes.bool,
    title: PropTypes.string,
    members: PropTypes.arrayOf(PropTypes.object)
}

export default Head;
