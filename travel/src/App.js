import './App.css';

import Header from './Header/Header';
import ProviderApi from './Api/ContextApi';

function App() {
  return (
    //provider
    <ProviderApi >
      <div className="App">
        <Header />
      </div>
    </ProviderApi> 
  );
  
}

export default App;
