import React, {Component} from "react";
import {Card, CardBody,CardText, CardTitle, Breadcrumb, BreadcrumbItem} from 'reactstrap';
import {Link} from 'react-router-dom';

class Salary extends Component{
    constructor(props){
        super(props);
        this.state={}
    }
    render(){
        const renderSalary=this.props.staffs.map((x)=>{
            return(
                <Card kex={x.id} className='col-md-4 col-sm-6 col-12 m-1'>
                    <CardBody>
                        <CardTitle>{x.name}</CardTitle>
                        <CardText>Mã nhân viên: {x.id}</CardText>
                        <CardText>Hệ số lương: {x.salaryScale}</CardText>
                        <CardText>Số giờ làm thêm: {x.overTime}</CardText>
                        <CardText>Lương: {parseInt(x.salaryScale
                        *3000000+x.overTime*200000/8)}</CardText>
                    </CardBody>
                </Card>
            );
        })   
    return(
        <div className="container">
            <div className='row'>
                <Breadcrumb>
                    <BreadcrumbItem><Link to='/home'>Home</Link></BreadcrumbItem>
                    <BreadcrumbItem><Link to='/department' active>Phòng ban</Link></BreadcrumbItem>
                </Breadcrumb>
            </div>
            <div className="row">
                {renderSalary}
            </div>
        </div>
        )
    }   
}
export default Salary