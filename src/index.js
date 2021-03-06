import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

 let getQuote=()=>{
  let url=`https://simpsons-quotes-api.herokuapp.com/quotes`

fetch(url)
.then(res=>res.json())
.then(data=>{
  const quoteHTML= `
  <p>Name:${data[0].character} </p>
  <img src="${data[0].image} alt='${data[0].character}"/>
  <p>Name:${data[0].quote} </p>`
  console.log(document.querySelector('.content'))
  document.querySelector('.content').innerHTML = quoteHTML
 })
 }
 let btn=document.querySelector('.btn')

 btn.addEventListener('click',getQuote )



ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);


