import styled from 'styled-components';

export const Container = styled.div`
    height: 50px;
    min-height: 50px;
    padding-left: 32px;
    display: flex;
    align-items: center;
    color: ${p => p.theme.colors['dark']['sidebar-text']};
    border-top: 1px solid ${p => p.theme.colors['violet']['border']};
`;

export const ChannelName = styled.p`
    font-size: 18px;
    font-weight: 600;
    margin-left: 12px;
    color: ${p => p.theme.colors['dark']['sidebar-text']};
`;