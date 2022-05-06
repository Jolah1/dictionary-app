import axios from 'axios';
import './App.css';
import {useEffect, useState} from "react";

function App() {

const [meanings, setMeanings] = useState([]);
const dictonaryApi = async() => {
  try {
    const data = await axios.get('https://api.dictionaryapi.dev/api/v2/entries/en/plane');
  
  
  
  setMeanings(data.data);
  } catch (error) {
    console.log(error);
  }
};

console.log(meanings);


useEffect(() => {
  dictonaryApi();
}, [])


  return (
    <div className="App">Dictionary</div>
  );
}

export default App;
