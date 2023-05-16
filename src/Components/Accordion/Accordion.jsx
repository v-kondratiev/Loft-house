import AccordionItem from "./AccordionItem/AccordionItem";

const Accordion = (props) => {
    return (

        <section className="accordion">
            <div className="container">
                {
                    props.accordions.map(accordion=> <AccordionItem img={accordion.content} title={accordion.title}/>)
                }
            </div>
        </section>
    );
}
export default Accordion;