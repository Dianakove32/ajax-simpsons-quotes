import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import DisplayCharacter from './DisplayCharacter';




export default class App extends Component {
  constructor(){
    super()
    this.state={
      quote:''
    }
      this.getQuote = this.getQuote.bind(this)
  }
  getQuote(){
    axios.get('https://simpsons-quotes-api.herokuapp.com/quotes')
    .then(response =>response.data)
    .then(data=>{
      this.setState({
        quote:data[0]
      })
    })
  }

  render() {
    console.log(this.state.quote)
    return (
      <div>
        <DisplayCharacter getQuote={this.getQuote}
        data={this.state.quote}/>
      </div>
    )
  }
}







