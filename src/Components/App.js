import './App.css';
import '../style/Base/Reset.css';
import '../style/Base/Base.css';
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import Benefits from "./Benefits/Benefits";
import Apartments from "./Apartments/Apartments";
import Video from "./Video/Video";
import Map from "./Map/Map";
import Feedback from "./Feedback/Feedback";
import CTA from "./CTA/CTA";

import AOS from 'aos';
import 'aos/dist/aos.css'

const App = (props) => {
        AOS.init({duration:  1500});
        AOS.refresh();
    return (
        <div className="App">
            <Header linksToProps={props.data.header.links} logoToProps={props.data.header.logo} />
            <main className="main">
                <Benefits items={props.data.benefits.items}/>
                <Apartments cards={props.data.apartments.cards}/>
                <CTA />
                <Video video={props.video}/>
                <Map/>
                <Feedback />
            </main>
            <Footer/>
        </div>
    );
}

export default App;
