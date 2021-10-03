import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    height: 105px;
    display: flex;
    justify-content: center;
`;

export const InputArea = styled.textarea`
    width: 95%;
    height: 75px;
    resize: none;
    border-radius: 5px;
    background-color: transparent;
    color: ${p => p.theme.colors['dark']['message-text']};
    border: 1px solid ${p => p.theme.colors['dark']['sidebar-text']};
    &:focus {
        outline: none;
    }
`;