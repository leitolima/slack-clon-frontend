import styled from 'styled-components';

export const SectionField = styled.section`
    grid-area: section;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background-color: ${p => p.theme.colors['dark']['section-background']};;
`;