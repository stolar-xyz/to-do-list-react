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
    border-bottom: 1px solid ${({ theme }) => theme.colors.borderColor};

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
    color: ${({ theme }) => theme.colors.main};
    transition: color 0.2s, filter 0.2s;

    ${({ toggleDone }) => toggleDone && css`
        color: #fefefe;
        background-color: ${({ theme }) => theme.colors.main};

        &:hover {
        filter: brightness(1.1);
        }
    `};

    ${({ remove }) => remove && css`
        color: crimson;
    `}
`;

export const Content = styled.span`
    overflow-wrap: anywhere;

    ${({ done }) => done && css`
        text-decoration: line-through;
    `}

    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
        justify-self: center;
    }
`;

