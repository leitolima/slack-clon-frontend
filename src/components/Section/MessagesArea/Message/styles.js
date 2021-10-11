import styled from 'styled-components';

export const MessageContainer = styled.div`
    display: flex;
`;

export const Row = styled.div`
    width: 100%;
    display: flex;
    padding: 4px 20px;
    &:hover {
        background-color: ${p => p.theme.colors['dark']['section-background-hover']};
        span {
            opacity: 1;
        }
    }
`;

export const ImageSection = styled.div`
    padding-right: 6px;
    width: 44px;
`;

export const Image = styled.img`
    height: 40px;
    width: 40px;
    object-fit: cover;
    border-radius: 4px;
`;

export const TextSection = styled.div`
    flex: 1;
    color: ${p => p.theme.colors['dark']['text']};
`;

export const Name = styled.h3`
    margin: 0;
    font-size: 16px;
    font-weight: 700;
`;

export const Text = styled.p`
    margin: 0;
    font-weight: 500;
`;

export const Time = styled.span`
    opacity: 0;
    display: block;
    font-size: 14px;
    text-align: center;
    transition-duration: 100ms;
    color: ${p => p.theme.colors['dark']['text']};
`;