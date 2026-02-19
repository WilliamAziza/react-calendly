import "./App.css";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Routing from "./Routing";
import { AuthProvider } from "./context/AuthContext";

function App() {
  return (
    <AuthProvider>
      <div className="container">
        <Navbar />
        <Routing />
      </div>
    </AuthProvider>
  );
}

export default App;
