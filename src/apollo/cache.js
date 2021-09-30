import {
    InMemoryCache
} from '@apollo/client';
import {
    userId,
    groupId,
} from './state';

export const cache = new InMemoryCache({
    typePolicies: {
        User: {
            fields: {
                imageUrl: {
                    read(imageUrl = '') {
                        return imageUrl;
                    }
                }
            }
        },
        Query: {
            fields: {
                userId: {
                    read() {
                        return userId();
                    }
                },
                groupId: {
                    read() {
                        return groupId();
                    }
                }
            }
        }
    }
});