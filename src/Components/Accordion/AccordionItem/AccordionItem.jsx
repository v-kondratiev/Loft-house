
import {useState} from "react";
const AccordionItem = (props) => {

    // State to show/hide accordion
    const [show, setShow] = useState(false);
    const handleOpen = () => {
        setShow(!show); // Toggle accordion
    };

    return (
        <div className="accordion__item">
            <div className="accordion-header" onClick={handleOpen}>
                <div>{props.title}</div>
                <div className="sign">{show ? '-' : '+'}</div>
            </div>
            {show && (
                <div className="accordion-body">
                    <p>{props.content}</p>
                </div>
            )}
        </div>
        )
}

export default AccordionItem;