import React from 'react';
import { Route } from 'react-router-dom';
import HomePage from './wireframes/HomePage'
import LoginPage from "./wireframes/LoginPage"
import DashBoard from "./wireframes/DashBoard"
import AddItem from "./wireframes/AddItem"


function App() {
  return (
    <main className='App'>
      <Route path="/" exact component={HomePage}/>
      <Route path="/login" exact component={LoginPage}/>
      <Route path="/dashboard" exact component={DashBoard}/>
      <Route path="/additem" exact component={AddItem}/>
    </main>
  );
}

export default App;