import React from 'react';
import './App.css';
import Header from './header.js';
import Footer from './footer.js';
import ThingList from './thingList.js';
import myData from './things-list.json'

export default class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      thingList : myData.list
    }
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
  }
  
  handleFormSubmit(event){
    event.preventDefault();

    const target = event.target;
    const value = target.itemToAdd.value

    let key = (Math.random())*10_000
    console.log('key: ', key)
    let obj = {name: value, id: key}

    let lst = this.state.thingList
    lst.push(obj)
    console.log('lst: ', lst)

    this.setState({
      thingList : lst
    })
  }

  render(){
    return (
      <div className="App">
        <Header count={this.state.thingList.length}/>
        <ThingList list={this.state.thingList} doneHandler={this.handleFormSubmit}/>
        <Footer />
      </div>
    );
  }
}

