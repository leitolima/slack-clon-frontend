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
                },
                imageUrl: {
                    read(imageUrl = '') {
                        return imageUrl;
                    }
                }
            }
        }
    }
});