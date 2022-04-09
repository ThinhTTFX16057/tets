import React, {Component} from 'react';
import { Navbar, NavbarBrand } from "reactstrap";
import './App.css';
import StaffList from './components/StaffListComponent';
import { STAFFS } from "./shared/staffs";


class App extends Component {
  constructor(props){
    super(props);
    this.state={staffs:STAFFS,columns:null}
  }

  showcolumn(x){
      this.setState({columns:x})
  }

  render(){return (
      <div className="App">
        <Navbar style={{margin: "0",backgroundColor:"rgb(32,154,194)"}}>
            <NavbarBrand style={{color:"white"}} href="/">
              <strong>ỨNG DỤNG QUẢN LÝ NHÂN SỰ v1.0</strong>
            </NavbarBrand>
        </Navbar>
        <div className="container-fluid header">
          <div className="float-left">
            <strong>Danh sách nhân viên</strong>
          </div> 
          <div className="dropdown float-right">
            <button className="btn btn-success dropdown-toggle" type="button" data-toggle="dropdown">{"Hiển thị "}
            <span className="caret"></span></button>
            <ul className="dropdown-menu list-unstyled">
              <li> 
                <button className="view btn btn-basic btn-md btn-block" onClick={()=>this.showcolumn(2)} >2 cột</button>
              </li>
              <li> 
                <button className="view btn btn-basic btn-md btn-block" onClick={()=>this.showcolumn(3)} >3 cột</button>
              </li>
              <li>
                <button className="view btn btn-basic btn-md btn-block" onClick={()=>this.showcolumn(6)} >6 cột</button>
              </li>
            </ul>
          </div>
        </div>
        <StaffList stafflist={this.state.staffs} numberofcolumn={this.state.columns}/>
      </div>
  )} 
}

export default App;
