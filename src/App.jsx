import React, { Component } from 'react';
import './App.css';
import Header from './components/header';
import Main from './components/main';
import Footer from './components/footer';
import axios from 'axios';
import { getUserListURL} from './util/service-helper'
class App extends Component {

  constructor(props){
    super(props);

    this.state = {
      userList: [],
      date: new Date()
    };
  }

  componentDidMount(){
    this.getUsers()
    //this.timerID= setInterval(
      //() =>this.tick(),
      //1000
  

  }
 // function(date){
  //  return this.tick();
//  }

getUsers = ()=> {
  console.log('Initial State Values')
  console.log(this.state.userList)
 
 getUserListURL()
  .then(res => {
   // console.log(res.data)});


    let user = res.data.data;

    this.setState({userList: user});
  });
    }


  tick(){
    console.log ("Called Tick Method");
    this.setState({
      date: new Date()
    });
  }
  render() {
    return (
      <div className="App">
        <Header date={this.state.date.toLocaleDateString()} />
        <Header />
        <Main userList={this.state.userList} />
        <Footer />
       </div>
    );
  }
}

export default App;
