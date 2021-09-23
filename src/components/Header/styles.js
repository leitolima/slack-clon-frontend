import styled from 'styled-components';

export const HeaderField = styled.header`
    grid-area: header;
    display: flex;
    align-items: center;
    background-color: ${p => p.theme.colors['violet']['main']};;
`;

export const History = styled.div`
    width: 260px;
    color: white;
    display: flex;
    justify-content: end;
    & svg {
        margin-right: 25px;
    }
`; 

export const Info = styled.div`
    color: white;
    margin-left: 25px;
`;