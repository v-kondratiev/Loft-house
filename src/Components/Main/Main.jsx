import "./Main.scss";
import Benefits from "./Benefits/Benefits";
import Apartments from "./Apartments/Apartments";
import Video from "./Video/Video";
import Map from "./Map/Map";
import Feedback from "./Feedback/Fedback";
import CTA from "./CTA/CTA";

const Main = (props) => {
    console.log(props)
    return (
        <main>
            <Benefits items={props.mainToProps.items}/>
            <Apartments cards={props.mainToProps.cards}/>
            <CTA />
            <Video video={props.mainToProps.video}/>
            <Map />
            <Feedback />

        </main>
    )
}

export default Main;