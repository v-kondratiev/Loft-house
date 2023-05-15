import React, { useState } from "react";


function Accordion(props) {
    // State to show/hide accordion
    const [show, setShow] = useState(false);
    const handleOpen = () => {
        setShow(!show); // Toggle accordion
    };

    return (
        <section className="accordion">
            <div className="container">
                <div className="accordion__item">
                    <div className="accordian-header" onClick={handleOpen}>
                        <div>Accordion Header</div>
                        <div className="sign">{show ? '-' : '+'}</div>
                    </div>
                    {show && (
                        <div className="accordion-body">
                            Lorem Ipsum is simply dummy text of the printing and type setting
                            industry. Lorem Ipsum has been the industry's ever since the 1500s,
                            when an unknown printer took a galley of type standard dummy text
                            and scrambled it to make a type specimen book.
                        </div>
                    )}

                </div>

            </div>
        </section>
    );
}
export default Accordion;