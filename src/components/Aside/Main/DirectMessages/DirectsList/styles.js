import styled from 'styled-components';

export const ListContainer = styled.ul`
    list-style-type: none;
    display: ${p => p.show ? 'flex' : 'none'};
    flex-direction: column;
    padding: 0;
    margin-top: 0;
    margin-bottom: 10px;
`;

export const ListItem = styled.li`
    font-weight: 600;
    font-size: 16px;
    color: ${p => p.selected ? 'white' : p.theme.colors['dark']['sidebar-text']};
    padding-top: 3.5px;
    padding-bottom: 3.5px;
    padding-left: 34px;
    cursor: pointer;
    display: flex;
    align-items: center;
    svg {
        margin-right: 12px;
        font-size: 12px;
    }
    background-color: ${p => p.selected ? p.theme.colors['violet']['main'] : 'transparent'};
    &:hover {
        background-color: ${p => p.selected ? p.theme.colors['violet']['main'] : p.theme.colors['violet']['sidebar-item-hover']};
    }
`;

export const Image = styled.img`
    width: 22px;
    height: 22px;
    object-fit: cover;
    margin-right: 4px;
    border-radius: 4px;
`;