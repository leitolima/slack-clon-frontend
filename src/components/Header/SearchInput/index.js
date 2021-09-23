import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

import {
    InputContainer,
    Input,
} from './styles';

const SearchInput = () => {
    return (
        <InputContainer>
            <Input placeholder="Buscar en Slack Clon"/>
            <FontAwesomeIcon icon={faSearch}/>
        </InputContainer>
    )
}

export default SearchInput;
