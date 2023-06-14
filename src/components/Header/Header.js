import React from 'react';
import './Header.css';
import { TextField, ThemeProvider, createTheme, MenuItem } from '@mui/material';
import categories from '../../data/category';

const Header = ({ category, setCategory, word, setWord }) => {
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
          />
          <TextField
            select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            label="Language"
            value={category}
            onChange={(e) => handleChange(e.target.value)}
            className="select">
            {categories.map((option) => (
              <MenuItem value={option.label} key={option.label}>
                {option.value}
              </MenuItem>
            ))}
          </TextField>
        </ThemeProvider>
      </div>
    </div>
  );
};

export default Header;
