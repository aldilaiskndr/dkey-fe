import React, {Component} from "react";
import './Footer.css';
import '../../App.css'
export default class Footer extends Component {
    render() {
        return (
            <footer className="footer-distributed">
                <div className="footer-left">
                        <h3>Digital<span>key</span></h3>
                        <p className="footer-company-name">© 2020 PT. Digital Key Indonesia</p>
                </div>

                <div className="footer-center">
                    <div>
                        <i className="fa fa-map-marker"/>
                        <p><span>Jakarta, Indonesia</span></p>
                    </div>
                    <div>
                        <i className="fa fa-phone"/>
                        <p>+62 895 - 0145 - 3238</p>
                    </div>
                    <div>
                        <i className="fa fa-envelope"/>
                        <p><a href="mailto:sc@dkey.co">sc.@dkey.co</a></p>
                    </div>
                </div>
                <div className="footer-right">
                    <p className="footer-company-about">
                        <span>About the company</span>
                        We offer training and skill building courses across Technology, Design, Management, Science and
                        Humanities.</p>
                    <div className="footer-icons">
                        <a href="http://facebook.com"><i className="fa fa-facebook"/></a>
                        <a href="http://twitter.com"><i className="fa fa-twitter"/></a>
                        <a href="http://instagram.com"><i className="fa fa-instagram"/></a>
                    </div>
                </div>
            </footer>
        )
    }
};