import React, {Component} from 'react';
import StaffList from './components/StaffListComponent'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { STAFFS } from "./shared/staffs";
class App extends Component {
  constructor(props){
    super(props);
    this.state={staffs:STAFFS}
  }
  render(){return (
      <div className="App">
        <header className="App-header">
          <h1>
            DANH SACH NHAN VIEN
          </h1>
        </header>
        <StaffList staffs={this.state.staffs}/>
      </div>
  )} 
}

export default App;
