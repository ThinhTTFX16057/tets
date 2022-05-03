import React, {Component} from 'react';
import './App.css';
import { Switch,Route } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import Hello from './components/hello';
import Hi from "./components/hi";
import { Link } from "react-router-dom";
import UnForm from './components/UnForm';
import ConForm from './components/ConForm';
import ReduxForm from './components/ReduxForm';

class App extends Component {

  render(){return (
    
    
    <BrowserRouter>
      <div>
        <h1>Day la trang Main</h1>
        <Link to ='/hello'><button>Go to Hello </button></Link>
        <Link to ='/hi'><button>Go to Hi</button></Link>
        <UnForm></UnForm>
        <ConForm></ConForm>
        <ReduxForm></ReduxForm>
        <h1>--------------------</h1>
        <Switch>
            <Route exact path='/hello' component={Hello} />
            <Route exact path='/hi' component={Hi} />
          </Switch>
      </div>
    </BrowserRouter>
    
  )}
}
export default App;
