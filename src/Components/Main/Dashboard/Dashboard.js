import "./Dashboard.css";

function Dashboard(props) {

    const { countries, search, region } = props;

    function createCard(country) {
        return(<Card
            key={country.name.common}
            country={country}
        />);
    }

    function compareSearch(country) {
        let card = createCard(country)
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
                    let card = createCard(country);
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
                    let card = createCard(country);
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

    const { country } = props;
    const { name, flags, population, region, capital } = country;

    return(
        <article className="card">
            <img src={flags.png} alt={`${name.common} flag`} onClick={() => console.log(country)}/>
            <section>
                <h2>{name.common}</h2>
                <p>Population: <span>{population}</span></p>
                <p>Region: <span>{region}</span></p>
                <p>Capital: <span>{capital}</span></p>
            </section>
        </article>
    )
}