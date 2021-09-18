import styled from 'styled-components';

export const Container = styled.div`
    height: 50px;
    min-height: 50px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 16px;
    border-bottom: 1px solid ${p => p.theme.colors['violet']['border']};
`;

export const GroupTitle = styled.h1`
    color: white;
    font-size: 20px;
`;

export const Button = styled.button`
    width: 34px;
    height: 34px;
    border: none;
    border-radius: 50%;
    background-color: white;
    &:focus {
        outline: none;
    }
`;