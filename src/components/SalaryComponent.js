import React from "react";
import {Card,CardText, CardTitle, Breadcrumb, BreadcrumbItem} from 'reactstrap';
import {Link} from 'react-router-dom';

function RenderSalary({staffs}){return(
    staffs.map((x)=>{
        return(
            <div key={x.id} className='col-md-4 col-sm-6 col-12'>
                <Card style={{border:"1px solid black"}}>
                    <CardTitle>{x.name}</CardTitle>
                    <CardText>Mã nhân viên: {x.id}</CardText>
                    <CardText>Hệ số lương: {x.salaryScale}</CardText>
                    <CardText>Số giờ làm thêm: {x.overTime}</CardText>
                    <CardText>Lương: {parseInt(x.salaryScale
                    *3000000+x.overTime*200000/8)}</CardText>
                </Card>
            </div>
        );
    }) 
);}

function Salary(props){return(
    <div className="container-fluid">
        <div className='row'>
            <Breadcrumb>
                <BreadcrumbItem><Link to='/home'>Trang chủ</Link></BreadcrumbItem>
                <BreadcrumbItem active>Bảng lương</BreadcrumbItem>
            </Breadcrumb>
            <div id="menubar" className='container-fluid'>
                <div className="floatleft"><h3><i class="fa fa-money" aria-hidden="true"></i> Bảng lương nhân viên</h3>
                </div>
                <div className="floatright">
                <input id="search" type="text" placeholder=" mã nhân viên"></input>
                <button><span class="glyphicon glyphicon-search"></span>Tìm kiếm</button>
                </div>
            </div>
        </div>
        <div class="container-fluid">
            <div className="row">
                <RenderSalary staffs={props.staffs}/>
            </div>
        </div>
    </div>
);}   

export default Salary