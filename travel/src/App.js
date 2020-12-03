import "./App.css";
import Header from "./Header/Header";
import ProviderApi from "./Api/ContextApi";
import CardLogic from "./Cards/CardLogic";
import Footer from "./Footer";

function App() {
  return (
    //provider
    <ProviderApi>
      <div className="App">
        <Header />
        <div className="container-fluid">
          <CardLogic />
          <Footer />
        </div>
      </div>
    </ProviderApi>
  );
}

export default App;