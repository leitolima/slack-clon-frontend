import React, { useState, useEffect } from 'react';

import { groupId } from '../../../../apollo/state';
import { useQuery, useLazyQuery, useReactiveVar } from '@apollo/client';
import { GET_MY_CHANNELS, GET_USER_ID } from '../../../../graphql/querys';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretRight, faEllipsisV, faPlus } from '@fortawesome/free-solid-svg-icons';

import {
    Container,
    TitleContainer,
    Flex,
    Title,
    Button
} from './styles';
import ChannelsList from './ChannelsList';

const Channels = () => {
    
    const [open, setOpen] = useState(false);
    const [hover, setHover] = useState(false);

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
            <TitleContainer
                onMouseEnter={() => setHover(true)}
                onMouseLeave={() => setHover(false)}
                onClick={() => setOpen(!open)}
            >
                <Flex>
                    <Button show open={open}>
                        <FontAwesomeIcon className="caret" icon={faCaretRight}/>
                    </Button>
                    <Title>Canales</Title>
                </Flex>
                <Flex>
                    <Button hover={hover}>
                        <FontAwesomeIcon icon={faEllipsisV}/>
                    </Button>
                    <Button hover={hover}>
                        <FontAwesomeIcon icon={faPlus}/>
                    </Button>
                </Flex>
            </TitleContainer>
            <ChannelsList show={open} loading={loading} data={dataChannels}/>
        </Container>
    )
}

export default Channels;
