import styled from 'styled-components';

export const List = styled.ul`
    list-style-type: none;
    display: flex;
    flex-direction: column;
    padding: 0;
    margin: 12px 0px;
`;

export const ListItem = styled.li`
    font-weight: 400;
    font-size: 16px;
    padding-top: 3.5px;
    padding-bottom: 3.5px;
    display: flex;
    align-items: center;
    cursor: pointer;
    padding-left: 16px;
    color: ${p => p.theme.colors['dark']['sidebar-text']};
    &:hover {
        background-color: ${p => p.theme.colors['violet']['sidebar-item-hover']};
    }
`;

export const IconContainer = styled.div`
    width: 16px;
    display: flex;
    margin-right: 8px;
    justify-content: center;
`;