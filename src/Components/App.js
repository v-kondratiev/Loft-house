import './App.css';

import './../Base/Reset.css';
import './../Base/Base.css';


import Header from "./Header/Header";
import Main from "./Main/Main";
import Footer from "./Footer/Footer";


const App = (props) => {
    return (
        <div className="App">
            <Header linksToProps={props.data.header.links} logoToProps={props.data.header.logo} />
            <Main mainToProps={props.data.main} />
            <Footer/>
        </div>
    );
}

export default App;
