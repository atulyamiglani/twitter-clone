import "./App.css";
import Navbar from "./containers/Navbar";
import Basic from "./components/AuthForm";
import Main from "./containers/Main";
import { BrowserRouter as Router } from "react-router-dom";
function App() {
  return (
    <Router>
      <Navbar />
      <Main />
    </Router>
  );
}

export default App;
