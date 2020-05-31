import React from 'react';
import logo from './logo.svg';
import './App.css';
import * as ReactBootStrap from "react-bootstrap"
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { NavigationBar } from './Components/NavigationBar';
import { Soru1 } from './Components/SoruBir';
import { Soru2 } from './Components/Soruİki';
import { Soru3 } from './Components/SoruUc';
import { Soru4 } from './Components/SoruDort';
import { Soru5 } from './Components/SoruBes';

function App() {
  return (
      <React.Fragment> 
  <Router> 
    <NavigationBar/> 
    <Switch>
  <Route exact path="/" component={Soru1}/>
  <Route exact path="/Soru2" component={Soru2}/>
  <Route exact path="/Soru3" component={Soru3}/>
  <Route exact path="/Soru4" component={Soru4}/>
  <Route exact path="/Soru5" component={Soru5}/>
</Switch>
  </Router> 
</React.Fragment>
    
  );
}

export default App;
