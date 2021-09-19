import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit } from '@fortawesome/free-regular-svg-icons';

import {
    Container,
    GroupTitle,
    Button,
} from './styles';

const Head = () => {
    return (
        <Container>
            <GroupTitle>Slack Clon</GroupTitle>
            <Button>
                <FontAwesomeIcon icon={faEdit}/>
            </Button>
        </Container>
    )
}

export default Head;
