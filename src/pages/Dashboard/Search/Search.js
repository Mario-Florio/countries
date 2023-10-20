import "./Search.css";
import searchIcon from "./search.png";
import { useState, useEffect } from "react";

function Search(props) {
    const { setSearch, setRegion } = props;

    return(
        <div 
            style={{
                display: "flex", 
                flexWrap: "wrap",
                justifyContent: "space-between"
            }}>
            <SearchBar setSearch={setSearch}/>
            <SelectRegion setRegion={setRegion}/>
        </div>
    );
}

export default Search;

function SearchBar(props) {

    const { setSearch } = props;
    const [input, setInput] = useState('');

    function handleChange(e) {
        setInput(e.target.value);
    }

    function handleSubmit(e) {
        e.preventDefault();
        if (input.length) setSearch(input.toLowerCase());
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

function SelectRegion(props) {

    const { setRegion } = props;
    const [selected, setSelected] = useState("");

    useEffect(() => {
        setRegion(selected);
    }, [selected]);

    function handleChange(e) {
        setSelected(e.target.value);
    }

    return(
        <form>
            <div className="selectRegion">
                <label 
                    htmlFor="region"
                    style={{display: "none"}}
                >
                    Filter by Region
                </label>
                <select 
                    name="region" 
                    id="region" 
                    value={selected} 
                    autoComplete="on"
                    onChange={handleChange}
                >
                    <option value="">Filter by Region</option>
                    <option value="Africa">Africa</option>
                    <option value="Americas">America</option>
                    <option value="Asia">Asia</option>
                    <option value="Europe">Europe</option>
                    <option value="Oceania">Oceania</option>
                </select>
            </div>
        </form>
    )
}