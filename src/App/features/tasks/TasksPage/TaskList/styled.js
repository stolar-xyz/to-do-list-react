import { Link } from "react-router-dom";
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
    border-bottom: 1px solid ${({ theme }) => theme.colors.border};

    ${({ hidden }) => hidden && css`
        display: none;
    `}
`;

export const ItemButton = styled.button`
    cursor: pointer;
    border: none;
    line-height: 50%;
    padding: 5px;
    background-color: transparent;
    color: ${({ theme }) => theme.colors.button};
    transition: color 0.2s, filter 0.2s;

    ${({ toggleDone }) => toggleDone && css`
        color: #fefefe;
        background-color: ${({ theme }) => theme.colors.button};

        &:hover {
        filter: brightness(1.1);
        }
    `};

    ${({ remove }) => remove && css`
        color: crimson;
    `}
`;

export const Content = styled.div`
    text-align: center;
`;

export const ItemContent = styled.span`
    overflow-wrap: anywhere;

    ${({ done }) => done && css`
        text-decoration: line-through;
    `}

    @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
        text-align: center;
    }
`;

export const StyledLink = styled(Link)`
    color: ${({ theme }) => theme.colors.links.task};
    text-decoration: none;

    @media (pointer: fine) {
        &:hover { 
            border-bottom: 1px solid; 
        }
    }
`;