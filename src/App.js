import "./App.css";
import Advertisement from "./Compnents/Advertisements/Advertisement";
import Landing from "./Compnents/Landing/Landing";
import Navbar from "./Compnents/NavBar/Navbar";
import Offers from "./Compnents/Offers/Offers";
function App() {
  return (
    <div className="App">
      <Navbar />
      <Landing />
      <Advertisement />
      <Offers />
    </div>
  );
}

export default App;
