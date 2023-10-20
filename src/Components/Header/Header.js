import { useContext } from "react";
import "./Header.css";
import { ThemeContext } from "../../App";

function Header(props) {
    const theme = useContext(ThemeContext);

    const { setTheme } = props;

    function handleChange(e) {
        e.target.checked ? setTheme('dark') : setTheme('light');
    }

    return(
        <header className={`${theme} ${theme}EL`}>
            <h1>Where in the world?</h1>
            <div className="themeToggle">
                <input 
                    name="theme"
                    id="theme"
                    type="checkbox" 
                    checked={theme === 'dark'}
                    onChange={handleChange}
                />
                <label htmlFor="theme">Dark mode</label>
            </div>
        </header>
    );
}

export default Header;