import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock, faQuestionCircle } from '@fortawesome/free-regular-svg-icons';

import {
    HeaderField,
    History,
    Info,
} from './styles';
import SearchInput from './SearchInput';
import Profile from './Profile';

const Header = () => {
    return (
        <HeaderField>
            <History>
                <FontAwesomeIcon icon={faClock}/>
            </History>
            <SearchInput/>
            <Info>
                <FontAwesomeIcon icon={faQuestionCircle}/>
            </Info>
            <Profile/>
        </HeaderField>
    )
}

export default Header;
