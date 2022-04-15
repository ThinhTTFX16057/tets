import React from "react";
import {Card, CardBody,CardText, CardTitle, Breadcrumb, BreadcrumbItem} from 'reactstrap';
import {Link} from 'react-router-dom';

function RenderDepartment({departments}){return(
    departments.map((x)=>{
        return(
            <Card kex={x.id} className='col-md-4 col-sm-6 col-12 my-2'>
                <CardBody>
                    <CardTitle>{x.name}</CardTitle>
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
                <BreadcrumbItem active>Phòng ban</BreadcrumbItem>
            </Breadcrumb>
            <div id="menubar" className='container-fluid'>
                <div className="floatleft"><h3><i class="fa fa-id-card-o" aria-hidden="true"></i> Danh sách phòng ban</h3>
                </div>
            </div>
            
        </div>
        <div class="container-fluid">
            <div className="row">
                <RenderDepartment departments={props.departments}/>
            </div>
        </div>
    </div>
);}   

export default Department;