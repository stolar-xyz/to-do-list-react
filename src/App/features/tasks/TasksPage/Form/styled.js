import styled from "styled-components";

export const StyledForm = styled.form`
    display: grid;
    grid-template-columns: 1fr auto;
    grid-gap: 10px;

    @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
        grid-template-columns: 1fr;
    }
`;

export const Button = styled.button`
    cursor: pointer;
    border: none;
    color: ${({ theme }) => theme.colors.formButtonText};
    background-color: ${({ theme }) => theme.colors.button};
    padding: 10px 15px;
    transition: filter 0.3s, transform 0.3s;

    @media (pointer: fine) {
        &:hover {
        filter: brightness(1.1);
        }
    }

    &:active {
        transform: scale(1.05);
    }
`;