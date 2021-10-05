import { gql } from '@apollo/client';

export const CREATE_CHANNEL = gql`
    mutation createChannel($input: ChannelInput){
        channel: createChannel(input: $input) {
            id
            name
            public
            channelType
        }
    }
`;