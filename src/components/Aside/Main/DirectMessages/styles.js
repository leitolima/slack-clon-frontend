import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
`;

export const TitleContainer = styled.div`
    display: flex;
    height: 36px;
`;

export const Title = styled.h2`
    font-weight: 600;
    font-size: 16px;
    margin: 0;
    color: ${p => p.theme.colors['dark']['sidebar-text']};
`;