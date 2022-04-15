import React from "react";
import {Card, CardImg, CardTitle,CardBody,CardText, Breadcrumb, BreadcrumbItem} from 'reactstrap';
import {Link} from 'react-router-dom';


function RenderStaff({staffs}){return(
    staffs.map((x)=>{return(
        <div className="col-md-2 col-sm-4 col-6">
        <Card key={x.id} >
            <Link to={`/staff/${x.id}`}>
            <CardImg className=" my-3" src={x.image} alt={x.name}/>
            <CardBody className="">
                <CardTitle>{x.name}</CardTitle>
                <CardText><p>Phòng ban: {x.department.name}</p></CardText>
            </CardBody>
            </Link>
        </Card>
        </div>
        );
    })
);}
    
        
function StaffList(props){return(
    <div className="container-fluid">
        <div className='row'>
            <Breadcrumb>
                <BreadcrumbItem><Link to='/home'>Trang chủ</Link></BreadcrumbItem>
                <BreadcrumbItem active>Nhân viên</BreadcrumbItem>
            </Breadcrumb>
            <div id="menubar" className='container-fluid'>
                <div className="floatleft"><h3><i class="fa fa-address-book-o" aria-hidden="true"></i> Danh sách nhân viên</h3>
                </div>
                <div className="floatright">
                <input id="search" type="text" placeholder=" mã nhân viên"></input>
                <button className="btn btn-default btn-sm "><span class="glyphicon glyphicon-search"></span>Tìm kiếm</button>
                </div>
            </div>
        </div>
        
        <div className="row">
            <RenderStaff staffs={props.staffs}/>
        </div>
        
    </div>
);}

export default StaffList