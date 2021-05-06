/*import logo from "./logo.svg";*/
import "./App.css";
import Footer from "./components/Footer";
import Navbar from "./components/NavBar";
import Forms from "./components/Form";
import Type from "./components/Type";

function App() {
  return (
    <div
      className="App"
      style={{
        backgroundColor: "#ffffff",
        height: "10%",
      }}
    >
      <Navbar></Navbar>
      <Type />
      <Forms></Forms>
      <Footer />
    </div>
  );
}

export default App;
