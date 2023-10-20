import "./Dashboard.css";

function Dashboard(props) {
    const { countries, search, region } = props;

    function compareSearch(country) {
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
    }

    return(
        <section
            className="dashboard"
        >
            {!region ?
                countries.map(country => {
                    let card = (
                        <Card 
                            key={country.name.common}
                            name={country.name.common}
                            img={country.flags.png}
                            population={country.population}
                            region={country.region}
                            capital={country.capital}
                        />
                    );
                    if (search) {
                        if (search === "all") {
                            return card;
                        } else {
                            return compareSearch(country);
                        }
                    } else {
                        return card;
                    }
                })
                    :
                countries.map(country => {
                    let card = (
                        <Card 
                            key={country.name.common}
                            name={country.name.common}
                            img={country.flags.png}
                            population={country.population}
                            region={country.region}
                            capital={country.capital}
                        />
                    );
                    if (region === country.region) {
                        if (search) {
                            if (search === "all") {
                                return card;
                            } else {
                                return compareSearch(country);
                            }
                        } else {
                            return card;
                        }
                    }
                })
            }
        </section>
    )
}

export default Dashboard;

function Card(props) {

    const { img, name, population, region, capital } = props;

    return(
        <article className="card">
            <img src={img} alt={name}/>
            <section>
                <h2>{name}</h2>
                <p>Population: <span>{population}</span></p>
                <p>Region: <span>{region}</span></p>
                <p>Capital: <span>{capital}</span></p>
            </section>
        </article>
    )
}