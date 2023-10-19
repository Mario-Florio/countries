import "./Card.css";

function Card(props) {

    const { img, name, population, region, capital } = props;

    return(
        <section className="card">
            <img src={img} alt={name}/>
            <article>
                <h2>{name}</h2>
                <p>Population: <span>{population}</span></p>
                <p>Region: <span>{region}</span></p>
                <p>Capital: <span>{capital}</span></p>
            </article>
        </section>
    )
}

export default Card;