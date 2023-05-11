import play from "../../../assets/video/play-button.svg"
import video from "../../../assets/video/video.jpg"
const Video = (props) => {
    return (
        <section className="video">
            <div className="container">
                <a href={props.video.links} className="video__link">
                    <img src={play} alt="" className="video__icon"/>
                    <img src={video} alt="" className="video__img"/>
                </a>
            </div>
        </section>
    )
}
export default Video;