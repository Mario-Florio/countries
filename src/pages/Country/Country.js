import "./Country.css";

function Country(props) {
    const { country, setSelected } = props;
    const { 
        flags, 
        name, 
        population, 
        region, 
        subregion, 
        capital,
        currencies,
        tld,
        languages,
        borders
    } = country;

    function handleClick() {
        setSelected(false);
    }

    function getNativeName(nativeName) {
        let arr = [];
        for (let key in nativeName) {
            arr.push(nativeName[key].common);
        }
        return arr[0];
    }

    function getCurrencies(currencies) {
        let arr = [];
        for (let currency in currencies) {
            arr.push(currencies[currency].name)
        }
        return arr;
    }

    function getLanguages(languages) {
        let arr = [];
        for (let language in languages) {
            arr.push(languages[language])
        }
        return arr;
    }

    return(
        <div className="country">
            <button style={{display: "block"}} onClick={handleClick}>Back</button>
            <div className="flexBox__outer">
                <div className="flexBox__outer--left" style={{flex: "1"}}>
                    <img src={flags.png} alt={`${name.common} flag`}/>
                </div>
                <div className="flexBox__outer--right" style={{flex: "1"}}>
                    <div>
                        <h2>{name.common}</h2>
                        <div className="flexBox__inner">
                            <section className="flexBox__inner--left">
                                <p>Native Name: <span>{getNativeName(name.nativeName)}</span></p>
                                <p>Population: <span>{population}</span></p>
                                <p>Region: <span>{region}</span></p>
                                <p>Sub Region: <span>{subregion}</span></p>
                                <p>Capital: <span>{capital}</span></p>
                            </section>
                            <section className="flexBox__inner--right">
                                <p>Top Level Domain: <span>{tld}</span></p>
                                <p>Currencies: <span>{getCurrencies(currencies)}</span></p>
                                <p>Languages: <span>{getLanguages(languages)}</span></p>
                            </section>
                        </div>
                    </div>
                    {borders && 
                    <section>
                        <p>Border Countries:</p>
                        {borders.map(border => {
                            return <span key={border} className="borderTag">{border}</span>
                        })}
                    </section>}
                </div>
            </div>
        </div>
    )
}

export default Country;