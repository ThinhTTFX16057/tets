import React, { Component } from 'react';
import {Card, CardText} from 'reactstrap';
import dateFormat from 'dateformat';

class StaffInfo extends Component{
    constructor(props){
        super(props);
        this.state={}
    }

    displayInfo(staff){
        return(    
        <Card key={staff.id} className="col-md-4 col-sm-6 col-xs-12 my-2">
            <CardText><h4>Họ và tên: {staff.name}</h4></CardText>
            <CardText>Ngày sinh: {dateFormat(staff.doB,"dd/mm/yyyy")}</CardText>
            <CardText>Ngày vào công ty: {dateFormat(staff.startDate,"dd/mm/yyyy")}</CardText>
            <CardText>Phòng ban: </CardText>
            <CardText>Số ngày nghỉ còn lại: {staff.annualLeave}</CardText>
            <CardText>Số ngày đã làm thêm: {staff.overTime}</CardText>
        </Card>
        );
    };

    render(){
        if (this.props.selectedStaff!=null){return(
            <div className='row'>
                {this.displayInfo(this.props.selectedStaff)}
            </div>
        )}
        else{return(<div><p>Bấm vào tên nhân viên để xem thông tin</p></div>)}
    }
    

}
export default StaffInfo
