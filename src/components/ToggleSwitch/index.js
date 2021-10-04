import React from 'react';
import PropTypes from 'proptypes';

import {
    Label,
    Input,
    Span,
} from './styles';

const ToggleSwitch = ({
    id,
    value,
    handleChange,
}) => {
    return (
        <Label>
            <Input
                id={id}
                value={value}
                type="checkbox"
                onChange={handleChange}
            />
            <Span></Span>
        </Label>
    )
}

ToggleSwitch.protoTypes = {
    id: PropTypes.string,
    value: PropTypes.bool,
    handleChange: PropTypes.func,
}

export default ToggleSwitch;
