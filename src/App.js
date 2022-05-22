import { Provider } from 'react-redux';
import Routing from './Routing';
import { GlobalStyle } from './themes';
import store from './store/store';
import ProviderTheme from './components/ProviderTheme/ProviderTheme';

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
