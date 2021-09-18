import styled from 'styled-components';

export const List = styled.ul`
    list-style-type: none;
    display: flex;
    flex-direction: column;
    padding: 0;
    margin: 14px 0px;
`;

export const ListItem = styled.li`
    font-weight: 600;
    font-size: 16px;
    margin-bottom: 7px;
    color: ${p => p.theme.colors['dark']['sidebar-text']};
`;