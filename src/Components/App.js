import './App.css';
import './../Base/Reset.css';
import './../Base/Base.css';
import Header from "./Header/Header";
import Main from "./Main/Main";
import Footer from "./Footer/Footer";
import React, { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css'


const App = (props) => {
    useEffect(() => {
        AOS.init({duration:  1500});
        AOS.refresh();
    }, []);

    return (
        <div className="App">
            <Header linksToProps={props.data.header.links} logoToProps={props.data.header.logo} />
            <Main mainToProps={props.data.main} />

            <Footer/>
        </div>
    );
}

export default App;
