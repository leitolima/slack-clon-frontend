import React, { useState, useEffect } from 'react';

import { groupId } from '../../../../apollo/state';
import { useQuery, useLazyQuery, useReactiveVar } from '@apollo/client';
import { GET_DIRECT_MESSAGES, GET_USER_ID } from '../../../../graphql/querys';

import {
    Container,
} from './styles';
import Buttons from './Buttons';
import DirectsList from './DirectsList';

const DirectMessages = () => {

    const [open, setOpen] = useState(false);

    const group = useReactiveVar(groupId);
    const { data: { userId } } = useQuery(GET_USER_ID);

    const [getDirectMessages, { data: dataDirects, loading }] = useLazyQuery(GET_DIRECT_MESSAGES);

    useEffect(() => {
        if(group && userId && !dataDirects) {
            getDirectMessages({
                variables: {
                    groupId: group,
                    userId
                }
            })
        }
    }, [group, userId])

    return (
        <Container>
            <Buttons open={open} setOpen={setOpen}/>
            <DirectsList show={open} loading={loading} data={dataDirects}/>
        </Container>
    )
}

export default DirectMessages;
