import { makeVar } from '@apollo/client';

export const userId = makeVar(null);
export const groupId = makeVar(null);
export const channelName = makeVar('');

// For show Modals
export const createChannelModal = makeVar(false);