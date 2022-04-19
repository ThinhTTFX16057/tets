import React, {Component} from "react";
import { Nav, Navbar, Collapse, NavItem } from 'reactstrap';
import { NavLink } from 'react-router-dom';

class Header extends Component {
    constructor(props) {
        super(props);
    
        this.toggleNav = this.toggleNav.bind(this);
        this.state = {
          isNavOpen: true
        };
      }

    toggleNav() {
        this.setState({
          isNavOpen: !this.state.isNavOpen
        });
    }

    render() {
        return(
            <div className="header container-fluid">
                <div className="clearfix">
                    <img width="30" height="30" src="assets/images/logo.png" alt="applogo"></img>
                    <div className="row floatleft d-inline-block ml-3">    
                        <h4 style={{fontSize:"3vw"}}>Staff Management App v2.0</h4>
                    </div>
                    <div className="row floatright d-inline-block m-3">
                        <h4 style={{fontSize:"2vw"}} className="fa fa-sign-in"> Đăng nhập</h4>
                    </div>
                </div>
                <Navbar dark expand="sm">
                    <button aria-label="Toggle navigation" type="button" className="navbar-toggler" onClick={this.toggleNav}><span class="navbar-toggler-icon"></span>Menu</button>
                    <Collapse isOpen={this.state.isNavOpen}>
                        <Nav>
                            <NavItem>
                                <NavLink className="nav-link"  to='/home'><span className="fa fa-home fa-lg"></span> Trang chủ</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="nav-link" to='/staff'><span className="fa fa-users fa-lg"></span> Nhân viên</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="nav-link"  to='/department'><span className="fa fa-address-card-o fa-lg"></span> Phòng ban</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="nav-link" to='/salary'><span className="fa fa-money fa-lg"></span> Bảng lương</NavLink>
                            </NavItem>
                        </Nav>
                    </Collapse>
                </Navbar>    
            </div>
        );
    }
}
export default Header