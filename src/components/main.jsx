import React, { Component } from 'react';

class Main extends Component{
    render(){
            console.log('THIS.PROPS');
            console.log(this.props);
            let userList = this.props.userList; 
        return(
            <div className = 'main'>
            <h2>Team Members</h2>
            <div className='user-list-panel'>
                <ul className='user-list'>
                {
                    userList.map(user => {
                        return (
                        <li> <User avatar={user.avatar}
                        firstName = {user.first_name}
                        lastName = {user.last_name} /></li>)
                    })
                }</ul>
            </div>
            </div>
        );

    }
    
}
Main.propTypes = {
        userList: PropTypes.array
    }
export default Main;