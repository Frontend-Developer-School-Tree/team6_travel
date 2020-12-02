import './App.css';
import Header from './Header/Header';
import ProviderApi from './Api/ContextApi';
import Cards from './Cards/Cards'
import Footer from './Footer'


function App() {


  return (
    //provider
    <ProviderApi >
      <div className="App">
        <Header />
        <div className="container-fluid">
          <Cards />
          <Footer />
          </div>
      </div>
    </ProviderApi> 
  );
  
}

export default App;
