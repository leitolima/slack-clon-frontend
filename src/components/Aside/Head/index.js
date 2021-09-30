import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit } from '@fortawesome/free-regular-svg-icons';

import {
    Container,
    GroupTitle,
    Button,
} from './styles';

const Head = ({ userId }) => {


    return (
        <Container>
            {
                userId ? <>
                    <GroupTitle>Slack Clon</GroupTitle>
                    <Button>
                        <FontAwesomeIcon icon={faEdit}/>
                    </Button>
                </>
                : null
            }
        </Container>
    )
}

export default Head;
