import React, {Component} from "react";
import {Card} from 'reactstrap'

class StaffList extends Component{
    constructor(props){
        super(props);
        this.state={}
    }
 
    render(){
        const displaystaff=this.props.staffs.map((x)=>{return(
            
                <Card key={x.id} className="col-md-4 col-sm-6 col-xs-12 m-2">
                    <button className="btn btn-info btn-block">
                        {x.name}
                    </button>
                </Card>
                
      
        )})
        return(
        <div className="container">
                {displaystaff}

        </div>
    )}
}
export default StaffList