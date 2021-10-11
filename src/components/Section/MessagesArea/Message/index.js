import React from 'react';
import PropTypes from 'prop-types';

import {
    MessageContainer,
    Row,
    ImageSection,
    Image,
    TextSection,
    Name,
    Text,
    Time,
} from './styles';

const Message = ({ message, first }) => {
    return (
        <MessageContainer>
            <Row>
                {
                    first
                        ? <ImageSection>
                            <Image src={message.user.imageUrl}/>
                        </ImageSection>
                        : <ImageSection>
                            <Time>{message.time}</Time>
                        </ImageSection>
                }
                <TextSection>
                    { first ? <Name>{message.user.username}</Name> : null }
                    <Text>{message.text}</Text>
                </TextSection>
            </Row>
        </MessageContainer>
    )
}

Message.propTypes = {
    message: PropTypes.object,
    first: PropTypes.bool,
}

export default Message;
