import React,{Component} from "react";
import { Link } from "react-router-dom";

class Hello extends Component{
    constructor(props){
        super(props);

    }

    render(){
        return(
            <div>
                <h1>ClassComponent: Hello world</h1>
                <Link to ='/hi'>
                <button>Go to Hi</button>
                </Link>
            </div>
        )
    }
}
export default Hello