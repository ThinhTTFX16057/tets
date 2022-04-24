import * as ActionTypes from './ActionTypes';
import { STAFFS } from '../shared/staffs';
import { baseUrl } from '../shared/baseUrl';

//add staff
export const addStaff = (name, doB, salaryScale, startDate, department, annualLeave, overTime) => ({
    //func addStaff là Redux action trả về hành động ADD_STAFF và data trong payload
    type: ActionTypes.ADD_STAFF,
    payload: {
        name: name,
        doB: doB,
        salaryScale: salaryScale,
        startDate: startDate,
        department: department,
        annualLeave: annualLeave,
        overTime: overTime,
        image: '/assets/images/alberto.png'
    }
});
//fetch staffs
export const fetchStaffs = () => (dispatch) => {

    dispatch(staffsLoading(true));

    return fetch(baseUrl + 'staffs')
    .then(response => response.json())
    .then(staffs => dispatch(staffsDisplay(staffs)));
}

export const staffsLoading = () => ({type: ActionTypes.STAFFS_LOADING});
export const staffsFailed = (errmess) => ({type: ActionTypes.STAFFS_FAILED,payload: errmess});
export const staffsDisplay = (staffs) => ({type: ActionTypes.STAFFS_DISPLAY,payload: staffs});

//fetch departments
export const fetchDepts = () => (dispatch) => {

    dispatch(deptsLoading(true));

    return fetch(baseUrl + 'departments')
    .then(response => response.json())
    .then(departments => dispatch(deptsDisplay(departments)));
}

export const deptsLoading = () => ({type: ActionTypes.DEPTS_LOADING});
export const deptsFailed = (errmess) => ({type: ActionTypes.DEPTS_FAILED,payload: errmess});
export const deptsDisplay = (departments) => ({type: ActionTypes.DEPTS_DISPLAY,payload: departments});

//fetch staffs salary
export const fetchSS = () => (dispatch) => {

    dispatch(ssLoading(true));

    return fetch(baseUrl + 'staffsSalary')
    .then(response => response.json())
    .then(staffsSalary => dispatch(ssDisplay(staffsSalary)));
}

export const ssLoading = () => ({type: ActionTypes.SS_LOADING});
export const ssFailed = (errmess) => ({type: ActionTypes.SS_FAILED,payload: errmess});
export const ssDisplay = (staffsSalary) => ({type: ActionTypes.SS_DISPLAY,payload: staffsSalary});