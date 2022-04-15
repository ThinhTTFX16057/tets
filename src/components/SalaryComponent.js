import React, {useState} from "react";
import {Card,CardText, CardTitle, Breadcrumb, BreadcrumbItem} from 'reactstrap';
import {Link} from 'react-router-dom';


function RenderSalary({staff}){
    return(
        <div key={staff.id} className='col-md-4 col-sm-6 col-12'>
            <Card style={{border:"1px solid black"}}>
                <CardTitle>{staff.name}</CardTitle>
                <CardText>Mã nhân viên: {staff.id}</CardText>
                <CardText>Hệ số lương: {staff.salaryScale}</CardText>
                <CardText>Số giờ làm thêm: {staff.overTime}</CardText>
                <CardText><input type="text" disabled value={`Lương: ${parseInt(staff.salaryScale
                *3000000+staff.overTime*200000/8).toLocaleString()} VNĐ`}></input></CardText>
            </Card>
        </div>
    );
} 

const Salary=(props)=>{
    const [statesname, changeState] = useState("");
    const displaysalary=
            props.staffs.sort((a,b)=>statesname=="salary"? 
            parseInt(a.salaryScale*3000000+a.overTime*200000/8) - parseInt(b.salaryScale*3000000+b.overTime*200000/8)
            :
            a.id-b.id
            ).map((staff) => {
                return(<RenderSalary staff={staff} />)
            })
        
    

    return(
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

                    <div className="floatright sort"><i class="fa fa-sort fa-lg" aria-hidden="true"></i>
                        <select onChange={()=>{
                            if (statesname!="salary"){return changeState("salary")}
                            else if (statesname=="salary"){return changeState("id")}
                        }}>
                            <option >Mã nhân viên</option>
                            <option >Mức lương</option>
                        </select>
                    </div>
                </div>
            </div>
            <div class="container-fluid">
                <div className="row">
                    {displaysalary}
                </div>
            </div>
        </div>
    );
}


export default Salary