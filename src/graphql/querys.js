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

export const GET_USER_IMAGE = gql`
    query {
        user: getRandomUser {
            imageUrl @client
        }
    }
`;

export const GET_USER_ID = gql`
    query getUserId {
        userId @client
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

export const GET_GROUP_ID = gql`
    query getGroupId {
        groupId @client
    }
`;