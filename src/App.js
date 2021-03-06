
import './App.css';

function App() {

let url=`https://simpsons-quotes-api.herokuapp.com/quotes`

fetch(url)
.then(res=>res.json())
.then(data=>{
  const quoteHTML= `
  <p>Name:${data[0].character} </p>
  <img src="${data[0].image} alt='${data[0].character}"/>
  <p>Name:${data[0].quote} </p>`
  console.log(document.querySelector('.content'))
  // document.querySelector('.content').innerHTML = quoteHTML
 })
  return (
    <div className="App">

    </div>
  );
}

export default App;
