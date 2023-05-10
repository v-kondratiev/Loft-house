
const Item = (props) => {
    return (
        <div className="benefits__item">
            <img src={props.img} alt="" className="benefits__item"/>
            <p className="benefits__item-text">{props.description}</p>
        </div>

    )
}
export default Item;