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

function Salary(props){
    const [states, changeState] = useState(false);
    const [name,changeName] = useState("");
    const displaysalary=
        props.staffs
        .sort((a,b)=>
            states? parseInt(a.salaryScale*3000000+a.overTime*200000/8) - parseInt(b.salaryScale*3000000+b.overTime*200000/8):a.id-b.id
        )
        .filter((x)=>{
            if (name===""){return (x)}
            else if(x.name.toLowerCase().includes(name.toLowerCase())){return(x)}
            else{return 0}
        })
        .map((x) => {
            return(<RenderSalary staff={x} />)
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
                    
                    <div className="floatright mx-2 sort">
                        <strong><span class="glyphicon glyphicon-search"></span>{` Search `}</strong>
                        <input id="search" type="text" placeholder=" họ tên nhân viên" value={name} onChange={(e)=>changeName(e.target.value)}></input>
                    </div>

                    <div className="floatright mx-2 sort">
                        <strong><i class="fa fa-sort fa-lg" aria-hidden="true"></i>{` Sort`}</strong>
                        <select onChange={()=>{changeState(!states)}}>
                            <option >Mã nhân viên tăng dần</option>
                            <option >Mức lương tăng dần</option>
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