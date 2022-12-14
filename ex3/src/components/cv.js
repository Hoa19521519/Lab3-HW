import React from "react";
import "./cv.css";
import logo from "../assets/1.jpg";
import { BsCalendarCheck, BsPhone, BsGithub } from "react-icons/bs";
import { GoLocation } from "react-icons/go";
import { FiMail } from "react-icons/fi";
import { GiGamepad } from "react-icons/gi";
import { BiFootball } from "react-icons/bi";
import { FaGuitar } from "react-icons/fa";
import { TiPlane } from "react-icons/ti";

const cv = () => {
    return (
      
        <div className="bdy">
        <div className="container">
            <div className="top">
                <div className="imgbx">
                    <div className="box">
                        <img src={logo} class="hoa" alt=""/>
                    </div>
                </div>
                <div className="profile">
                    <h3>Phạm Khánh Hòa</h3>
                </div>
            </div>
            <div className="contentBox">
                <div className="leftSide">
                    <h3>Infomation</h3>
                    <ul>
                        <li>
                            <span className="icon"><ion-icon name="calendar-outline"></ion-icon></span>
                            <span className="text">13-08-2001</span>
                        </li>
                        <li>
                            <span className="icon"><ion-icon name="call-outline"></ion-icon></span>
                            <span className="text">0335668589</span>
                        </li>
                        <li>
                            <span className="icon"><ion-icon name="location-outline"></ion-icon></span>
                            <span className="text"></span>KTX khu A-ĐHQG HCM, Linh Trung, Thu Duc, Ho Chi Minh
                        </li>
                        <li>
                            <span className="icon"><ion-icon name="mail-outline"></ion-icon></span>
                            <span className="text">19521519@gm.uit.edu.vn</span>
                        </li>
                    </ul>
                    
                    <h3>Education</h3>
                    <ul className="education">
                        <li>
                            <h5>2019-2024</h5>
                            <h4>Student</h4>
                            <h6>University Of Information Technology</h6>
                        </li>
                    </ul>

                    <h3>Language</h3>
<ul className="language">
                        <li>
                            <span className="text">Vietnamese</span>
                            <span className="percent">
                          <div style="width: 100%"></div>
                            </span>
                        </li>
                        <li>
                            <span className="text">English</span>
                            <span className="percent">
                                <div style="width: 50%"></div>
                            </span>
                        </li>
                    </ul>               
                </div>
            </div>
        </div>
    </div>
    );
    };

    export default cv;