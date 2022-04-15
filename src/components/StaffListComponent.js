import React from "react";
import {Card, CardImg, CardTitle,CardBody,CardText, Breadcrumb, BreadcrumbItem} from 'reactstrap';
import {Link} from 'react-router-dom';


function RenderStaff({staffs}){return(
    staffs.map((x)=>{return(
        <Card key={x.id} className="col-md-2 col-sm-4 col-xs-6">
            <Link to={`/staff/${x.id}`}>
            <CardImg className="col-md-12 col-xs-2 my-3" src={x.image} alt={x.name}/>
            <CardBody className="col-md-12 colxs-10">
                <CardTitle>{x.name}</CardTitle>
                <CardText><p>Phòng ban: {x.department.name}</p></CardText>
            </CardBody>
            </Link>
        </Card>
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
        <div class="container-fluid">
            <div className="row">
                <RenderStaff staffs={props.staffs}/>
            </div>
        </div>
    </div>
);}

export default StaffList