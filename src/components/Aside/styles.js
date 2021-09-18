import styled from 'styled-components';

export const AsideField = styled.aside`
    grid-area: aside;
    background-color: ${p => p.theme.colors['violet']['sidebar-background']};
    display: flex;
    flex-direction: column;
    border-right: 1px solid ${p => p.theme.colors['violet']['border']};
`;