import React from 'react';
import './App.css';
import {Switch, Route} from 'react-router-dom'
import SignUp from './sign_up/SignUpPage'
import Homepage from './Homepage/Homepage'

function App() {
  return (

    <Switch>
      <Route exact path="/" component={SignUp}/>
      <Route path="/homepage" component={Homepage}/>
    </Switch>
  );
}

export default App;
