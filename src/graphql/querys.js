import { gql } from '@apollo/client';

export const GET_RANDOM_USER = gql`
    query getRandomUser {
        user: getRandomUser {
            id
            name
            username
            imageUrl
        }
    }
`;

export const GET_USER_DATA = gql`
    query {
        user: getRandomUser {
            id @client
        }
    }
`;

export const GET_MY_GROUPS = gql`
    query getMyGroups($userId: ID) {
        groups: getMyGroups(userId: $userId) {
            id
            name
        }
    }
`;
