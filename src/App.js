import React, {Component} from 'react';
import StaffList from './components/StaffListComponent';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
class App extends Component {
  constructor(props){
    super(props);
    this.state={}
  }
  render(){return (
      <div className="App">
        <header className="App-header">
          <h1>
            DANH SACH NHAN VIEN
          </h1>
        </header>
        <StaffList />
      </div>
  )} 
}

export default App;
