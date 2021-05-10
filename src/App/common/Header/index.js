import { StyledHeader } from "./styled";

const Header = ({ title, extraHeaderContent }) => (
    <StyledHeader>
        {title}{extraHeaderContent}
    </StyledHeader>
);

export default Header;