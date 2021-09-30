import React, { useEffect } from 'react';

import { groupId } from '../../../apollo/state';
import { useQuery, useReactiveVar } from '@apollo/client';
import { GET_MY_GROUPS, GET_USER_ID } from '../../../graphql/querys';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit } from '@fortawesome/free-regular-svg-icons';

import {
    Container,
    GroupTitle,
    Button,
} from './styles';

const Head = () => {

    const group = useReactiveVar(groupId);

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

    const renderGroupName = () => {
        const localGroup = data.groups.filter(item => item.id === group)
        return localGroup[0].name;
    }

    return (
        <Container>
            {
                group
                    ? <>
                        <GroupTitle>{renderGroupName()}</GroupTitle>
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
