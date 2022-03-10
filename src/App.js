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
  constructor() {
    super();
    this.state = {
      type: "danger",
      header: "Fatal error",
      content: "Ini content dari Alert"
    }
  }
  // fungsi untuk mengubah tipe
  changeTypeAlert = (event) => {
    this.setState({
      type: event.target.value
    });
  }
  // fungsi untuk mengubah header
  changeHeaderAlert = (event) => {
    this.setState({
      header: event.target.value
    });
  }
  // fungsi untuk mengubah content
  changeContentAlert = (event) => {
    this.setState({
      content: event.target.value
    });
  }

  render() {
    return (

      <div className="App container col-sm-6">
        <Alert type={this.state.type} header={this.state.header}>
          {this.state.content}
        </Alert>
        <hr />
        <h4>Alert Control</h4>
        <b className="text-left">Tipe Alert</b>
        <select className="form-control" name="type" value={this.state.type}
          onChange={this.changeTypeAlert}>
          <option value="success">Success</option>
          <option value="warning">Warning</option>
          <option value="danger">Danger</option>
          <option value="info">Info</option>
        </select>
        <b className="text-left">Header Alert</b>
        <input
          type="text" name="header" className="form-control" value={this.state.header}
          onChange={this.changeHeaderAlert} />
        <b className="text-left">Content Alert</b>
        <input
          type="text" name="content" className="form-control" value={this.state.content}
          onChange={this.changeContentAlert} />
      </div >






    );
  }
}
export default App;

