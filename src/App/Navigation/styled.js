import { NavLink } from "react-router-dom";
import styled from "styled-components";

const activeClassName = "active";

export const StyledNavLink = styled(NavLink).attrs(() => ({
    activeClassName,
}))`
    color: ${({ theme }) => theme.colors.links.navigation};
    text-decoration: none;

    &.${activeClassName} {
        font-weight: bold;
    }

    @media (pointer: fine) {
        &:hover { 
            border-bottom: 1px solid; 
        }
}
`;

export const List = styled.ul`
    display: flex;
    justify-content: center;
    list-style-type: none;
    margin: 0;
    padding: 0;
`;

export const ListItem = styled.li`
    padding: 20px;
    font-size: 18px;
`;