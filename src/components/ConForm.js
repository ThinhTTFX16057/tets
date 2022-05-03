import React, { Component } from "react";
import { Form, FormGroup, Label, Input, Button, FormFeedback } from "reactstrap";

class ConForm extends Component{
    constructor(props){
        super(props);
        this.state={name:'',touched:{name:false}}
        this.handleInputChange=this.handleInputChange.bind(this)
        this.handleSubmit=this.handleSubmit.bind(this)
        this.handleBlur=this.handleBlur.bind(this)
    }
    handleInputChange(e){
        this.setState({[e.target.name]:e.target.value})
    }
    handleSubmit(e){
        e.preventDefault();
        alert(JSON.stringify(this.state))
    }
    handleBlur=(x) =>()=>{
        this.setState({touched:{...this.state.touched,[x]:true}})
    }
    validate(){
        const loi={name:''}
        if(this.state.touched.name&&this.state.name.length<3)
            loi.name='Vui long nhap ten lon hon 3 ki tu'
        return loi
    }
    render(){
        const errors=this.validate()
        return(
            <Form onSubmit={this.handleSubmit}>
                <FormGroup>
                    <Label htmlFor='name'>usermame</Label>
                    <Input type='text' id='name' name='name'
                    valid={errors.name===''} invalid={errors.name!==''}
                    onChange={this.handleInputChange}
                    onBlur={this.handleBlur('name')}
                    />
                    <FormFeedback>{errors.name}</FormFeedback>
                </FormGroup>
                <FormGroup>
                    <Button type="submit">Submit</Button>
                </FormGroup>
            </Form>
        )
    }
}
export default ConForm