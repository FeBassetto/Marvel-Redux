import { Provider } from 'react-redux';
import Routing from './Routing';
import store from './store/store';
import ProviderTheme from './components/ProviderTheme/ProviderTheme';
import { GlobalStyle } from './config/themes';

function App() {

  return (
    <div className="App">
      <Provider store={store}>
        <ProviderTheme>
          <Routing />
          <GlobalStyle />
        </ProviderTheme>
      </Provider>
    </div>
  );
}

export default App;
