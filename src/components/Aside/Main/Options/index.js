import React from 'react';

import {
    List,
    ListItem,
} from './styles';

const Options = () => {
    return (
        <List>
            <ListItem>Hilos de conversaciones</ListItem>
            <ListItem>Todos los mensajes directos</ListItem>
            <ListItem>Menciones y reacciones</ListItem>
            <ListItem>Slack Connect</ListItem>
            <ListItem>Más</ListItem>
        </List>
    )
}

export default Options;
