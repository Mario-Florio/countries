import "./Country.css";

function Country(props) {
    const { country, setSelected } = props;

    function handleClick() {
        setSelected(false);
    }

    return(
        <>
            <button onClick={handleClick}>Back</button>
            <h2>{country.name.common}</h2>
        </>
    )
}

export default Country;