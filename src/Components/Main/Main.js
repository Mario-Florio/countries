import { useEffect, useState } from "react";
import "./Main.css";
import Dashboard from "../../pages/Dashboard/Dashboard";
import Country from "../../pages/Country/Country";

import { getData } from "../../data";

function Main() {

    const [countries, setCountries] = useState([]);
    const [country, setCountry] = useState(countries[0]);
    const [selected, setSelected] = useState(false);

    useEffect(() => {
        getData().then((data) => {
            console.log(data);
            setCountries(data);
        });
    }, []);

    return(
        <main>
            {selected ?
                <Country country={country} setSelected={setSelected}/>
                    :
                <Dashboard countries={countries} setSelected={setSelected} setCountry={setCountry}/>
            }
        </main>
    );
}

export default Main;