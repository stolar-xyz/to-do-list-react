import React from "react";
import { toAuthor, toTasks } from "../routes";
import { List, ListItem, StyledNavigation, StyledNavLink } from "./styled";

const Navigation = () => (
    <StyledNavigation>
        <List>
            <ListItem>
                <StyledNavLink exact to={toTasks()}>Tasks</StyledNavLink>
            </ListItem>
            <ListItem>
                <StyledNavLink to={toAuthor()}>Author</StyledNavLink>
            </ListItem>
        </List>
    </StyledNavigation>
);

export default Navigation;