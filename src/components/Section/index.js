import React from 'react';

import {
    SectionField,
} from './styles';
import Head from './Head';
import TextArea from './TextArea';

const Section = () => {
    return (
        <SectionField>
            <Head/>
            <TextArea/>
        </SectionField>
    )
}

export default Section;
