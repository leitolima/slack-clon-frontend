import styled from 'styled-components';

export const Overlay = styled.div`
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    opacity: .5;
    z-index: 100;
    cursor: default;
    background-color: black;
    display: ${p => p.show ? 'block' : 'none'};
`;

export const Modal = styled.section`
    z-index: 101;
    position: fixed;
    border-radius: 6px;
    width: 520px;
    height: 560px;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -48%);
    display: ${p => p.show ? 'block' : 'none'};
    border: 1px solid ${p => p.theme.colors['violet']['border']};
    background-color: ${p => p.theme.colors['dark']['section-background']};
`

export const ModalBody = styled.article`
    padding: 20px;
    cursor: default;
`;