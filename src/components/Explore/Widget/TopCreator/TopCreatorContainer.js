import React, {Component} from "react";
import TopCreatorCard from "./TopCreatorCard";

export default class TopCreatorContainer extends Component{
    render() {
        return (
            <div className="top-context">
                <h2>Top Creators of this week</h2>
                <div className="top-creator-body">
                    <TopCreatorCard/>
                    <TopCreatorCard/>
                    <TopCreatorCard/>
                    <TopCreatorCard/>
                </div>
            </div>
        );
    }
}