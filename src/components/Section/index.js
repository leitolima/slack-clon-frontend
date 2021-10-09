import React, { useEffect } from 'react';

import { channelId } from '../../apollo/state';
import { useQuery, useLazyQuery, useReactiveVar } from '@apollo/client';
import { GET_CHANNEL, GET_USER_ID } from '../../graphql/querys';

import {
    SectionField,
} from './styles';
import Head from './Head';
import MessagesArea from './MessagesArea';
import TextArea from './TextArea';

const Section = () => {

    const channel = useReactiveVar(channelId);

    const { data: { userId } } = useQuery(GET_USER_ID);
    const [getChannel, { data: channelData, loading, error }] = useLazyQuery(GET_CHANNEL);

    useEffect(() => {
        if (userId && channelId && !loading) {
            getChannel({
                variables: {
                    channelId: channel,
                    userId
                }
            })
        }
    }, [channel, userId]);

    return (
        <SectionField>
            <Head
                error={error}
                loading={loading}
                title={channelData?.channel?.name}
                members={channelData?.channel?.members}
            />
            <MessagesArea/>
            <TextArea/>
        </SectionField>
    )
}

export default Section;
