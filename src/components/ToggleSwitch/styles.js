import styled from 'styled-components';

export const Label = styled.label`
    position: relative;
    display: inline-block;
    width: 52px;
    height: 30px;
`;

export const Input = styled.input`
    opacity: 0;
    width: 0;
    height: 0;
    &:checked + span {
        background-color: ${p => p.theme.colors['dark']['checked']};
        border-color: ${p => p.theme.colors['dark']['checked']};
    }
    &:checked + span::before {
        -webkit-transform: translateX(20px);
        -ms-transform: translateX(20px);
        transform: translateX(20px);
    }
    &:focus + span {
        /* box-shadow: 0 0 1px #2196F3; */
    }
`;

export const Span = styled.span`
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    -webkit-transition: .4s;
    transition: .4s;
    border-radius: 34px;
    background-color: transparent;
    border: 1px solid ${p => p.theme.colors['dark']['text']};
    &::before {
        position: absolute;
        content: "";
        height: 21px;
        width: 21px;
        left: 4px;
        bottom: 4px;
        background-color: white;
        -webkit-transition: .4s;
        transition: .4s;
        border-radius: 50%;
    }
`;