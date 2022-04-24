import React, {Component} from 'react';
import Home from './HomeComponent';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Salary from './SalaryComponent';
import Department from './DepartmentComponent';

import StaffList from './StaffListComponent';
import StaffInfo from './StaffInfoComponent';

import { Switch, Route, Redirect, withRouter } from 'react-router-dom'

import { connect } from 'react-redux';
import { postStaff, fetchStaffs, fetchDepts, fetchSS } from '../redux/ActionCreators';

//mapStateToProps để lấy được state từ store truyền thành props cho các components trong Route ở dưới
const mapStateToProps = state => {
    return {
      staffs: state.staffs,
      departments: state.departments,
      staffsSalary: state.staffsSalary
    }
}
//mapDispatchToProps để lấy được func từ store truyền thành props cho các components trong Route ở dưới
const mapDispatchToProps = (dispatch) => ({
    postStaff: (name, doB, salaryScale, startDate, departmentId, annualLeave, overTime) => dispatch(postStaff(name, doB, salaryScale, startDate, departmentId, annualLeave, overTime)),
    fetchStaffs: () => { dispatch(fetchStaffs() )},
    fetchDepts: () => { dispatch(fetchDepts() )},
    fetchSS: () => { dispatch(fetchSS() )},
  
});
class Main extends Component{
    constructor(props){
        super(props);
    }
    componentDidMount() {
        this.props.fetchStaffs();
        this.props.fetchDepts();
        this.props.fetchSS();
      }
    render(){
        const StaffWithId=({match})=>{
            return(
            <StaffInfo
            staff={this.props.staffs.staffs.filter((staff)=>staff.id===parseInt(match.params.staffId,10))[0]}
            isLoading={this.props.staffs.isLoading}
            errMess={this.props.staffs.errMess}
            departments={this.props.departments.departments}
            />
            );
        }
        
        return (
        <div>
            <Header/>
            <Switch>
            <Route path='/home' component={
                  ()=><Home
                    staffs={this.props.staffs.staffs} 
                    isLoading={this.props.staffs.isLoading}
                    errMess={this.props.staffs.errMess}
                  />
              }/>
            <Route exact path="/staff" component={()=>
                <StaffList 
                    staffs={this.props.staffs} 
                    postStaff={this.props.postStaff}
                    staffsLoading={this.props.staffs.isLoading}
                    staffsErrMess={this.props.staffs.errMess}
                    departments={this.props.departments.departments}
                />}
            />
            <Route path="/staff/:staffId" component={StaffWithId}/>
            <Route exact path="/department" component={
                  ()=><Department departments={this.props.departments.departments}
                  deptsLoading={this.props.departments.isLoading}
                  deptsErrMess={this.props.departments.errMess}
                    />
                }/>
            <Route exact path="/salary" component={
                    ()=><Salary staffsSalary={this.props.staffsSalary.staffsSalary}
                    ssLoading={this.props.staffsSalary.isLoading}
                    ssErrMess={this.props.staffsSalary.errMess}
                    />
                  }/>
            <Redirect to="/home"/>
            </Switch>
            <Footer/>
        </div>
    )}
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));