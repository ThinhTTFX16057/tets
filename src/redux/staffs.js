import * as ActionTypes from './ActionTypes';

export const Staffs = (state = {isLoading: true,errMess: null,staffs:[] }, action) => {
    switch (action.type) {
        //khi có yêu cầu hành động ADD_STAFF từ ActionCreators thì tiến hành tạo state mới bằng concat
        case ActionTypes.ADD_STAFF:
            return { ...state, staffs: state.staffs.concat(action.payload)}
        //fetch staff
        case ActionTypes.STAFFS_DISPLAY:
            return {...state, isLoading: false, errMess: null, staffs: action.payload};

        case ActionTypes.STAFFS_LOADING:
            return {...state, isLoading: true, errMess: null, staffs: []}

        case ActionTypes.STAFFS_FAILED:
            return {...state, isLoading: false, errMess: action.payload};
    
        default:
          return state;
      }
};
