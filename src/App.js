import './App.css';
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { ThemeProvider } from 'styled-components';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';

import Header from './containers/Header';
import Countries from './pages/Countries';
import About from './pages/About';

import lightTheme from './themes/lightTheme';
import darkTheme from './themes/darkTheme';

function App() {

  const [theme, setTheme] = useState('light');

  useEffect(() => {

    const currentTheme = sessionStorage.getItem('theme')

    if (currentTheme) {
      setTheme(currentTheme)
    } 
  }, []);


  const toogleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
    sessionStorage.setItem('theme', theme === 'light' ? 'dark' : 'light');
  }

  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <Wrapper>
        <Router> 
          <Header 
            theme={theme}
            toogleTheme={toogleTheme}
          />
          <Routes>
            <Route exact path = '/' element={<Countries />} />  
            <Route path = '/about/:code' element={<About />} />
          </Routes>
        </Router>
      </Wrapper>
    </ThemeProvider>
  );
}

export default App;

const Wrapper = styled.div`
  width: 100%;
  background-color: ${({ theme }) => theme.colors.bgcolor};
  color: ${({ theme }) => theme.colors.text};

`;
