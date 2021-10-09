import React, { useEffect } from 'react';

import { useQuery, useLazyQuery } from '@apollo/client';
import { GET_CHANNEL, GET_USER_ID } from '../../graphql/querys';

import {
    SectionField,
} from './styles';
import Head from './Head';
import MessagesArea from './MessagesArea';
import TextArea from './TextArea';

const Section = () => {

    const { data: { userId } } = useQuery(GET_USER_ID);
    const [getChannel, { data: channelData, loading, error }] = useLazyQuery(GET_CHANNEL);

    useEffect(() => {
        if (userId && !channelData && !loading) {
            const path = window.location.pathname.replace('/', '');
            getChannel({
                variables: {
                    channelId: path,
                    userId
                }
            })
        }
    }, [userId]);

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
