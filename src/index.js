import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import './App.css'
import * as serviceWorker from './serviceWorker';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import IndexNavbar from "./components/Navbar/Navbar";
import Footer from "./components/footer/Footer";
import SignInContainer from "./components/SignIn/SignInContainer";
import SignUpContainer from "./components/SignUp/SignUpContainer";

ReactDOM.render(
    <div>
        <Router>
            <IndexNavbar/>
            <div>
                <div>
                    <Switch>
                        <Route exact path="/"><App/></Route>
                        <Route path="/login"><SignInContainer/></Route>
                        <Route path="/sign-up"><SignUpContainer/></Route>
                    </Switch>
                </div>
                <Footer/>
            </div>
        </Router>
    </div>
    , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
