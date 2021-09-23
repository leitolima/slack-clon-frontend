import styled from 'styled-components';

export const InputContainer = styled.div`
    position: relative;
    height: 24px;
    border-radius: 6px;
    width: 710px;
    margin: auto 0;
    border: 1px solid gray;
    display: flex;
    align-items: center;
    padding: 0 10px;
    color: white;
    background-color: ${p => p.theme.colors['violet']['input-background']};
`;

export const Input = styled.input`
    color: white;
    height: 100%;
    width: 100%;
    border: none;
    background: transparent;
    &::placeholder {
        color: white;
    }
    &:focus {
        outline: none;
    }
`;