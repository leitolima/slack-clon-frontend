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

export const List = styled.ul`
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: row;
    list-style-type: none;
`;

export const ListItem = styled.li`
    height: 24px;
    position: relative;
    border-radius: 3px;
    &:nth-child(1) { z-index: 10; }
    &:nth-child(2) { z-index: 9; right: 2px; }
    &:nth-child(3) { z-index: 8; right: 4px; }
    border-right: 2px solid ${p => p.theme.colors['dark']['section-background']};
    &:last-child {
        border-right: none;
    }
`;

export const ListImage = styled.img`
    height: 24px;
    width: 24px;
    border-radius: 3px;
    object-fit: cover;
`;

export const Span = styled.span`
    font-size: 18px;
    font-weight: 600;
    margin: 0px 6px;
    color: ${p => p.theme.colors['dark']['text']};
`;