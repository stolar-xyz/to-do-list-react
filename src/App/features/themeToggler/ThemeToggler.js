import { useDispatch, useSelector } from "react-redux";
import { MoonIcon, SunIcon, TogglerThemeButton } from "./styled";
import { selectDarkTheme, toggleDarkTheme } from "./themeSlice";

const ThemeToggler = () => {
    const isThemeDark = useSelector(selectDarkTheme)
    const dispatch = useDispatch();

    return (
        <TogglerThemeButton
            onClick={() => dispatch(toggleDarkTheme())}
        >
            {isThemeDark ?
                <SunIcon title="sun icon" />
                :
                <MoonIcon title="moon icon" />
            }
        </TogglerThemeButton>
    );
};

export default ThemeToggler;