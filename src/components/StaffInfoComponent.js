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
        <div key={staff.id} className="row">
            <CardBody  className="col-md-3 col-sm-4 col-12">
                <CardImg src={staff.image} />
            </CardBody>
            <CardBody className="col-md-9 col-sm-8 col-12">       
                
                <h3>Họ và tên: {staff.name}</h3>
                
                <div className="my-3">
                    <div className="title"><strong>Ngày sinh:</strong></div>
                    <input type="text" disabled value={dateFormat(staff.doB,"dd/mm/yyyy")}></input>
                </div>
            
            
                <div className="my-3">
                    <div className="title"><strong>Ngày vào công ty:</strong></div>
                    <input type="text" disabled value={dateFormat(staff.startDate,"dd/mm/yyyy")}></input>
                </div>
            
            
                <div className="my-3">
                    <div className="title"><strong>Phòng ban:</strong></div>
                    <input type="text" disabled value={staff.department.name}></input>
                </div>
            
            
                <div className="my-3">
                    <div className="title"><strong>Số ngày nghỉ còn lại:</strong></div>
                    <input type="text" disabled value={staff.annualLeave}></input>
                </div>
            
            
                <div className="my-3">
                    <div className="title"><strong>Số giờ đã làm thêm:</strong></div>
                    <input type="text" disabled value={staff.overTime}></input>
                </div>
                
            </CardBody>
        </div>
        );
    };

    render(){
        if (this.props.staff!=null){return(
            <div className="body">
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
                        
                        
                    </div>
                </div>
                
                    {this.displayInfo(this.props.staff)}
                
            </div>
        )}
        else {return(
            <div>
            </div>
        )}
    }
}
export default StaffInfo
