import React, {Component} from "react";
import '../../Explore.css'
import TrendingCard from "./TrendingCard";
export default class TrendingContainer extends Component{

    render() {
        return (
            <div className="trending">
                <h2>Trending Now!</h2>
                <TrendingCard/>
                <TrendingCard/>
                <TrendingCard/>
                <TrendingCard/>
                <TrendingCard/>
            </div>
        )
    }
}