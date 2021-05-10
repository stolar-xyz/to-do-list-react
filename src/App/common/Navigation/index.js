import { toAuthor, toTasks } from "../../routes";
import { List, ListItem, StyledNavLink } from "./styled";

const Navigation = () => (
    <nav>
        <List>
            <ListItem>
                <StyledNavLink exact to={toTasks()}>Tasks</StyledNavLink>
            </ListItem>
            <ListItem>
                <StyledNavLink to={toAuthor()}>Author</StyledNavLink>
            </ListItem>
        </List>
    </nav>
);

export default Navigation;