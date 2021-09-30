import {
    InMemoryCache
} from '@apollo/client';
import {
    userId
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
                }
            }
        }
    }
});