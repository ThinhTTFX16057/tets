import React from "react";
import {CardBody,CardText, CardTitle, Breadcrumb, BreadcrumbItem} from 'reactstrap';
import {Link} from 'react-router-dom';

function RenderSalary({staffs}){return(
    staffs.map((x)=>{
        return(
            <div key={x.id} className='col-md-4 col-sm-6 col-12 my-2'>
                <CardBody>
                    <CardTitle><h4>{x.name}</h4></CardTitle>
                    <CardText>Mã nhân viên: {x.id}</CardText>
                    <CardText>Hệ số lương: {x.salaryScale}</CardText>
                    <CardText>Số giờ làm thêm: {x.overTime}</CardText>
                    <CardText>Lương: {parseInt(x.salaryScale
                    *3000000+x.overTime*200000/8)}</CardText>
                </CardBody>
            </div>
        );
    }) 
);}

function Salary(props){return(
    <div className="container-fluid">
        <div>
            <Breadcrumb>
                <BreadcrumbItem><Link to='/home'>Trang chủ</Link></BreadcrumbItem>
                <BreadcrumbItem><Link to='/department' active>Phòng ban</Link></BreadcrumbItem>
            </Breadcrumb>
        </div>
        <div className="row">
            <RenderSalary staffs={props.staffs}/>
        </div>
    </div>
);}   

export default Salary