import { useState } from "react";
import "./Main.css";
import searchIcon from "./search.png";
import Card from "./Card/Card";

function Main() {
    return(
        <main>
            <div 
                style={{
                    display: "flex", 
                    flexWrap: "wrap",
                    justifyContent: "space-between", 
                    height: "135px"
                }}>
                <SearchBar/>
                <SelectRegion/>
            </div>
            <div
                style={{
                    display: "flex",
                    justifyContent: "center",
                    flexWrap: "wrap",
                    gap: "1rem",
                }}
            >
                <Card/>
                <Card/>
            </div>
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

function SelectRegion() {
    return(
        <form>
            <div className="selectRegion">
                <label 
                    htmlFor="region"
                    style={{display: "none"}}
                >
                    Filter by Region
                </label>
                <select name="region" id="region" autoComplete="on">
                    <option value="Country 1">Country 1</option>
                    <option value="Country 2">Country 2</option>
                    <option value="Country 3">Country 3</option>
                </select>
            </div>
        </form>
    )
}