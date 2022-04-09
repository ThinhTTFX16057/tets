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
            return(
            <Card key={staff.id} onClick={()=>this.handleClick(staff)} className="col-md-4 col-sm-6 col-xs-12 my-2">
                <button className="btn btn-info btn-block">
                    {staff.name}
                </button>
            </Card>
            );
        });

        

        return(
            <div>
                <div class="container">
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