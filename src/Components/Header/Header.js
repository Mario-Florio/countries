import "./Header.css";

function Header() {
    return(
        <header>
            <h1>Where in the world?</h1>
            <div className="themeToggle" >
                <p>Dark mode</p>
            </div>
        </header>
    );
}

export default Header;