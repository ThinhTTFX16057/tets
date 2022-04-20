import React, { Component } from "react";
import {Card, CardImg, CardTitle,CardBody,CardText, Breadcrumb, BreadcrumbItem,  Button, Modal, ModalHeader, ModalBody, Row, Col, Label, Input, Form, FormGroup, FormFeedback} from 'reactstrap';
import {Link} from 'react-router-dom';
import { Control, LocalForm, Errors } from 'react-redux-form';

const required = (val) => val && val.length;
const maxLength = (len) => (val) => !val || (val.length <= len);
const minLength = (len) => (val) => val && (val.length >= len);
const isNumber = (val) => !isNaN(Number(val));
const minNum = (num) => (val) => !val || (val >= num);

const RenderStaff=({staff})=>{
    return(
        <div className="col-md-2 col-sm-4 col-6 my-2">
            <Card style={{height:"100%"}} key={staff.id} >
                <Link to={`/staff/${staff.id}`}>
                <CardImg className=" my-3" src={staff.image} alt={staff.name}/>
                <CardBody className="">
                    <CardTitle>{staff.name}</CardTitle>
                    <CardText><p>Mã ID: {staff.id}</p></CardText>
                    <CardText><p>Phòng ban: {staff.department.name ? staff.department.name : staff.department}</p></CardText>
                </CardBody>
                </Link>
            </Card>
        </div>
    );
}
class StaffList extends Component{
    constructor(props){
        super(props);
        this.state={
            doB: "",
            startDate: "",
            touched: {doB: false,startDate: false},
            isAddModalOpen: false,
            
            isSortModalOpen: false,
            sortAToZ: true,

            isSearchModalOpen: false,
            nameSearch: "",
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleBlur = this.handleBlur.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);

        this.toggleAddModal= this.toggleAddModal.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        
        this.toggleSortModal= this.toggleSortModal.bind(this);
        this.toggleSort=this.toggleSort.bind(this)

        this.toggleSearchModal= this.toggleSearchModal.bind(this);
        this.searchName=this.searchName.bind(this); 
    }
    
    //ADD FUNCTION//
    toggleAddModal() {this.setState({isAddModalOpen: !this.state.isAddModalOpen})}
    handleBlur = (field) => (evt) => {
        this.setState({touched: { ...this.state.touched, [field]: true }});
    };
    
    handleInputChange(event) {
        const value = event.target.value;
        const name = event.target.name;
        this.setState({[name]: value});
    }
    validate(doB, startDate) {
        const errors = {doB: "",startDate: ""};
    
        if (this.state.touched.doB && doB==="") 
            errors.doB = "Vui lòng nhập ngày sinh. ";

        if (this.state.touched.startDate && startDate==="")
          errors.startDate = "Vui lòng nhập ngày vào công ty";
        if (startDate < doB)
            errors.startDate = "Ngày vào công ty phải lớn hơn ngày sinh!"
    
        return errors;
    }
    //Them nhan vien vao StaffList
    handleSubmit (value) {
        const x = {
            name: value.name,
            doB: this.state.doB,
            salaryScale: value.salaryScale,
            startDate: this.state.startDate,
            department: value.department,
            annualLeave: value.annualLeave,
            overTime: value.overTime,
            image: "/assets/images/alberto.png"
        };
        
        if (!this.state.doB || !this.state.startDate)
            this.setState({touched: { doB: true, startDate: true } });
        else this.props.addStaff(x);
        
    };
    //SORT FUNCTION//
    toggleSortModal() {this.setState({
        isSortModalOpen: !this.state.isSortModalOpen
        });
    };
    toggleSort(kind){this.setState({
        sortAToZ:!kind,
        isSortModalOpen: !this.state.isSortModalOpen
        });
    };
    //SEARCH FUNCTION//
    toggleSearchModal() {this.setState({
        isSearchModalOpen: !this.state.isSearchModalOpen
        });
    };
    searchName(event) {
        event.preventDefault();
        const keyword = event.target.keyword.value;
        this.setState({ nameSearch: keyword});
        this.toggleSearchModal();
    }

    render(){
        const errors = this.validate(this.state.doB, this.state.startDate);

        const displaystaff=this.props.staffs
            .sort((a,b)=>
                this.state.sortAToZ ? a.id - b.id : b.id - a.id
            )
            .filter((x)=>{
                if (this.state.nameSearch===""){return (x)}
                else if(x.name.toLowerCase().includes(this.state.nameSearch.toLowerCase())){return(x)}
                else{return 0}
            })
            .map((x) => {
                return(<RenderStaff staff={x} />)
            });
        return(
            <div className="container-fluid">
                <div className='row'>
                    <Breadcrumb>
                        <BreadcrumbItem><Link to='/home'>Trang chủ</Link></BreadcrumbItem>
                        <BreadcrumbItem active>Nhân viên</BreadcrumbItem>
                    </Breadcrumb>
                    <div id="menubar" className='container-fluid'>
                        <div className="floatleft"><h3><i class="fa fa-address-book-o" aria-hidden="true"></i> Danh sách nhân viên</h3>
                        </div>
                        <div className="floatright mx-2 sort">
                            <Button outline onClick={this.toggleSearchModal}>
                            <strong><span class="glyphicon glyphicon-search"></span>{` Search `}</strong>
                            </Button>
                        </div>
                        <div className="floatright mx-2 sort">
                            <strong><i class="fa fa-sort fa-lg" aria-hidden="true"></i>{` Sort`}</strong>
                            <select  id="sort"  onChange={()=>this.toggleSort(this.state.sortAToZ)}>
                                <option>Mã nhân viên tăng dần</option>
                                <option>Mã nhân viên giảm dần</option>
                            </select>
                        </div>
                        <div className="floatright m-1 sort">
                            <Button outline onClick={this.toggleAddModal}>
                            <span className="fa fa-plus fa-lg"></span> Add
                            </Button>
                        </div>
                    </div>
                </div>
                <div className="row">
                    {displaystaff}
                </div>
                <Modal isOpen={this.state.isSearchModalOpen} toggle={this.toggleSearchModal} >
                    <ModalHeader toggle={this.toggleSearchModal}><strong>TÌM KIẾM NHÂN VIÊN</strong></ModalHeader>
                    <ModalBody>
                        <Form onSubmit={this.searchName}>
                            <FormGroup row>
                                <Label htmlFor="search" md={2}>Họ tên nhân viên</Label>
                                <Col md={10}>
                                    <Input type="text" id="search" name="keyword" placeholder="Họ tên nhân viên"/>
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Col md={{ size: 10, offset: 2 }}>
                                <Button type="submit" className="btn btn-success btn-lg">Bắt đầu tìm</Button>
                                </Col>
                            </FormGroup>
                        </Form>
                    </ModalBody>
                </Modal>

                <Modal isOpen={this.state.isAddModalOpen} toggle={this.toggleAddModal} >
                    <ModalHeader toggle={this.toggleAddModal}><strong>THÊM NHÂN VIÊN</strong></ModalHeader>
                    <ModalBody>
                        <LocalForm onSubmit={(value)=>this.handleSubmit(value)}>
                            <Row className="form-group">
                                <Label htmlFor="name" md={2}>Họ tên</Label>
                                <Col md={10}>
                                    <Control.text model=".name" id="name" name="name" className="form-control"
                                        validators={{required,minLength:minLength(3),maxLength:maxLength(30)}}
                                    />
                                    <Errors model=".name" className="text-danger" show="touched"
                                        messages={{
                                            required: "Vui lòng nhập họ tên. ",
                                            minLength: "Tối thiểu 3 kí tự! ",
                                            maxLength: "Tối đa 30 kí tự! "
                                        }}
                                    />
                                </Col>
                            </Row>
                            <Row className="form-group">
                                <Label htmlFor="doB" md={2}>Ngày sinh</Label>
                                <Col md={10}>
                                    <Input type="date" name="doB" id="doB"
                                        valid={errors.doB === ""}
                                        invalid={errors.doB !== ""}
                                        onBlur={this.handleBlur("doB")}
                                        onChange={this.handleInputChange}
                                    />
                                    <FormFeedback>{errors.doB}</FormFeedback>
                                </Col>
                            </Row>
                            <Row className="form-group">
                                <Label htmlFor="salaryScale" md={2}>Hệ số lương</Label>
                                <Col md={10}>
                                    <Control.text model=".salaryScale" id="salaryScale" name="salaryScale" className="form-control"
                                        validators={{required,isNumber,minNum:minNum(1)}}
                                    />
                                    <Errors model=".salaryScale" className="text-danger" show="touched"
                                        messages={{
                                            required: "Vui lòng nhập hệ số lương. ",
                                            isNumber: "Phải là số dương! ",
                                            minNum: "Tối thiểu là 1.0! "
                                        }}
                                    />
                                </Col>
                            </Row>
                            <Row className="form-group">
                                <Label htmlFor="startDate" md={2}>Ngày vào công ty</Label>
                                <Col md={10}>
                                    <Input type="date" name="startDate" id="startDate"
                                        valid={errors.startDate === ""}
                                        invalid={errors.startDate !== ""}
                                        onBlur={this.handleBlur("startDate")}
                                        onChange={this.handleInputChange}
                                    />
                                    <FormFeedback>{errors.startDate}</FormFeedback>
                                </Col>
                            </Row>
                            <Row className="form-group">
                                <Label htmlFor="department" md={2}>Phòng ban</Label>
                                <Col md={10}>
                                    <Control.select model=".department" id="department" name="department" className="form-control"
                                        defaultValue="Sale" 
                                    >
                                        <option selected>Sale</option>
                                        <option>HR</option>
                                        <option>Marketing</option>
                                        <option>IT</option>
                                        <option>Finance</option>
                                    </Control.select>
                                </Col>
                            </Row>
                            <Row className="form-group">
                                <Label htmlFor="annualLeave" md={2}>Số ngày nghỉ còn lại</Label>
                                <Col md={10}>
                                    <Control.text model=".annualLeave" id="annualLeave" name="annualLeave" className="form-control"
                                        validators={{required,isNumber,minNum:minNum(0)}}
                                    />
                                    <Errors model=".annualLeave" className="text-danger" show="touched"
                                        messages={{
                                            required: "Vui lòng nhập số ngày nghỉ còn lại. ",
                                            isNumber: "Phải là số dương! ",
                                            minNum: "Tối thiểu là 0! "
                                        }}
                                    />
                                </Col>
                            </Row>
                            <Row className="form-group">
                                <Label htmlFor="overTime" md={2}>Số giờ đã làm thêm</Label>
                                <Col md={10}>
                                    <Control.text model=".overTime" id="overTime" name="overTime" className="form-control"
                                        validators={{required,isNumber,minNum:minNum(0)}}
                                    />
                                    <Errors model=".overTime" className="text-danger" show="touched"
                                        messages={{
                                            required: "Vui lòng nhập số giờ đã làm thêm. ",
                                            isNumber: "Phải là số dương! ",
                                            minNum: "Tối thiểu là 0! "
                                        }}
                                    />
                                </Col>
                            </Row>
                            <Row className="form-group">
                                <Col md={{ size: 10, offset: 2 }}>
                                    <Button type="submit" className="btn btn-success btn-lg">Thêm</Button>
                                </Col>
                            </Row>
                        </LocalForm>
                    </ModalBody>
                </Modal>
            </div>
        );
    }

}   
export default StaffList