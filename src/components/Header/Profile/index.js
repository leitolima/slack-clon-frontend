import React from 'react';
import { useQuery } from '@apollo/client';
import { GET_USER_IMAGE } from '../../../graphql/querys';

import {
    ImageContainer,
    Image,
} from './styles';

const Profile = () => {

    const { data } = useQuery(GET_USER_IMAGE, {
        fetchPolicy: 'cache-only',
    })

    return (
        <ImageContainer>
            <Image src={data?.user?.imageUrl} alt="Profile"/>
        </ImageContainer>
    )
}

export default Profile;
