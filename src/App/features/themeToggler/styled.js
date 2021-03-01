import styled from "styled-components";
import { FaMoon, FaSun } from "react-icons/fa";

export const TogglerThemeButton = styled.button`
    cursor: pointer;
    border: none;
    line-height: 50%;
    padding: 0px;
    margin-right: 25px;
    font-size: 28px;
    background-color: transparent;
    transition: filter 0.3s;

    &:hover {
        filter: brightness(1.2);
    }
`;

export const SunIcon = styled(FaSun)`
    color: ${({ theme }) => theme.colors.themeToggler};
`;

export const MoonIcon = styled(FaMoon)`
    color: ${({ theme }) => theme.colors.themeToggler};
`;