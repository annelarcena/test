import React, { Component } from 'react';
class Header extends Component{
    render(){
        return(
            <div className = 'header'>
            <h1>Test</h1>
            <p>
                {this.props.date}
            </p>
            </div>
        );

    }
}

export default Header;