import styled from 'styled-components';

export const Container = styled.div`
    height: calc(100% - 155px);
    width: 100%;
    overflow-y: auto;
    &::-webkit-scrollbar {
        width: 8px;
    }
    &::-webkit-scrollbar-track {
        background: transparent;
    }
    &::-webkit-scrollbar-thumb {
        border-radius: 999px;
        background: ${p => p.theme.colors['dark']['message-text']};
    }
`;

export const ChatArea = styled.article`
    display: flex;
    flex-direction: column;
`;