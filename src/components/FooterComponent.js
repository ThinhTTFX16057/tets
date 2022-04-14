import React from "react";

function Footer(props){
    return(
        <div className="footer">
            <div className="container">
                    <div className="col-4 offset-1 col-sm-2">
                        <h4>Liên kết</h4>
                        <ul className="list-unstyled">
                            <li><a href="/home">Home</a></li>
                            <li><a href="/staff">Nhân vien</a></li>
                            <li><a href="/department">Phòng ban</a></li>
                            <li><a href="/salary">Bảng lương</a></li>
                        </ul>
                    </div>
                    <div className="col-7 col-sm-5">
                        <h4>Địa chỉ</h4>
                        <address>
                          <i className="fa fa-address-card fa-lg"></i>: 123 Hai Bà Trưng, Phường 1, Quận 1, TP.HCM<br />
                          <i className="fa fa-phone fa-lg"></i>: +84 1234 5678<br />
                          <i className="fa fa-fax fa-lg"></i>: +84 8765 4321<br />
                          <i className="fa fa-envelope fa-lg"></i>: <a href="mailto:thinhttfx16057@funix.edu.vn">
                          thinhttfx16057@funix.edu.vn</a>
                        </address>
                    </div>
                    <div className="col-12 col-sm-4 align-self-center">
                        <div className="row justify-content-center">    
                            <h4>Đăng nhập</h4>
                        </div>
                        <ul className="text-center list-unstyled navbar">
                            <li><a className="btn btn-social-icon btn-google" href="http://google.com/+"><i className="fa fa-google-plus"></i></a></li>
                            <li><a className="btn btn-social-icon btn-facebook" href="http://www.facebook.com/profile.php?id="><i className="fa fa-facebook"></i></a></li>
                            <li><a className="btn btn-social-icon btn-linkedin" href="http://www.linkedin.com/in/"><i className="fa fa-linkedin"></i></a></li>
                            <li><a className="btn btn-social-icon btn-twitter" href="http://twitter.com/"><i className="fa fa-twitter"></i></a></li>
                            <li><a className="btn btn-social-icon btn-google" href="http://youtube.com/"><i className="fa fa-youtube"></i></a></li>
                        </ul>
                        <div className="row justify-content-center">             
                            <p><strong>© Copyright 2018 Ristorante Con Fusion</strong></p>
                        </div>
                    </div>
                </div>
                
            
        </div>
        )
}
export default Footer