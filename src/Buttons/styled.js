import styled, { css } from "styled-components";

export const Wrapper = styled.div`
    @media (max-width: 767px) {
        display: flex;
        flex-direction: column; 
    }
`;

export const Button = styled.button`
    margin: 15px;
    align-self: center;
    cursor: pointer;
    border: none;
    color: teal;
    background-color: inherit;
    transition: color 0.2s;

    &:hover {
    color: hsl(180, 100%, 35%);
    }

    ${({ disabled }) => disabled && css`
        color: #acacac;
        cursor: default;

        &:hover {
            color: #acacac;
        }
    `}
`;