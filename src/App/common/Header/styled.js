import styled from "styled-components";

export const StyledHeader = styled.h1`
    color: ${({ theme }) => theme.colors.header};
    font-size: 42px;
    display: flex;
    justify-content: space-between;
    align-items: center
`;