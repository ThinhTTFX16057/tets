import React, { Component } from 'react';
import {Card,CardImg,CardBody, Navbar, NavbarBrand, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link} from "react-router-dom";
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
            <CardBody className="col-md-9 col-sm-8 col-12 boxinfo">       
                
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
        if (this.props.staff!=null){return(
            <div className="container">
                <div className='row'>
                    <Breadcrumb>
                        <BreadcrumbItem><Link to='/home'>Home</Link></BreadcrumbItem>
                        <BreadcrumbItem><Link to='/staff'>Nhân viên</Link></BreadcrumbItem>
                        <BreadcrumbItem active>{this.props.staff.name}</BreadcrumbItem>
                    </Breadcrumb>
                    <div className='col-12'>
                        <Navbar style={{margin: "0"}} color="info">
                            <NavbarBrand href="/"><strong>Thông tin nhân viên</strong></NavbarBrand>
                        </Navbar>
                        <h3>{this.props.staff.name}</h3>
                        <hr/>
                    </div>
                </div>
                <div className="row">
                    {this.displayInfo(this.props.staff)}
                </div>
            </div>
        )}
        else {return(
            <div>
            </div>
        )}
    }
}
export default StaffInfo
