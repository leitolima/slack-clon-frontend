import {
    InMemoryCache
} from '@apollo/client';

export const cache = new InMemoryCache({
    typePolicies: {
        User: {
            fields: {
                id: {
                    read(id = null) {
                        return id;
                    }
                }
            }
        },
        Query: {
            fields: {
                getRandomUser: {
                    read(_, { args, toReference }) {
                        return toReference({
                            __typename: 'User',
                        })
                    }
                }
            }
        }
    }
});