import styled, { css } from "styled-components";

export const Wrapper = styled.div`
    @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
        display: flex;
        flex-direction: column; 
    }
`;

export const Button = styled.button`
    margin: 15px;
    padding: 0;
    align-self: center;
    cursor: pointer;
    border: none;
    color: ${({ theme }) => theme.colors.main};
    background-color: inherit;
    transition: color 0.2s, filter 0.2s;

    &:hover {
        filter: brightness(1.2);
    }

    ${({ disabled }) => disabled && css`
        color: #acacac;
        cursor: default;
    `}
`;

export const Loading = styled.span`
    color: #acacac;
    margin: 15px;
    align-self: center;
`;