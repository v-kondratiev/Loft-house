const Card = (props) => {
    return (
            <a href="" className="card">
                <img src={props.img} alt="img"/>
                <h3 className="card__title">{props.title}</h3>
            </a>
    )
}

export default Card;