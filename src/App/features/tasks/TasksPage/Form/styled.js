import styled from "styled-components";

export const StyledForm = styled.form`
    display: grid;
    grid-template-columns: 1fr auto;
    grid-gap: 10px;

    @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
        grid-template-columns: 1fr;
    }
`;

export const Input = styled.input`
    border: 2px solid ${({ theme }) => theme.colors.borderColor};
    padding: 10px;
`;

export const Button = styled.button`
    cursor: pointer;
    border: none;
    color: white;
    background-color: ${({ theme }) => theme.colors.main};;
    padding: 10px 15px;
    transition: filter 0.3s, transform 0.3s;

    &:hover {
        filter: brightness(1.1);
    }

    &:active {
        filter: brightness(1.2);
        transform: scale(1.05);
    }
`;