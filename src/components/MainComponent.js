import React, {Component} from 'react';
import Home from './HomeComponent';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Salary from './SalaryComponent';
import Department from './DepartmentComponent';
import StaffList from './StaffListComponent';
import { STAFFS } from '../shared/staffs';
import {Switch, Route, Redirect} from 'react-router-dom';

class Main extends Component{
    constructor(props){
        super(props);
        this.state = {
            staffs: STAFFS,
        }
    }
    
    
    render(){

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
            <Route exact path="/department" component={
                  ()=><Department staffs={this.state.staffs}/>
                }/>
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