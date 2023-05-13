import "./CTA.scss"
const CTA = () => {
    return (
        <section className="cta">
            <div className="container">
                <div className="cta__title">
                    <h2 className="title-2">Would you like to see?</h2>
                </div>

                <div className="cta__wrapper" data-aos="fade-up"
                     data-aos-anchor-placement="center-bottom">
                    <div className="cta__text">LoftHouse Residential Complex is a business class project located in the center of the city. The complex offers its residents apartments with area from 40 to 170 square meters. The building will have three sections with a total of 56 apartments.</div>

                        <form action="" className="cta__form form" >
                            <input type="text" className="form__input" placeholder="Username"/>
                            <input type="text" className="form__input" placeholder="Phone number"/>
                            <p className="form_privacy">
                                *We don't give your information to anyone.
                                And we don't keep your number in our database.
                            </p>
                            <button type="submit" className="form__btn">View area</button>
                        </form>


                </div>

            </div>

        </section>

    )
}
export default CTA;