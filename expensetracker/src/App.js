// App.js
import "./App.css";
import Header from "./Components/Header";
import Mainpage from "./Components/Mainpage";
import { BrowserRouter as Router } from "react-router-dom";


function App() {

  return (
    <Router>
      <div className="App">
        <Header />
        <Mainpage />
      </div>
      </Router>
  );
}

export default App;
