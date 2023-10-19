import { useState } from "react";
import "./Main.css";
import searchIcon from "./search.png";

function Main() {
    return(
        <main>
            <SearchBar/>
        </main>
    );
}

export default Main;

function SearchBar() {

    const [input, setInput] = useState('');

    function handleChange(e) {
        setInput(e.target.value);
    }

    function handleSubmit(e) {
        e.preventDefault();
        setInput('');
    }

    return(
        <form onSubmit={handleSubmit}>
            <div className="searchBar">
                <button>
                    <img 
                        src={searchIcon} 
                        alt="Search Icon"
                        height={20}
                    />
                </button>
                <label 
                    htmlFor="country-search"
                    style={{display: "none"}}
                >
                    Search for a country
                </label>
                <input
                    type="text"
                    id="country-search"
                    name="country-search"
                    placeholder="Search for a country..."
                    value={input}
                    onChange={handleChange}
                />
            </div>
        </form>
    )
}