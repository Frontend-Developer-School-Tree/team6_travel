import './App.css';
import Header from './Header/Header';
import ProviderApi from './Api/ContextApi';
import Cards from './Cards/Cards'


function App() {


  return (
    //provider
    <ProviderApi >
      <div className="App">
        <Header />
        <div className="container-fluid">
          <Cards />
          </div>
      </div>
    </ProviderApi> 
  );
  
}

export default App;
