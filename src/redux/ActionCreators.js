import * as ActionTypes from './ActionTypes';
import { baseUrl } from '../shared/baseUrl';

//add staff
export const addStaff = (responseStaff) => ({
    //func addStaff là Redux action trả về hành động ADD_STAFF và data trong payload
    type: ActionTypes.ADD_STAFF,
    payload: responseStaff
});
export const postStaff = (name, doB, salaryScale, startDate, departmentId, annualLeave, overTime) => (dispatch) => {

    const newStaff = {
        name:name, doB:doB, salaryScale:salaryScale, startDate:startDate, departmentId:departmentId, annualLeave:annualLeave, overTime:overTime,image: '/assets/images/alberto.png'
    };
    
    return fetch(baseUrl + 'staffs', {
        method: "POST",
        body: JSON.stringify(newStaff),
        headers: {
          "Content-Type": "application/json"
        },
        credentials: "same-origin"
    })
    .then(response => {
        if (response.ok) {
          return response;
        } else {
          var error = new Error('Error ' + response.status + ': ' + response.statusText);
          error.response = response;
          throw error;
        }
      },
      error => {
            throw error;
      })
    .then(response => response.json())
    .then(responseStaff => dispatch(addStaff(responseStaff)))
    .catch(error =>  { console.log('post staffs', error.message); alert('Your staff could not be posted\nError: '+error.message); });
};

//update staff
export const updatedStaff = (responseStaff) => ({
  type: ActionTypes.UPDATE_STAFF,
  payload: responseStaff
});
export const updateStaff = (id, name, doB, salaryScale, startDate, departmentId, annualLeave, overTime) => (dispatch) => {

  const newInfoStaff = {
      id: id, name:name, doB:doB, salaryScale:salaryScale, startDate:startDate, departmentId:departmentId, annualLeave:annualLeave, overTime:overTime
  };
  
  return fetch(baseUrl + 'staffs', {
      method: "PATCH",
      body: JSON.stringify(newInfoStaff),
      headers: {
        "Content-Type": "application/json"
      },
      credentials: "same-origin"
  })
  .then(response => {
    if (response.ok) {
      return response;
    } else {
      var error = new Error('Error ' + response.status + ': ' + response.statusText);
      error.response = response;
      throw error;
    }
  },
  error => {
        var errmess = new Error(error.message);
        throw errmess;
  })
  .then(response => response.json())
  .then(responseStaff => dispatch(updatedStaff(responseStaff)))

};

//delete staffs
export const deletedStaff = (responseStaff) => ({
  type: ActionTypes.DELETE_STAFF,
  payload: responseStaff
});
export const deleteStaff = (id) => (dispatch) => {
  
  return fetch(baseUrl + `staffs/${id}`, {
      method: "DELETE",
  })
  .then(fetch(baseUrl + 'staffs'))
  .then(response => {
    if (response.ok) {
      return response;
    } else {
      var error = new Error('Error ' + response.status + ': ' + response.statusText);
      error.response = response;
      throw error;
    }
  },
  error => {
        var errmess = new Error(error.message);
        throw errmess;
  })
  .then(response => response.json())
  .then(responseStaff => dispatch(deletedStaff(responseStaff)))
};
//fetch staffs
export const fetchStaffs = () => (dispatch) => {

    dispatch(staffsLoading(true));

    return fetch(baseUrl + 'staffs')
    .then(response => {
        if (response.ok) {
          return response;
        } else {
          var error = new Error('Error ' + response.status + ': ' + response.statusText);
          error.response = response;
          throw error;
        }
      },
      error => {
            var errmess = new Error(error.message);
            throw errmess;
      })
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
    .then(response => {
        if (response.ok) {
          return response;
        } else {
          var error = new Error('Error ' + response.status + ': ' + response.statusText);
          error.response = response;
          throw error;
        }
      },
      error => {
            var errmess = new Error(error.message);
            throw errmess;
      })
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
    .then(response => {
        if (response.ok) {
          return response;
        } else {
          var error = new Error('Error ' + response.status + ': ' + response.statusText);
          error.response = response;
          throw error;
        }
      },
      error => {
            var errmess = new Error(error.message);
            throw errmess;
      })
    .then(response => response.json())
    .then(staffsSalary => dispatch(ssDisplay(staffsSalary)));
}

export const ssLoading = () => ({type: ActionTypes.SS_LOADING});
export const ssFailed = (errmess) => ({type: ActionTypes.SS_FAILED,payload: errmess});
export const ssDisplay = (staffsSalary) => ({type: ActionTypes.SS_DISPLAY,payload: staffsSalary});