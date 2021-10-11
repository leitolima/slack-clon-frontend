import React from 'react';
import PropTypes from 'prop-types';

import {
    Container,
    ChatArea,
} from './styles';
import Message from './Message';

const MessagesArea = ({
    error,
    loading,
    messages,
}) => {

    console.log(messages);

    const renderChildren = () => {
        if (loading || error) return null;
        if (!messages || !messages.length) return null;
        return <ChatArea>
            {
                messages.map((item, index, array) => (
                    <Message
                        key={item.id}
                        message={item}
                        first={index > 0 ? array[index-1].user.id !== item.user.id : true}
                    />
                ))
            }
        </ChatArea>
    }

    return (
        <Container>
            { renderChildren() }
        </Container>
    )
}

MessagesArea.propTypes = {
    error: PropTypes.object,
    loading: PropTypes.bool,
    messages: PropTypes.array,
}

export default MessagesArea;
