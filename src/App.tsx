import { useState } from 'react';
import { Header } from './components/Header/Header';
import { Main } from './components/Main/Main';
import { GlobalStyle } from './styles/global';

import 'react-toastify/dist/ReactToastify.css';

function App () {
  const [theme, setTheme] = useState('dark');

  function toggleTheme () {
    const html = document.getElementsByTagName('html')[0];
    html.classList.toggle('light');
    setTheme(theme === 'light' ? 'dark' : 'light');
  }

  return (
    <>
      <GlobalStyle />
      <Header toggleTheme={toggleTheme} />
      <Main theme={theme} />
    </>
  );
}

export default App;
