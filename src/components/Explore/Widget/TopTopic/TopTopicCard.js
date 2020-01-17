import React, {Component} from "react";
import {Link} from "react-router-dom";

export default class TopTopicCard extends Component{
    render() {
        return (
            <div className="top-topic-card">
                <Link to="/search"><kbd style={{fontSize: '15px'}}># TOPIC'S Name</kbd></Link>
            </div>
        )
    }
}