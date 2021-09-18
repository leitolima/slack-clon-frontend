import styled from 'styled-components';

export const Container = styled.div`
    height: 50px;
    min-height: 50px;
    border-top: 1px solid ${p => p.theme.colors['violet']['border']};
`;