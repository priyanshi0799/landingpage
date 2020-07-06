import React, { Component } from 'react'
import Tab from '../../../Reusuable/Components/Interactive/Tab/Tab';
import {TagWrapper, BorderLeft, BorderRight, VerticalLeft, VerticalRight} from './FeatureStyle';
import Employer from './Employer/Employer';

class Features extends Component {
    state = {
        tabs: [
            {
                id: 1,
                active: true,
                label: "I am an Employer",
            },
            {
                id: 2,
                active: false,
                label: "I am a Recruiter",
            },
            {
                id: 3,
                active: false,
                label: "I am an Employee",
            }
        ],
    };

    handlerTabClick = (id) => {
        let tabs = this.state.tabs.concat();
        tabs.forEach((tab) => {
            tab.active = false;
            if (tab.id === id) tab.active = true;
        });

        this.setState({
            tabs,
        });
    };

    getRightTabContent = () => {
        let tabs = this.state.tabs.concat();
        let currentContent;
        tabs.forEach((tab) => {
            if (tab.active === true) {
                if (tab.id === 1)
                    currentContent = <Employer />;
                if (tab.id === 2)
                    currentContent = <p>Recruiter</p>;
                if (tab.id === 3)
                    currentContent = <p>Employee</p>;
            }
        });
        return currentContent;
    };

    render() {
        return (
            <>
                <BorderLeft></BorderLeft>
                <VerticalLeft></VerticalLeft>
                <BorderRight></BorderRight>
                <VerticalRight></VerticalRight>
                <TagWrapper>
                    {this.state.tabs.map((tab) => (
                        <Tab
                            normal
                            tabClick={() =>
                                this.handlerTabClick(tab.id)
                            }
                            active={tab.active}
                            label={tab.label}
                            font={true}
                        />
                    ))}
                </TagWrapper>
                
                {this.getRightTabContent()}
           </> 
        )
    }
}

export default Features;