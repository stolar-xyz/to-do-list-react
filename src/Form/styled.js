import styled from "styled-components";

export const StyledForm = styled.form`
    display: grid;
    grid-template-columns: 1fr auto;
    grid-gap: 10px;

    @media (max-width: 767px) {
        grid-template-columns: 1fr;
    }
`;

export const Input = styled.input`
    border: 2px solid #dddddd;
    padding: 10px;
`;

export const Button = styled.button`
    cursor: pointer;
    border: none;
    color: white;
    background-color: hsl(180, 100%, 25%);
    padding: 10px 15px;
    transition: background-color 0.3s, transform 0.3s;

    &:hover {
        background-color: hsl(180, 100%, 27.5%);
    }

    &:active {
        background-color: hsl(180, 100%, 30%);
        transform: scale(1.05);
    }
`;