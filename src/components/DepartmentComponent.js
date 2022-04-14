import React from "react";
import {Card, CardBody,CardText, CardTitle, Breadcrumb, BreadcrumbItem} from 'reactstrap';
import {Link} from 'react-router-dom';

function RenderDepartment({departments}){return(
    departments.map((x)=>{
        return(
            <Card kex={x.id} className='col-md-4 col-sm-6 col-12 my-2'>
                <CardBody>
                    <CardTitle><h4>{x.name}</h4></CardTitle>
                    <CardText>Số lượng nhân viên: {x.numberOfStaff}</CardText>
                </CardBody>
            </Card>
        );
    })
);}   
function Department(props){return(
    <div className="container-fluid">
        <div className='row'>
            <Breadcrumb>
                <BreadcrumbItem><Link to='/home'>Trang chủ</Link></BreadcrumbItem>
                <BreadcrumbItem><Link to='/department' active>Phòng ban</Link></BreadcrumbItem>
            </Breadcrumb>
        </div>
        <div className="row">
            <RenderDepartment departments={props.departments}/>
        </div>
    </div>
);}   

export default Department;