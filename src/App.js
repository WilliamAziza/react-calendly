import "./App.css";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Routing from "./Routing";

function App() {
  return (
    <div className="container">
      <Navbar />
      <Routing />
    </div>
  );
}

export default App;
