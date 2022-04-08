import React, {Component} from "react";
import {Card} from 'reactstrap'

class StaffList extends Component{
    constructor(props){
        super(props);
        this.state={}
    }
 
    render(){
        const displaystaff=this.props.staffs.map((x)=>{return(
            
                <Card key={x.id} className="col-12 col-sm-6 col-md-4">
                    <button>
                        {x.name}
                    </button>
                </Card>
                
      
        )})
        return(
        <div>
            {displaystaff}
        </div>
    )}
}
export default StaffList