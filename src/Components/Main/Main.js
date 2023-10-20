import { useEffect, useState } from "react";
import "./Main.css";
import searchIcon from "./search.png";
import Card from "./Card/Card";
import { getData } from "../../data";

function Main() {

    const [countries, setCountries] = useState([]);
    const [search, setSearch] = useState(null);

    useEffect(() => {
        getData().then((data) => {
            console.log(data);
            setCountries(data);
        });
    }, []);

    return(
        <main>
            <div 
                style={{
                    display: "flex", 
                    flexWrap: "wrap",
                    justifyContent: "space-between"
                }}>
                <SearchBar setSearch={setSearch}/>
                <SelectRegion/>
            </div>
            <div
                className="dashboard"
            >
                {search ? 
                    countries.map(country => {
                        let card = (<Card 
                                        key={country.name.common}
                                        name={country.name.common}
                                        img={country.flags.png}
                                        population={country.population}
                                        region={country.region}
                                        capital={country.capital}
                                    />);
                        for (let i = 0; i < country.altSpellings.length; i++) {
                            let countryName = country.altSpellings[i].toLowerCase();
                            if (countryName === search) {
                                return card;
                            }
                        }
                        for (let name in country.name) {
                            if (typeof country.name[name] === 'object') break;
                            let countryName = country.name[name].toLowerCase();
                            if (countryName === search) {
                                return card;
                            }
                        }
                        if (country.cca2.toLowerCase() === search) {
                                return card;
                        }
                        if (country.cca3.toLowerCase() === search) {
                                return card;
                        }
                        if (country.ccn3 === search) {
                                return card;
                        }
                        if (country.cioc) {
                            if (country.cioc.toLowerCase() === search) {
                                return card;
                            }
                        }
                    })
                        :
                    countries.map(country => {
                        return(
                            <Card 
                            key={country.name.common}
                            name={country.name.common}
                            img={country.flags.png}
                            population={country.population}
                            region={country.region}
                            capital={country.capital}
                        />
                        )
                    })
                }
            </div>
        </main>
    );
}

export default Main;

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