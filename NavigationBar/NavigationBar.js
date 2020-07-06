import React , {Component} from 'react';
import './NavigationBar.css';

class NavigationBar extends Component{
    render(){
        return(
            <header className="navHead">
                <h4 className="logo">LINEUPX</h4>
                <nav>
                    <ul className="nav__links">
                        <a href="#"><li>Nav Item 1</li></a>
                        <a href="#"><li>Nav Item 2</li></a>
                        <a href="#"><li>Nav Item 3</li></a>
                        <a href="#"><li>Nav Item 4</li></a>
                    </ul>
                </nav>
                <a href="#"><button className="loginButton">LOGIN</button></a>
            </header>
        )
    }
}

export default NavigationBar;