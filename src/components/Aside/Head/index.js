import React, { useEffect } from 'react';

import { useQuery } from '@apollo/client';
import { groupId } from '../../../apollo/state';
import { GET_MY_GROUPS, GET_USER_ID } from '../../../graphql/querys';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit } from '@fortawesome/free-regular-svg-icons';

import {
    Container,
    GroupTitle,
    Button,
} from './styles';

const Head = () => {

    const { data: { userId } } = useQuery(GET_USER_ID);
    const { data } = useQuery(GET_MY_GROUPS, {
        variables: { userId }
    });

    useEffect(() => {
        if(data && data.groups && data.groups.length) {
            const { id } = data.groups[0];
            groupId(id);
        }
    }, [data])

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
