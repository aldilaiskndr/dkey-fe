import React, {Component} from "react";
import TopTopicCard from "./TopTopicCard";

export default class TopTopicContainer extends Component {
    render() {
        return (
            <div className="top-context">
                <h2>Top Topics of this week</h2>
                <div className="top-creator-body">
                    <TopTopicCard/>
                    <TopTopicCard/>
                    <TopTopicCard/>
                    <TopTopicCard/>
                    <TopTopicCard/>
                </div>
            </div>
        );
    }
}