import React, { Component } from 'react'
import NavigationBar from '../NavigationBar/NavigationBar'
import './Banner.css'
import backimage from './backimage.png';

class Banner extends Component {
    render() {
        return (      
            <> 
                <div className="banner">
                    <img src={backimage} className="bannerImg"/>
                    <NavigationBar />
                    <div className="text">
                        <h1>The best Hiring Experiences are built with LINEUPX</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                        <p>Duis aute irure dolor in reprehenderit</p>
                        <button className="button1">Get Started</button>
                        <button className="button2">Know More</button>
                    </div>
                </div>
            </>
        )
    }
}

export default Banner;