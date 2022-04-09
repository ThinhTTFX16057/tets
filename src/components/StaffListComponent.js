import React, {Component} from "react";
import {Card} from 'reactstrap';
import StaffInfo from './StaffInfoComponent';


class StaffList extends Component{
    constructor(props){
        super(props);
        this.state = {selectedStaff:null}
    }
    handleClick(x){
        this.setState({selectedStaff:x})
    }

    
    render(){

       
        const displayStaff=this.props.stafflist.map((staff)=>{
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
                <div class="container-fluid" style={{backgroundColor: "rgba(220,220,220,0.8)"}}>
                    <div className="row">
                        {displayStaff}
                    </div>
                </div>
                <StaffInfo selectedStaff={this.state.selectedStaff} />
            </div>
        );
    }
}
export default StaffList