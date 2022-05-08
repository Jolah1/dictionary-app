import axios from 'axios';
import './App.css';
import {useEffect, useState, useSyncExternalStore} from "react";
import { alpha, Container, styled, Switch } from '@mui/material';
import { pink } from '@mui/material/colors';
import Header from './components/Header/Header';
import Definitions from './components/Header/Definitions/Definitions';

function App() {
const [word, setWord] = useState("");
const [meanings, setMeanings] = useState([]);
const [category, setCategory] = useState("en");
const [LightMode, setLightMode] = useState(false)

const DarkMode = styled(Switch)(({ theme }) => ({
  '& .MuiSwitch-switchBase.Mui-checked': {
    color: pink[600],
    '&:hover': {
      backgroundColor: alpha(pink[600], theme.palette.action.hoverOpacity),
    },
  },
  '& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track': {
    backgroundColor: pink[600],
  },
}));

const dictonaryApi = async() => {
  try {
    const data = await axios.get(
      `https://api.dictionaryapi.dev/api/v2/entries/${category}/${word}`
      );
  

  setMeanings(data.data);
  console.log(meanings);
  } catch (error) {
    console.log(error);
  }
};




useEffect(() => {
  dictonaryApi();
}, [word, category]);


  return (
    <div className="App" 
    style={{
      height: "100vh",
      backgroundColor:LightMode ? "#fff" : "skyblue",
     color:LightMode ? "black" : 'white',
     transition:"all 0.5s linear",
     }}>
      <Container 
      maxWidth="md" 
      style={{display: "flex", 
      flexDirection: "column", 
      height: "100vh", 
      justifyContent: 'space-evenly'}}>
      
      <div 
      style={{position: "absolute", top: 0, right: 15, paddingTop: 10}}>
      
      <span>{LightMode ? "Dark" : "Light"} Mode</span>
      <DarkMode 
      checked={LightMode} 
      onChange={()=>setLightMode(!LightMode)} />
      </div>

        <Header 
        category={category}
        setCategory={setCategory} 
        word={word} 
        setWord={setWord} 
        LightMode={LightMode}
        />

        {meanings && (

        <Definitions word={word} meanings={meanings} category={category}/>)}
     
        </Container>
    </div>
  );
}

export default App;
