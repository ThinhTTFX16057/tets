import React, { Component } from "react";
import { Form, FormGroup, Label, Input, Button } from "reactstrap";

class UnForm extends Component{
    constructor(props){
        super(props);
        this.state={}
        this.handleSubmit=this.handleSubmit.bind(this)
    }
    handleSubmit(e){
        e.preventDefault();
        alert(JSON.stringify(this.name.value))
    }
    render(){
        return(
            <Form onSubmit={this.handleSubmit}>
                <FormGroup>
                    <Label htmlFor="usermame">ten dang nhap</Label>
                    <Input type="text" id="username" innerRef={(input)=>this.name=input}/>
                </FormGroup>
                <FormGroup>
                    <Button type="submit">Log in</Button>
                </FormGroup>
            </Form>
        )
    }
}
export default UnForm