import React, {Component} from "react";
import { Nav, Navbar, NavbarToggler, Collapse, NavItem } from 'reactstrap';
import { NavLink } from 'react-router-dom';

class Header extends Component {
    constructor(props) {
        super(props);
    
        this.toggleNav = this.toggleNav.bind(this);
        this.state = {
          isNavOpen: false
        };
      }

      toggleNav() {
        this.setState({
          isNavOpen: !this.state.isNavOpen
        });
      }

    render() {
        return(
            <div className="header">
                <div className="container-fluid clearfix">
                    <div className="float-left">
                        <h4 style={{fontSize:"4vw"}}>Staff Management App v2.0</h4>
                    </div>
                    <div className="float-right">
                        <h4 style={{fontSize:"2vw"}} className="fa fa-sign-in"> Đăng nhập</h4>
                    </div>
                </div>
                <Navbar dark expand="sm">
                    <div className="container">
                        <NavbarToggler onClick={this.toggleNav} />
                        <Collapse isOpen={this.state.isNavOpen} navbar>
                            <Nav navbar >
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
                    </div>
                </Navbar>
                
            </div>
        );
    }
}
export default Header