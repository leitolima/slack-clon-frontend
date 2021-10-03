import styled from 'styled-components';

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
    &:nth-child(1) {
        flex-grow: 1;
    }
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

export const ModalList = styled.ul`
    list-style-type: none;
    margin: 0;
    padding: 0;
`;

export const ModalOption = styled.li`
    font-size: 16px;
    font-weight: 600;
    padding: 3px 20px;
    width: 160px;
    color: ${p => p.theme.colors['dark']['sidebar-text']};
    &:hover {
        cursor: pointer;
        color: ${p => p.theme.colors['dark']['message-text']};
        background-color: ${p => p.theme.colors['dark']['lightblue']};
    }
`;