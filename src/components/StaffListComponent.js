import React, {Component} from "react";
import {Card} from 'reactstrap';
import StaffInfo from './StaffInfoComponent';

class StaffList extends Component{
    constructor(props){
        super(props);
        this.state = {
            selectedStaff:null,
            numberofcolumns:null
        }
    }
    handleClick(x){
        this.setState({selectedStaff:x})
    }
    showcolumn(x){
        this.setState({numberofcolumns:x})
    }
    
    render(){

       
        const displayStaff=this.props.staffs.map((staff)=>{
            if(this.props.numberofcolumn==2){
                return(
                <Card key={staff.id} onClick={()=>this.handleClick(staff)} className="col-md-6 col-sm-6 col-xs-12 my-2">
                    <button className="btn btn-info btn-block">
                        <h5>{staff.name}</h5>
                    </button>
                </Card>
                )}
            else if(this.props.numberofcolumn==3){
                return(
                <Card key={staff.id} onClick={()=>this.handleClick(staff)} className="col-md-4 col-sm-4 col-xs-12 my-2">
                    <button className="btn btn-info btn-block">
                        <h5>{staff.name}</h5>
                    </button>
                </Card>
                )}
            else if(this.props.numberofcolumn==6){
                return(
                <Card key={staff.id} onClick={()=>this.handleClick(staff)} className="col-md-2 col-sm-2 col-xs-12 my-2">
                    <button className="btn btn-info btn-block">
                        <h5>{staff.name}</h5>
                    </button>
                </Card>
                )}
            else {
                return(
                <Card key={staff.id} onClick={()=>this.handleClick(staff)} className="col-md-4 col-sm-6 col-xs-12 my-2">
                    <button className="btn btn-info btn-block">
                        <h5>{staff.name}</h5>
                    </button>
                </Card>
                )}
        });
    
        

        return(
            <div>
                <div className="App">
                    <div className="container-fluid header">
                        <div className="float-left">
                            <strong>Danh sách nhân viên</strong>
                        </div> 
                        <div className="dropdown float-right">
                            <button className="btn btn-success dropdown-toggle" type="button" data-toggle="dropdown">{"Hiển thị "}
                            <span className="caret"></span></button>
                                <ul className="dropdown-menu list-unstyled">
                                <li> 
                                    <button className="view btn btn-basic btn-md btn-block" onClick={()=>this.showcolumn(2)} >2 cột</button>
                                </li>
                                <li> 
                                    <button className="view btn btn-basic btn-md btn-block" onClick={()=>this.showcolumn(3)} >3 cột</button>
                                </li>
                                <li>
                                    <button className="view btn btn-basic btn-md btn-block" onClick={()=>this.showcolumn(6)} >6 cột</button>
                                </li>
                                </ul>
                        </div>
                    </div>
                </div>
                <div class="container-fluid" style={{backgroundColor: "rgba(220,220,220,0.8)"}}>
                    <div className="row">
                        {displayStaff}
                    </div>
                </div>
                <div className="container-fluid">
                    <StaffInfo selectedStaff={this.state.selectedStaff} />
                </div>
            </div>
        );
    }
}
export default StaffList