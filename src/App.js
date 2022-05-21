import { ThemeProvider } from 'styled-components';
import Routing from './Routing';
import { GlobalStyle, lightMode } from './themes';

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={lightMode}>
        <Routing />
        <GlobalStyle />
      </ThemeProvider>
    </div>
  );
}

export default App;
