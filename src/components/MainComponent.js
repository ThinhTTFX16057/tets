import React, {Component} from 'react';
import Home from './HomeComponent';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Salary from './SalaryComponent';
import Department from './DepartmentComponent';
import StaffList from './StaffListComponent';
import StaffInfo from './StaffInfoComponent';
import { STAFFS } from '../shared/staffs';
import { DEPARTMENTS } from '../shared/staffs';
import {Switch, Route, Redirect} from 'react-router-dom';

class Main extends Component{
    constructor(props){
        super(props);
        this.state = {
            staffs: STAFFS,
            departments: DEPARTMENTS
        }
    }
    
    
    render(){
        const StaffWithId=({match})=>{
            return(
            <StaffInfo
            staff={this.state.staffs.filter((staff)=>staff.id===parseInt(match.params.staffId,10))[0]}
            />
            );
        }
        const StaffWithDepartment=({match})=>{
            return(
            <StaffInfo
            staff={this.state.staffs.filter((staff)=>staff.department.name===match.params.staffDepartment)[0]}
            />
            );
        }
        return (
        <div>
            <Header/>
            <Switch>
            <Route path='/home' component={
                  ()=><Home staffs={this.state.staffs}/>
              }/>
            <Route exact path="/staff" component={
                  ()=><StaffList staffs={this.state.staffs}/>
                }/>
            <Route path="/staff/:staffId" component={StaffWithId}/>
            <Route exact path="/department" component={
                  ()=><Department departments={this.state.departments}/>
                }/>
            <Route path="/staff/:staffDepartment" component={StaffWithDepartment}/>
            <Route exact path="/salary" component={
                    ()=><Salary staffs={this.state.staffs}/>
                  }/>
            <Redirect to="/home"/>
            </Switch>
            <Footer/>
        </div>
    )}
}

export default Main;