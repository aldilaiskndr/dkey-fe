import React, {Component} from "react";
import image from '../../../../assets/img/faces/clem-onojeghuo-3.jpg'
export default class TopCreatorCard extends Component{
    render() {
        return (
            <div className="top-creator-card">
                <img src={image} alt=""/>
                <h3>name of creator</h3>
                <p>a little bit explanation</p>
            </div>
        )
    }
}