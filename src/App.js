import React, {Component} from 'react';
import StaffList from './components/StaffListComponent'
import { Navbar, NavbarBrand } from "reactstrap";
import './App.css';

import { STAFFS } from "./shared/staffs";
class App extends Component {
  constructor(props){
    super(props);
    this.state={staffs:STAFFS}
  }
  render(){return (
      <div className="App">
        <Navbar dark color="primary">
            <NavbarBrand href="/">Ứng dụng quản lý nhân sự v1.0</NavbarBrand>
        </Navbar>
        <StaffList staffs={this.state.staffs}/>
        <p>Bấm vào tên nhân viên để xem thông tin</p>
      </div>
  )} 
}

export default App;
