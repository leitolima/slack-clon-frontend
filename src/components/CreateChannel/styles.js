import styled from 'styled-components';

export const TitleContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 12px;
`;

export const CancelButton = styled.button`
    height: 32px;
    width: 32px;
    border: none;
    cursor: pointer;
    border-radius: 6px;
    background: transparent;
    transition-duration: 250ms;
    color: ${p => p.theme.colors['dark']['message-text']};
    svg {
        font-size: 22px;
    }
    &:focus {
        outline: none;
    }
    &:hover {
        background-color: ${p => p.theme.colors['dark']['item-hover']};
    }
`;

export const Title = styled.h1`
    margin: 0;
    font-size: 30px;
    font-weight: 700;
    color: ${p => p.theme.colors['dark']['message-text']};
`;

export const Main = styled.div`
    height: auto;
    width: 100%;
`;

export const Description = styled.p`
    font-size: 16px;
    font-weight: 400;
    color: ${p => p.theme.colors['dark']['text']};
`;

export const Form = styled.form`
    height: auto;
    display: flex;
    margin-top: 26px;
    flex-direction: column;
`;

export const InputGroup =styled.div`
    margin-bottom: 24px;
`;

export const Label = styled.label`
    display: block;
    font-size: 16px;
    font-weight: 700;
    color: ${p => p.theme.colors['dark']['text']};
`;

export const LightText = styled.span`
    font-weight: 500;
`;  

export const InputContainer = styled.div`
    width: 100%;
    display: flex;
    height: 42px;
    border-radius: 6px;
    box-sizing: border-box;
    margin-top: 6px;
    margin-bottom: 2px;
    border: 1px solid ${p => p.theme.colors['dark']['text']};
    box-shadow: ${p => p.chars < 0 ? '0 0 0 1px #e01e5a, 0 0 0 5px rgb(224 30 90 / 30%)' : 'none'};
`;

export const DivInfo = styled.div`
    width: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    svg {
        margin-left: 10px;
        color: ${p => p.theme.colors['dark']['text']};
    }
`;

export const Span = styled.span`
    font-weight: 700;
    color: ${p => p.chars < 0 ? p.theme.colors['dark']['error'] : p.theme.colors['dark']['text']};
`;

export const Input = styled.input`
    flex: 1;
    border: none;
    display: block;
    font-size: 18px;
    font-weight: 500;
    margin-top: 4px;
    background: transparent;
    padding-left: 8px;
    padding-right: 8px;
    color: ${p => p.theme.colors['dark']['message-text']};
    &::placeholder {
        color: ${p => p.theme.colors['dark']['text']};
    }
    &:focus {
        outline: none;
    }
`;

export const FootParagraph = styled.p`
    font-size: 15px;
    margin: 0;
    color: ${p => p.theme.colors['dark']['text']};
`;

export const PublicOption = styled.div`
    display: flex;
    justify-content: space-between;
    & :nth-child(1) {
        width: 65%;
    }
`;

export const Submit = styled.button`
    width: 76px;
    height: 38px;
    border: none;
    display: flex;
    cursor: pointer;
    font-size: 15px;
    font-weight: 700;
    border-radius: 6px;
    align-items: center;
    align-self: flex-end;
    justify-content: center;
    color: ${p => p.theme.colors['dark']['text']};
    background-color: ${p => p.disabled ? p.theme.colors['dark']['item-hover'] : p.theme.colors['dark']['checked']}
`;