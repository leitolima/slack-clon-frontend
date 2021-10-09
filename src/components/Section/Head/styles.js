import styled from 'styled-components';

export const Container = styled.div`
    height: 50px;
    display: flex;
    padding: 0 20px;
    min-height: 50px;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid ${p => p.theme.colors['violet']['border']};
`;

export const Title = styled.h1`
    left: -8px;
    cursor: pointer;
    font-size: 21px;
    font-weight: 700;
    padding: 2px 8px;
    position: relative;
    border-radius: 6px;
    color: ${p => p.theme.colors['dark']['sidebar-text']};
    svg {
        margin-right: 5px;
    }
    &:hover {
        background-color: ${p => p.theme.colors['dark']['item-hover']};
    }
`;

export const MembersContainer = styled.div`
    height: 24px;
    padding: 3px;
    display: flex;
    border-radius: 6px;
    border: 1px solid ${p => p.theme.colors['violet']['border']};
`;