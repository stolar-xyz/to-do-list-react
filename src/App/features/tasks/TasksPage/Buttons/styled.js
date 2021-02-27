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
    color: ${({ theme }) => theme.colors.button};
    background-color: transparent;
    transition: color 0.2s, filter 0.2s;

    @media (pointer: fine) {
        &:hover { 
            filter: brightness(1.2); 
        }
    }

    ${({ disabled }) => disabled && css`
        color: ${({ theme }) => theme.colors.disabled};
        cursor: default;
    `}

    ${({ loading }) => loading && css`
        color: ${({ theme }) => theme.colors.disabled};
        cursor: default;
    `}
`;

export const Loading = styled.span`
    color: ${({ theme }) => theme.colors.disabled};
    margin: 15px;
    align-self: center;
`;