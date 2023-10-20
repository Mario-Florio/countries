import { useEffect, useState, useContext } from "react";
import "./Main.css";
import Dashboard from "../../pages/Dashboard/Dashboard";
import Country from "../../pages/Country/Country";
import { ThemeContext } from "../../App";
import { getData } from "../../data";

function Main() {
    const theme = useContext(ThemeContext);

    const [countries, setCountries] = useState([]);
    const [country, setCountry] = useState(countries[0]);
    const [selected, setSelected] = useState(false);

    useEffect(() => {
        getData().then((data) => {
            setCountries(data);
        });
    }, []);

    return(
        <main className={`${theme} ${theme}BG`}>
            {selected ?
                <Country country={country} setSelected={setSelected}/>
                    :
                <Dashboard countries={countries} setSelected={setSelected} setCountry={setCountry}/>
            }
        </main>
    );
}

export default Main;