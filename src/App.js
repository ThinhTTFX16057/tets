import React, {Component} from 'react';
import { Navbar, NavbarBrand } from "reactstrap";
import './App.css';
import StaffList from './components/StaffListComponent';
import { STAFFS } from "./shared/staffs";


class App extends Component {
  constructor(props){
    super(props);
    this.state={staffs:STAFFS}
  }
  render(){return (
      <div className="App">
        <Navbar style={{margin: "0",backgroundColor:"rgb(32,154,194)"}}>
            <NavbarBrand style={{color:"white"}} href="/"><strong>ỨNG DỤNG QUẢN LÝ NHÂN SỰ v1.0</strong></NavbarBrand>
        </Navbar>
        <Navbar style={{margin: "0",backgroundColor:"rgb(28,43,53)"}}>
            <NavbarBrand style={{color:"rgb(193,193,193)"}} href="/"><strong>Danh sách nhân viên</strong></NavbarBrand>
        </Navbar>
        <StaffList stafflist={this.state.staffs}/>
      </div>
  )} 
}

export default App;
