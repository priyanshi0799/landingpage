import React, { Component } from 'react'
import {MainDiv, TopBorder, LeftBorder, HorizontalLine} from './EmployerStyle';

class Employer extends Component {
    render() {
        return (
            <>
            <TopBorder></TopBorder>
            <LeftBorder></LeftBorder>
            <MainDiv>
                <h1>Why LINEUPX ?</h1>
                <HorizontalLine></HorizontalLine>
            </MainDiv>
            </>
        )
    }
}

export default Employer;