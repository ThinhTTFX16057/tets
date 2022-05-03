import React, { Component } from "react";
import { Form, FormGroup, Label, Input, Button, FormFeedback } from "reactstrap";
import {LocalForm, Control, Errors} from 'react-redux-form'


const required = (val) => val && val.length;
const minLength = (len) => (val) => val && val.length >= len;
const maxLength = (len) => (val) => val && val.length <= len;

class ReduxForm extends Component{
    constructor(props){
        super(props);
       this.handleSubmit=this.handleSubmit.bind(this)
        
    }
   handleSubmit(values){
       alert(JSON.stringify(values))
   }
    render(){
        
        return(
            <LocalForm onSubmit={(value)=>this.handleSubmit(value)}>
                <div className="form-group">
                    <Label htmlFor='name'>usermame</Label>
                    <Control.text model=".name" id='name' name="name"className="form-control"
                    validators={{required, minLength:minLength(3),maxLength:maxLength(10)}}
                    />
                    <Errors className="text-danger" model=".name" show="touched" messages={{required: 'Bat buoc nhap ',minLength:'Lon hon 3 ki tu ',maxLength:'Be hon 10 ki tu '}}/>
                </div>
                <div className="form-group">
                    <Button type="submit">Send request</Button>
                </div>
            </LocalForm>
        )
    }
}
export default ReduxForm