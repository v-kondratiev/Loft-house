const Map = () => {
    return (
        <section className="section-map">
            <div className="container">
                <div className="section-map__title">
                    <h2 className="title-2">Apartments on the map</h2>
                </div>

                <div className="section-map__map">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4903.613826369017!2d-6.26930400650304!3d53.34310491811248!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48670e80ea27ac2f%3A0xa00c7a9973171a0!2z0JTRg9Cx0LvQuNC9!5e0!3m2!1sru!2sie!4v1683799080312!5m2!1sru!2sie"
                        width="1110" height="358"  allowFullScreen="" loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade">
                    </iframe>
                </div>

            </div>
        </section>
    )
}
export default Map;