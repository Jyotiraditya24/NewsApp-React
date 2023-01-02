
import React from 'react';
import './App.css';
import Navbar from './components/NavBar';
import News from './components/News';

class App extends React.Component{
  
  render(){
    return (
      <div>
        <Navbar></Navbar>
        <News></News>
      </div>
    );
  }
}

export default App;
