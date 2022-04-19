import React, { Component } from "react";
import {Card, CardImg, CardTitle,CardBody,CardText, Breadcrumb, BreadcrumbItem,  Button, Modal, ModalHeader, ModalBody, Col, Label, Input, Form, FormGroup, FormFeedback} from 'reactstrap';
import {Link} from 'react-router-dom';


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
            name:"",
            doB: "",
            salaryScale: "",
            startDate: "",
            department: "Sale",
            annualLeave: "",
            overTime: "",
            image: "/assets/images/alberto.png",
            touched: {name: false,doB: false,salaryScale: false,startDate:false,department: false, annualLeave: false,      overTime: false},

            isAddModalOpen: false,
            
            isSortModalOpen: false,
            sortAToZ: true,

            isSearchModalOpen: false,
            nameSearch: "",
        }
        this.toggleAddModal= this.toggleAddModal.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleBlur = this.handleBlur.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
        
        this.toggleSearchModal= this.toggleSearchModal.bind(this);
        this.searchName=this.searchName.bind(this);
        
        this.toggleSortModal= this.toggleSortModal.bind(this);
        this.toggleSort=this.toggleSort.bind(this)
    }
    
    //ADD FUNCTION//
    toggleAddModal() {this.setState({isAddModalOpen: !this.state.isAddModalOpen})}
    //Validate form
    handleBlur = (field) => (event) => {
        this.setState({touched: { ...this.state.touched, [field]: true }});
    };
    handleInputChange(event){
        const value = event.target.value;
        const name = event.target.name;
        this.setState({[name]: value});
    }
    validate(name,doB,salaryScale,startDate,department,annualLeave,overTime) {
        const errors = {name: "",doB: "",salaryScale: "",startDate: "",department: "",annualLeave: "",overTime: ""};
        if (this.state.touched.name && name.length<2)
            errors.name = "Vui lòng nhập họ tên tối thiểu 3 kí tự";
        if (this.state.touched.name && name.length > 30)
            errors.name = "Vui lòng nhập họ tên tối đa 30 kí tự";

        if (this.state.touched.doB && doB==="") 
            errors.doB = "Vui lòng nhập ngày sinh";
            
        const reg = /^\d*(\.\d+)?$/;
        if (this.state.touched.salaryScale && !reg.test(salaryScale))
            errors.salaryScale = "Vui lòng nhập hệ số lương là số";
        if (this.state.touched.salaryScale && salaryScale<1)
            errors.salaryScale = "Hệ số lương tối thiểu là 1!!!";

        if (this.state.touched.startDate && startDate==="") 
            errors.startDate = "Vui lòng nhập ngày vào công ty";
        if (startDate<doB)
            errors.startDate = "Ngày vào công ty nhỏ hơn ngày sinh!!!";

        if (this.state.touched.annualLeave && annualLeave==="")
            errors.annualLeave = "Vui lòng nhập số ngày nghỉ còn lại tối thiểu là 0";
        if (this.state.touched.annualLeave && !reg.test(annualLeave))
            errors.annualLeave = "Số ngày nghỉ còn lại là số dương!!!";

        if (this.state.touched.overTime && overTime==="")
            errors.overTime = "Vui lòng nhập số giờ đã làm thêm tối thiểu là 0";
        if (this.state.touched.overTime && !reg.test(overTime))
            errors.overTime = "Số giờ đã làm thêm là số dương!!!";
        return errors;
    }
    //Them nhan vien vao StaffList
    handleSubmit (event) {
        event.preventDefault();
        const x = {name: this.state.name,doB: this.state.doB,salaryScale: this.state.salaryScale,startDate: this.state.startDate,department: this.state.department,annualLeave: this.state.annualLeave,overTime: this.state.overTime,image: this.state.image};
        this.props.addStaff(x);
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
        const errors = this.validate(this.state.name,this.state.doB,this.state.salaryScale,this.state.startDate,this.state.department,this.state.annualLeave,this.state.overTime);
      
        
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
                        <Form onSubmit={this.handleSubmit}>
                        <FormGroup row>
                            <Label htmlFor="name" md={2}>Tên</Label>
                            <Col md={10}>
                            <Input type="text" id="name" name="name"
                                placeholder="Họ tên"
                                
                                valid={errors.name === ""}
                                invalid={errors.name !== ""}
                                onBlur={this.handleBlur("name")}
                                onChange={this.handleInputChange}
                            />
                            <FormFeedback>{errors.name}</FormFeedback>
                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Label htmlFor="doB" md={2}>Ngày sinh</Label>
                            <Col md={10}>
                            <Input type="date" id="doB" name="doB"
                                
                                valid={errors.doB === ""}
                                invalid={errors.doB !== ""}
                                onBlur={this.handleBlur("doB")}
                                onChange={this.handleInputChange}
                            />
                            <FormFeedback>{errors.doB}</FormFeedback>
                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Label htmlFor="salaryScale" md={2}>Hệ số lương</Label>
                            <Col md={10}>
                            <Input type="text" id="salaryScale" name="salaryScale" 
                                
                                valid={errors.salaryScale === ""}
                                invalid={errors.salaryScale !== ""}
                                onBlur={this.handleBlur("salaryScale")}
                                onChange={this.handleInputChange}
                            />
                            <FormFeedback>{errors.salaryScale}</FormFeedback>
                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Label htmlFor="startDate" md={2}>Ngày vào công ty</Label>
                            <Col md={10}>
                            <Input type="date" id="startDate" name="startDate"
                                
                                valid={errors.startDate === ""}
                                invalid={errors.startDate !== ""}
                                onBlur={this.handleBlur("startDate")}
                                onChange={this.handleInputChange}
                            />
                            <FormFeedback>{errors.startDate}</FormFeedback>
                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Label htmlFor="department" md={2}>Phòng ban</Label>
                            <Col md={10}>
                            <Input type="select" id="department" name="department"
                               
                                onChange={this.handleInputChange}
                            >
                                <option selected>Sale</option>
                                <option>HR</option>
                                <option>Marketing</option>
                                <option>IT</option>
                                <option>Finance</option>
                            </Input>
                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Label htmlFor="annualLeave" md={2}>Số ngày nghỉ còn lại</Label>
                            <Col md={10}>
                            <Input type="text" id="annualLeave" name="annualLeave"
                              
                                valid={errors.annualLeave === ""}
                                invalid={errors.annualLeave !== ""}
                                onBlur={this.handleBlur("annualLeave")}
                                onChange={this.handleInputChange}
                            />
                            <FormFeedback>{errors.annualLeave}</FormFeedback>
                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Label htmlFor="overTime" md={2}>Số giờ đã làm thêm</Label>
                            <Col md={10}>
                            <Input type="text" id="overTime" name="overTime" 
                                
                                valid={errors.overTime === ""}
                                invalid={errors.overTime !== ""}
                                onBlur={this.handleBlur("overTime")}
                                onChange={this.handleInputChange}
                            />
                            <FormFeedback>{errors.overTime}</FormFeedback>
                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Col md={{ size: 10, offset: 2 }}>
                            <Button type="submit" className="btn btn-success btn-lg">Thêm</Button>
                            </Col>
                        </FormGroup>
                        </Form>
                    </ModalBody>
                </Modal>
            </div>
        );
    }

}   
export default StaffList