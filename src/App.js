import axios from 'axios';
import './App.css';
import { useEffect, useState } from 'react';
import { Container } from '@mui/material';
import Header from './components/Header/Header';

function App() {
  const [word, setWord] = useState('');
  const [meanings, setMeanings] = useState([]);
  const [category, setCategory] = useState('en');

  const dictionaryApi = async () => {
    try {
      const data = await axios.get(
        `https://api.dictionaryapi.dev/api/v2/entries/${category}/${word}`
      );
      setMeanings(data.data);
    } catch (error) {
      console.log(error);
    }
  };

  console.log(meanings);

  useEffect(() => {
    dictionaryApi();
  }, [word, category]);

  return (
    <div className="App" style={{ height: '100vh', backgroundColor: '#282c34', color: 'white' }}>
      <Container
        maxWidth="md"
        style={{ display: 'flex', flexDirection: 'column', height: '100vh' }}>
        <Header category={category} setCategory={setCategory} word={word} setWord={setWord} />
      </Container>
    </div>
  );
}

export default App;
