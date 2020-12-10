import { BrowserRouter as Router, Switch, Route,Link } from "react-router-dom";
import Sign_In from "./Sign_In";
import Home_Page from "./Home_Page";
import Admin from "./admin";
import "./App.css";
import React from "react";
import Sidebar from "./Sidebar";
import Cards from "./Cards";


function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/Home_Page">
            <div className="App" id="outer-container">
              <Sidebar
                pageWrapId={"page-wrap"}
                outerContainerId={"outer-container"}
              />
              <div id="page-wrap"></div>
            </div>
            <Home_Page />

            <Route path="/Home_Page" component={Cards}></Route>
          </Route>
          <Route path="/admin">
            <Admin />
          </Route>
          <Route >
       <Link to='/Home_Page'>hey what is your name</Link>    
          </Route>

          <Route exact path="/login">
            <Home_Page />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
