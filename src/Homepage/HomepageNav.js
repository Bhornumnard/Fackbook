import React, { Component } from 'react'
import { Col, Row } from 'antd'
import '../Style/Homepage/Navbar.css'
import icon from '../img/Facebook_Home.png'
import { SearchOutlined } from '@ant-design/icons';



export default class HomepageNav extends Component {
    render() {
        return (
            <Row className="Nav" justify="center">
                <Col>
                    <Row type='flex' align="middle" className="NavCenter">
                        <Col className="iconBlock"><img className="facebook" src={icon} /></Col>
                        <Col className="searchBlock">
                            <Row className="search"><input type="text" placeholder="ค้นหา" /><button><SearchOutlined className="searchIcon" /></button></Row>
                        </Col>
                        <Col className="space"></Col>
                        <Col className="RightIcon">
                            <Row className="RightIcon" align="middle">
                                <Col className="unit unit1">
                                    <a href="https://www.facebook.com/bhornumnard.wanasrisun">
                                        <img class="_2qgu _7ql _1m6h img" src="https://scontent.fbkk5-3.fna.fbcdn.net/v/t1.0-1/cp0/p40x40/49948478_2111075422265261_7329281039728115712_n.jpg?_nc_cat=111&amp;_nc_sid=dbb9e7&amp;_nc_eui2=AeHCoh2GFzbnzHKUBBg4lxR_PwZRMDhmrYOaJkzixKGXTkkMVK1xyK1_1PW4iYdAjd-krnn4zWVk_o4RjJ7_NXqMEak5TIvQ9056N7oKD9IChA&amp;_nc_ohc=-lLEoKUeQdwAX8E-q0Y&amp;_nc_ht=scontent.fbkk5-3.fna&amp;oh=29afb8a810538725ea984ad1426a6e50&amp;oe=5EAAC113" alt="" />
                                            พรอำนาจ
                                            </a>
                                </Col><div className="line"></div>
                                <Col className="unit"><a href="#">หน้าหลัก </a></Col><div className="line"></div>
                                <Col className="unit"><a href="#">สร้าง</a></Col><div className="line"></div>
                                <Col className="unit firstUnit" id="unitIcon"><i class="fas fa-user-friends"></i></Col>
                                <Col className="unit" id="unitIcon"><i class="fab fa-facebook-messenger"></i></Col>
                                <Col className="unit" id="unitIcon"><i class="fas fa-bell"></i></Col>
                                <div className="line"></div>
                                <Col className="unit" id="unitIcon"><i class="fas fa-question-circle"></i></Col>
                                <Col className="unit" id="unitIcon"><i class="fas fa-caret-down"></i></Col>
                            </Row>
                        </Col>
                    </Row>
                </Col>
            </Row>
        )
    }
}
