import React from 'react';
import './App.css';
import Header from './header.js';
import Footer from './footer.js';
import ThingList from './thingList.js';

export default class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      thingList : [
        {name:'Something'},
        {name:'Other Thing'},
        {name:'yet another thing'},
      ]
    }
  
  }

  render(){
    return (
      <div className="App">
        <Header count={this.state.thingList.length}/>
        <ThingList />
        <Footer />
      </div>
    );
  }
}

