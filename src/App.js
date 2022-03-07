import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react';
import Alert from './components/Alert';
import BMI from './components/BMI';
import Bank from './components/Bank';
import Harga from './components/Harga';
import Biner from './components/Convert/Biner';
import Hexadecimal from './components/Convert/Hexadecimal';
import Octal from './components/Convert/Octal';
import Decimal from './components/Convert/Decimal';
// import element Alert yang telah dibuat  

class App extends Component {

  render() {
    return (//display column
      <div className='App container '>
        <div className='row'>
          {/* bmi */}

          {/* bank */}
          <div className='col-md-10 d-flex'>  <Biner />
            <Hexadecimal />
          </div>
          <div className='col-md-10 d-flex'>
            <Octal />
            <Decimal /></div>
          {/* harga */}
          <div className='col-sm-10 d-flex'>
            <BMI />
            <Bank />
          </div>
          <div className='col-sm-10 d-flex'>
            <Harga />
          </div>
          {/* converter */}
        </div>



      </div>








    );
  }
}
export default App;

