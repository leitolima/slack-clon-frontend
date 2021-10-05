import styled from 'styled-components';

export const Container = styled.div`
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    padding: 20px 0;
    z-index: 100;
    cursor: default;
    align-items: center;
    justify-content: center;
    background-color: rgba(0, 0, 0, 0.5);
    display: ${p => p.show ? 'flex' : 'none'};
`;

export const Overlay = styled.div`
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0px;
    z-index: 105;
`;

export const Modal = styled.section`
    z-index: 110;
    position: relative;
    border-radius: 6px;
    width: 520px;
    height: 100%;
    max-height: 580px;
    display: ${p => p.show ? 'block' : 'none'};
    border: 1px solid ${p => p.theme.colors['violet']['border']};
    background-color: ${p => p.theme.colors['dark']['section-background']};
`

export const ModalBody = styled.article`
    height: 544px;
    cursor: default;
    padding: 18px 28px;
`;