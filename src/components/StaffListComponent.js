import React, {useState} from "react";
import {Card, CardImg, CardTitle,CardBody,CardText, Breadcrumb, BreadcrumbItem} from 'reactstrap';
import {Link} from 'react-router-dom';


function RenderStaff({staff}){
    return(
        <div className="col-md-2 col-sm-4 col-6 my-2">
            <Card style={{height:"100%"}} key={staff.id} >
                <Link to={`/staff/${staff.id}`}>
                <CardImg className=" my-3" src={staff.image} alt={staff.name}/>
                <CardBody className="">
                    <CardTitle>{staff.name}</CardTitle>
                    <CardText><p>Mã ID: {staff.id}</p></CardText>
                    <CardText><p>Phòng ban: {staff.department.name}</p></CardText>
                </CardBody>
                </Link>
            </Card>
        </div>
    );
}
    
        
const StaffList=(props)=>{
    const [statesDepartment, changeState] = useState("");
    const [name,changeName] = useState("");
    const displaystaff=
            props.staffs
            .sort((a,b)=>
                statesDepartment==="department"? a.department.name.toLowerCase() - b.department.name.toLowerCase():a.id-b.id
            )
            .filter((staff)=>{
                if (name===""){return (staff)}
                else if(staff.name.toLowerCase().includes(name.toLowerCase())){return(staff)}
                else{return 0}
            })
            .map((staff) => {
                return(<RenderStaff staff={staff} />)
            })
    
    
    return(
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
                <input id="search" type="text" placeholder=" họ tên nhân viên" value={name} onChange={(e)=>changeName(e.target.value)}></input>
                <span class="glyphicon glyphicon-search"></span>Tìm kiếm
                </div>

                <div className="floatright sort"><i class="fa fa-sort fa-lg" aria-hidden="true"></i>
                    <select onChange={()=>{
                        if (statesDepartment!=="department"){return changeState("salary")}
                        else if (statesDepartment==="salary"){return changeState("id")}
                    }}>
                        <option >Mã nhân viên</option>
                        <option >Phòng ban</option>
                    </select>
                </div>
            </div>
        </div>
        <div className="row">
            {displaystaff}
        </div>
    </div>
    );
}

export default StaffList