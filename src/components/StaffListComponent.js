import React from "react";
import {Card, CardImg, CardTitle, Breadcrumb, BreadcrumbItem} from 'reactstrap';
import {Link} from 'react-router-dom';


function RenderStaff({staffs}){return(
    staffs.map((x)=>{return(
        <Card key={x.id} className="col-md-2 col-sm-4 col-xs-6 my-2">
            <Link to={`/staff/${x.id}`}>
            <CardImg className="my-2" src={x.image} alt={x.name}/>
            <CardTitle className="my-2"><h5>{x.name}</h5></CardTitle>
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
                <div className="floatleft"><h3>Danh sách nhân viên</h3>
                </div>
                <div className="floatright">
                <input id="search" type="text" placeholder="mã nhân viên"></input>
                <button><span class="glyphicon glyphicon-search"></span>Tìm kiếm</button>
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