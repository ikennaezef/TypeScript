import { FC } from 'react'

import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from './components/styles/Globals';
import theme from './theme';



const App: FC = () => {


  return (
    <ThemeProvider theme={theme} >
      <GlobalStyles />
      <>
        <h1>Hello People. What's good nigga</h1>
      </>
    </ThemeProvider>
  );
}

export default App;
