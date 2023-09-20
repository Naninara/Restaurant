import "./App.css";
import Landing from "./Compnents/Landing/Landing";
import Navbar from "./Compnents/NavBar/Navbar";
function App() {
  return (
    <div className="App">
      <Navbar />
      <Landing />
      <div style={{ height: "500px" }}></div>
    </div>
  );
}

export default App;
