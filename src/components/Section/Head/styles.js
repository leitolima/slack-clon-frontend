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

export const Title = styled.h1`
    font-size: 21px;
    font-weight: 700;
    color: ${p => p.theme.colors['dark']['sidebar-text']};
    svg {
        margin-right: 5px;
    }
`;