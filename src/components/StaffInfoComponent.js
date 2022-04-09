import React, { Component } from 'react';
import {Card,CardImg,CardBody} from 'reactstrap';
import { Navbar, NavbarBrand } from "reactstrap";
import dateFormat from 'dateformat';

class StaffInfo extends Component{
    constructor(props){
        super(props);
        this.state={}
    }

    displayInfo(staff){
        return(    
        <Card key={staff.id}>
            <CardBody  className="col-md-3 col-sm-4 col-12 boximage">
                <CardImg src={staff.image} />
                <h4>{staff.name}</h4>
            </CardBody>
            <CardBody className="col-md-4 col-sm-6 col-12 boxinfo">       
                
                <h3>Họ và tên: {staff.name}</h3>
                
                <div className="clearfix align-middle">
                    <strong>Ngày sinh:</strong>
                    <input type="text" disabled value={dateFormat(staff.doB,"dd/mm/yyyy")}></input>
                </div>
            
            
                <div className="clearfix align-middle">
                    <strong>Ngày vào công ty: </strong>
                    <input type="text" disabled value={dateFormat(staff.startDate,"dd/mm/yyyy")}></input>
                </div>
            
            
                <div className="clearfix align-middle">
                    <strong>Phòng ban:</strong>
                    <input type="text" disabled value={staff.department.name}></input>
                </div>
            
            
                <div className="clearfix align-middle">
                    <strong>Số ngày nghỉ còn lại: </strong>
                    <input type="text" disabled value={staff.annualLeave}></input>
                </div>
            
            
                <div className="clearfix align-middle">
                    <strong>Số ngày đã làm thêm: </strong>
                    <input type="text" disabled value={staff.overTime}></input>
                </div>
                
            </CardBody>
        </Card>
        );
    };

    render(){
        if (this.props.selectedStaff!=null){return(
            <div>
                <Navbar style={{margin: "0"}} color="info">
                    <NavbarBrand href="/"><strong>Thông tin nhân viên</strong></NavbarBrand>
                </Navbar>
                {this.displayInfo(this.props.selectedStaff)}
            </div>
        )}
        else{return(
        <div>
            <Navbar color="info">
                <NavbarBrand href="/"><strong>Thông tin nhân viên</strong></NavbarBrand>
            </Navbar>
            <p><em>**Bấm vào tên nhân viên để xem thông tin</em></p>
        </div>)}
    }
    

}
export default StaffInfo
