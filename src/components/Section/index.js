import React from 'react';

import {
    SectionField,
} from './styles';
import Head from './Head';
import MessagesArea from './MessagesArea';
import TextArea from './TextArea';

const Section = () => {
    return (
        <SectionField>
            <Head/>
            <MessagesArea/>
            <TextArea/>
        </SectionField>
    )
}

export default Section;
