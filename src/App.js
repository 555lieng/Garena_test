import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Countries from "./components/Countries.js";
import Flags from "./components/Flags.js";
import Country from "./components/Country.js";
import Header from "./components/Header";

function App() {
  return (
    <Router>
      <Route exact path="/">
        <div className="container">
          <div className="bg">
            <Header/>
            <Countries />
            <Flags />
          </div>
        </div>
      </Route>
      <Route path="/countries/:name" children={<Country />}></Route>
    </Router>
  );
}

export default App;
