import React, {Component} from "react";
import {Card, CardText} from 'reactstrap';
import { DEPARTMENTS } from "../shared/staffs";
import dateFormat from 'dateformat';


class StaffList extends Component{
    constructor(props){
        super(props);
        this.state={departments:DEPARTMENTS}
    }
 
    render(){
        const displaystaff=this.props.staffs.map((x)=>{return(
            
                <Card key={x.id} className="col-md-4 col-sm-6 col-xs-12 my-2">
                    <button className="btn btn-info btn-block">
                        {x.name}
                    </button>
                </Card>
        )})

        const displayinfo=this.props.staffs.map((x)=>{return(
            
            <Card key={x.id} className="col-md-4 col-sm-6 col-xs-12 my-2">
               <CardText><h4>Họ và tên: {x.name}</h4></CardText>
                <CardText>Ngày sinh: {dateFormat(x.doB,"dd/mm/yyyy")}</CardText>
                <CardText>Ngày vào công ty: {dateFormat(x.startDate,"dd/mm/yyyy")}</CardText>
                <CardText>Phòng ban: </CardText>
                <CardText>Số ngày nghỉ còn lại: {x.annualLeave}</CardText>
                <CardText>Số ngày đã làm thêm: {x.overTime}</CardText>
            </Card>
    )})

        return(
        <div className="container">
                {displaystaff}
                {displayinfo}
        </div>
    )}
}
export default StaffList