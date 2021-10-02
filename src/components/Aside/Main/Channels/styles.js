import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
`;

export const TitleContainer = styled.div`
    display: flex;
    height: 36px;
    display: flex;
    cursor: pointer;
    padding-left: 16px;
    align-items: center;
    justify-content: space-between;
`;

export const Flex = styled.div`
    display: flex;
`;

export const Title = styled.h2`
    font-weight: 600;
    font-size: 16px;
    margin: 0;
    margin-top: 4px;
    color: ${p => p.theme.colors['dark']['sidebar-text']};
`;

export const Button = styled.button`
    border: none;
    border-radius: 6px;
    background: transparent;
    cursor: pointer;
    height: 30px;
    padding-left: 12px;
    padding-right: 12px;
    margin-right: 4px;
    text-align: center;
    transition-duration: 250ms;
    opacity: ${p => p.show ? '1' : p.hover ? '1' : '0'};
    color: ${p => p.theme.colors['dark']['sidebar-text']};
    svg.caret {
        transition-duration: 150ms;
        transform: rotate(${p => p.open ? '90deg' : ''});
    }
    &:focus {
        outline: none;
    }
    &:hover {
        background-color: ${p => p.theme.colors['violet']['sidebar-item-hover']};
    }
`;