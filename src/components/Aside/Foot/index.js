import React from 'react';

import { useReactiveVar } from '@apollo/client';
import { channelName } from '../../../apollo/state';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSatelliteDish } from '@fortawesome/free-solid-svg-icons';

import {
    Container,
    ChannelName,
} from './styles';

const Foot = () => {

    const channel = useReactiveVar(channelName);

    return (
        <Container>
            {
                channel.length
                    ? (
                        <>
                            <FontAwesomeIcon icon={faSatelliteDish}/>
                            <ChannelName>{channel}</ChannelName>
                        </>
                    )
                    : null
            }
        </Container>
    )
}

export default Foot;
