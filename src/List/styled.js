import styled, { css } from "styled-components";

export const Tasks = styled.ul`
    list-style: none;
    margin: 0;
    padding: 0;
`;

export const Item = styled.li`
    display: grid;
    grid-template-columns: auto 1fr auto;
    grid-gap: 20px;
    padding: 20px;
    align-items: center;
    border-bottom: 1px solid #dddddd;

    ${({ hidden }) => hidden && css`
        display: none;
    `}
`;

export const Button = styled.button`
    cursor: pointer;
    border: none;
    line-height: 50%;
    padding: 5px;
    background-color: inherit;
    color: teal;
    transition: color 0.3s;

    ${({ toggleDone }) => toggleDone && css`
        color: #fefefe;
        background-color: teal;

        &:hover {
            background-color: hsl(180, 100%, 28%);
        }
    `}

    ${({ remove }) => remove && css`
        color: crimson;

        &:hover {
            color: red;
        }
    `}
`;

export const Content = styled.span`
    overflow-wrap: anywhere;

    ${({ done }) => done && css`
        text-decoration: line-through;
    `}

    @media (max-width: 767px) {
        justify-self: center;
    }
`;

