import React, { useState, useEffect } from 'react';

import { groupId } from '../../../../apollo/state';
import { useQuery, useLazyQuery, useReactiveVar } from '@apollo/client';
import { GET_MY_CHANNELS, GET_USER_ID } from '../../../../graphql/querys';

import {
    Container,
} from './styles';
import Buttons from './Buttons';
import ChannelsList from './ChannelsList';

const Channels = () => {
    
    const [open, setOpen] = useState(false);

    const group = useReactiveVar(groupId);
    const { data: { userId } } = useQuery(GET_USER_ID);

    const [getChannels, { data: dataChannels, loading }] = useLazyQuery(GET_MY_CHANNELS);

    useEffect(() => {
        if(group && userId && !dataChannels) {
            getChannels({
                variables: {
                    groupId: group,
                    userId
                }
            });
        }
    }, [group, userId])

    return (
        <Container>
            <Buttons open={open} setOpen={setOpen}/>
            <ChannelsList show={open} loading={loading} data={dataChannels}/>
        </Container>
    )
}

export default Channels;
