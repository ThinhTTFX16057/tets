import React, {Component} from "react";
import {Card, CardImg, CardTitle, Breadcrumb, BreadcrumbItem} from 'reactstrap';
import {Link} from 'react-router-dom';

class StaffList extends Component{
    constructor(props){
        super(props);
        this.state = {}
    }

    
    render(){
        const displayStaff=this.props.staffs.map((x)=>{
            return(
            <Link to={`/staff/${x.id}`}>
            <Card key={x.id} className="col-md-2 col-sm-4 col-xs-6 my-2">
                <CardImg src={x.image} alt={x.name}/>
                <CardTitle><h5>{x.name}</h5></CardTitle>
            </Card>
            </Link>
            )
        });
    
        

        return(
            <div>
                <div className="App">
                    <div className="container-fluid header">
                        <div className="float-left">
                            <strong>Danh sách nhân viên</strong>
                        </div> 
                    </div>
                </div>
                <div className='row'>
                <Breadcrumb>
                    <BreadcrumbItem><Link to='/home'>Home</Link></BreadcrumbItem>
                    <BreadcrumbItem active>Nhân viên</BreadcrumbItem>
                </Breadcrumb>
                <div className='col-12'>
                    <h3>Nhân viên</h3>
                    <hr/>
                </div>
            </div>
                <div class="container-fluid" style={{backgroundColor: "rgba(220,220,220,0.8)"}}>
                    <div className="row">
                        {displayStaff}
                    </div>
                </div>
            </div>
        );
    }
}
export default StaffList