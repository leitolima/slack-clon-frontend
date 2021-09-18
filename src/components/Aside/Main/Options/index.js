import React from 'react';

import {
    List,
    ListItem,
    IconContainer,
} from './styles';
import { items } from './constants';

const Options = () => {
    return (
        <List>
            {
                items.map(({ Component, text }, i) => (
                    <ListItem key={i}>
                        <IconContainer>
                            { Component }
                        </IconContainer>
                        { text }
                    </ListItem>
                ))
            }
        </List>
    )
}

export default Options;
