import axios from 'axios';
import './App.css';
import {useEffect, useState} from "react";
import { Container } from '@mui/material';
import Header from './components/Header/Header';

function App() {
const [word, setWord] = useState("");
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
    <div className="App" style={{height: "100vh",backgroundColor: "grey", color: 'white'}}>
      <Container maxWidth="md" 
      style={{display: "flex", flexDrection: "column", height: "100vh"}}>
        
        <Header />

        </Container>
    </div>
  );
}

export default App;
