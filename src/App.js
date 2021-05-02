import logo from "./logo.svg";
import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Translate from "./components/Translate";

function App() {
  return (
    <div className="App">
      <Header />
      <Translate></Translate>
      <Footer />
    </div>
  );
}

export default App;
