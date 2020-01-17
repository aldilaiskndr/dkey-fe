import React from 'react';
import "./assets/css/bootstrap.min.css";
import "./assets/scss/paper-kit.scss";
import "./assets/demo/demo.css";
import "./App.css";
import image from "./assets/img/bruno-abatti.jpg"
import {Link} from "react-router-dom";
import ExploreContainer from "./components/Explore/ExploreContainer";

function App() {
    const divStyle = {
        backgroundImage: `url(${image})`,
        backgroundSize: 'cover',
    };
    const style = {
        backgroundColor: 'gold',
        borderRadius: '10px',
        margin: '10px',
        padding: '20px',
    };
    return (
        <div>
            <div style={divStyle} className="App-header">
                <h1 className="display-1">Digital Key</h1>
                <h2 style={{fontSize: '60px'}}>The most modern sharing platform.</h2>
                <h3>you can share, learn, discuss, chat, from all creator around the world!</h3>
                <div className="card-link">
                    <h4 style={style}>
                        <Link to="/sign-up" style={{textDecoration: 'underline', color: 'white'}}><b>create your
                            account</b></Link> now, and being a great creator!
                    </h4>
                </div>
            </div>
            <ExploreContainer/>
        </div>
    );
}

export default App;
