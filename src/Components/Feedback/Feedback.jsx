import "./Feedback.scss"
const Feedback = () => {
    return (
        <section className="feedback">
            <div className="container">
                <div className="feedback__title">
                    <h2 className="title-2">Have questions?</h2>
                </div>

                <form className="feedback__form form">
                    <p className="form__privacy form__privacy--bottom">
                        We don't share your information with anyone. And we don't keep your number in the database.
                    </p>

                    <input type="text" className="form__input" placeholder="Username" data-aos="fade-up"
                           data-aos-anchor-placement="center-bottom"/>
                    <input type="text" className="form__input" placeholder="Phone number" data-aos="fade-down"
                           data-aos-anchor-placement="center-bottom"/>

                    <button type="submit" className="form__btn" data-aos="fade-up"
                            data-aos-anchor-placement="center-bottom">View area</button>
                </form>
            </div>
        </section>
    )
}

export default Feedback;