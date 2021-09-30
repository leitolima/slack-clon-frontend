import React, { useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock, faQuestionCircle } from '@fortawesome/free-regular-svg-icons';

import { useQuery } from '@apollo/client';
import { GET_USER_DATA } from '../../graphql/querys';

import {
    HeaderField,
    History,
    Info,
} from './styles';
import SearchInput from './SearchInput';
import Profile from './Profile';

const Header = () => {

    const { data } = useQuery(GET_USER_DATA, {
        fetchPolicy: 'cache-only',
    })

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
