import React, { useEffect, useState } from "react";
import "../styles/App.css";

var colors = [
  '#16a085',
  '#27ae60',
  '#2c3e50',
  '#f39c12',
  '#e74c3c',
  '#9b59b6',
  '#FB6964',
  '#342224',
  '#472E32',
  '#BDBB99',
  '#77B1A9',
  '#73A857'
];

const App = () => {
    const [text,setText]=useState('');
    const [auther,setAuther]=useState('');
    const [colr,setColor] = useState(colors[0]);
    
    function clickHandler(){
      fetch("https://api.quotable.io/random").then(
        (res)=> res.json()).then(
          (quote)=>{
            setText(quote.content);
            setAuther(quote.author);
          }
        )
      let random =Math.round(Math.random()*11);
      setColor(colors[random]);  
    }

    useEffect(()=>{
      fetch("https://api.quotable.io/random").then(
        (res)=> res.json()).then(
          (quote)=>{
            setText(quote.content);
            setAuther(quote.author);
          }
        )
    },[])

    
    return (
      <div id="main">
        <div id="wrapper" >
          <div id="quote-box">
          <div className="quote-text" style={{color:`${colr}`}}>
            {text}
          </div>

          <div className="quote-author" style={{color:`${colr}`}}>
            {auther}
          </div>

          <button id="new-quote" onClick={clickHandler}>
              New Quote
          </button>
          </div>
        </div>
      </div>
    );
};

export default App;
