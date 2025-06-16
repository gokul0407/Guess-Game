
import './App.css';
import Result from './Result';
import { useState } from 'react';

const ser = Math.floor(Math.random() * 10) + 1 

// const ser = String.fromCharCode(97 + Math.floor(Math.random() * 26)); 

function App() {

  const [term,setTerm] = useState("")

  const handleChange = (e) => {
      setTerm(e.target.value)
  }

  return (
    <div className="container">
      <div className='head'>
        <label htmlFor='term'>
          Guess the Alphabet between 1 - 10 
        </label>
      </div>
      <input 
        id="term"
        type='text'
        name='term'
        onChange={handleChange}
        />
        <Result ser = {ser} term={term}/>
    </div>
  );
}

export default App;
// (ans: {ser})