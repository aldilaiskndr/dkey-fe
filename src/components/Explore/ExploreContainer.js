import React, {Component} from "react";
import {Link} from "react-router-dom";
import TrendingContainer from "./Widget/Trending/TrendingContainer";
import TopCreatorContainer from "./Widget/TopCreator/TopCreatorContainer";
import TopTopicContainer from "./Widget/TopTopic/TopTopicContainer";

export default class ExploreContainer extends Component {
    render() {
        return (
            <div className="explore-container">
                <TrendingContainer/>
                <div className="column">
                    <TopCreatorContainer/>
                    <TopTopicContainer/>
                    <h5 style={{paddingLeft:'50px'}}>Please, <Link to="/login" style={{textDecoration: 'underline', color: 'white'}}>login</Link> if you want to read more..</h5>
                </div>
            </div>
        )
    }
}