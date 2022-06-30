import { FC } from 'react'

import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from './components/styles/Globals';
import theme from './theme';

import { Container } from './components/styles/Container';
import Header from './components/Header';
import InputForm from './components/InputForm';


const App: FC = () => {


  return (
    <ThemeProvider theme={theme} >
      <GlobalStyles />
      <>
        <Header />
        <Container>
          <InputForm />
        </Container>
      </>
    </ThemeProvider>
  );
}

export default App;
