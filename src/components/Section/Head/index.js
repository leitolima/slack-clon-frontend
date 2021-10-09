import React from 'react';
import PropTypes from 'prop-types';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHashtag, faLock } from '@fortawesome/free-solid-svg-icons';

import {
    Container,
    TitleContainer,
    Title,
    P,
    MembersContainer,
    List,
    ListItem,
    ListImage,
    Span,
} from './styles';

const Head = ({
    error,
    loading,
    title = '',
    publicType,
    description,
    members = [],
}) => {

    const renderChildren = () => {
        if(loading || error) return null;
        return <>
            <TitleContainer>
                <Title>
                    <FontAwesomeIcon icon={publicType ? faHashtag : faLock}/>
                    {title}
                </Title>
                <P>{description}</P>
            </TitleContainer>
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
    error: PropTypes.object,
    title: PropTypes.string,
    publicType: PropTypes.bool,
    description: PropTypes.string,
    members: PropTypes.arrayOf(PropTypes.object)
}

export default Head;
