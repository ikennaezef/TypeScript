import { FC } from 'react'

import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from './components/styles/Globals';
import theme from './theme';

import { Container } from './components/styles/Container';
import Header from './components/Header';
import InputForm from './components/InputForm';
import Todos from './components/Todos';



const App: FC = () => {


  return (
    <ThemeProvider theme={theme} >
      <GlobalStyles />
      <>
        <Header />
        <Container>
          <InputForm />
          <Todos />
        </Container>
      </>
    </ThemeProvider>
  );
}

export default App;
