import React from 'react';
import './Header.css';
import { TextField, ThemeProvider, createTheme, MenuItem } from '@mui/material';
import categories from '../../data/category';
import { Button } from '@mui/material';
import { useRef } from 'react';

const Header = ({ category, setCategory, word, setWord, dictionaryApi }) => {
  const searchRef = useRef(null);
  const languageRef = useRef(null);

  const darkTheme = createTheme({
    palette: {
      primary: {
        main: '#fff',
      },
      mode: 'dark',
    },
  });

  const handleChange = (language) => {
    setCategory(language);
    setWord('');
  };

  const handleSearchClick = () => {
    dictionaryApi();
  };

  return (
    <div className="header">
      <span className="title">Vocablo</span>
      <div className="inputs">
        <ThemeProvider theme={darkTheme}>
          <TextField
            className="search"
            id="outlined-basic"
            label="Search a word"
            variant="outlined"
            value={word}
            onChange={(e) => {
              setWord(e.target.value);
            }}
            ref={searchRef}
          />
          <TextField
            select
            id="demo-simple-select"
            label="Language"
            value={category}
            onChange={(e) => handleChange(e.target.value)}
            className="select"
            ref={languageRef}>
            {categories.map((option) => (
              <MenuItem value={option.label} key={option.label}>
                {option.value}
              </MenuItem>
            ))}
          </TextField>
          <Button variant="outlined" onClick={handleSearchClick}>
            Search
          </Button>
        </ThemeProvider>
      </div>
    </div>
  );
};

export default Header;
