import React from 'react';
import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import Course from './Components/Course/Course';
import Header from './Components/Heder/Header';


function App() {
  
  return (
    <div className="bg-light">
      
      <Header></Header>
      <Course></Course>
    </div>
  );
}

export default App;
