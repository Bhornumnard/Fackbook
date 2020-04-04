import React, { Component } from 'react'
import '../Style/Homepage/LeftBody.css'
import { Row, Col } from 'antd'

export default class LeftBody extends Component {
    state = {

    }
    Show = () => {
        return
    }
    render() {
        return (
            <Row className="Left">
                <Col className="unit" span={24}>
                    <a href="#">
                        <span><img alt="" src="https://scontent.fbkk5-3.fna.fbcdn.net/v/t1.0-1/cp0/p24x24/49948478_2111075422265261_7329281039728115712_n.jpg?_nc_cat=111&amp;_nc_sid=dbb9e7&amp;_nc_eui2=AeHCoh2GFzbnzHKUBBg4lxR_PwZRMDhmrYOaJkzixKGXTkkMVK1xyK1_1PW4iYdAjd-krnn4zWVk_o4RjJ7_NXqMEak5TIvQ9056N7oKD9IChA&amp;_nc_ohc=-lLEoKUeQdwAX8E-q0Y&amp;_nc_ht=scontent.fbkk5-3.fna&amp;oh=7713b95bee360bac20c4ea4a2cc8ba56&amp;oe=5EAAB968" /></span>
                            พรอำนาจ วนาศรีสันต์
                            </a>
                    <i class="fas fa-ellipsis-h" onClick={() => alert("click already")}></i>
                </Col>
                <Col span={24}>
                    <ul className="first">
                        <li>
                            <a href="#">

                                <i class="img sp_SZK6JSuantY sx_9ccd4c"></i>
                            ฟีดข่าว
                            </a>
                            <i class="fas fa-ellipsis-h" onClick={() => alert("click already")}></i>
                        </li>
                        <li>
                            <a href="#">
                                <i class="img sp_SZK6JSuantY sx_7ceacd"></i>
                            Messenger
                            </a>
                            <i class="fas fa-ellipsis-h" onClick={() => alert("click already")}></i>
                        </li>
                        <li>
                            <a href="#">
                                <i class="img sp_SZK6JSuantY sx_1cb3fa"></i>
                            Watch
                            </a>
                            <i class="fas fa-ellipsis-h" onClick={() => alert("click already")}></i>
                        </li>

                        <li>
                            <a href="#">
                                <i class="img sp_aP-6mjouz3R sx_4538c6"></i>
                            Marketplace
                            </a>
                            <i class="fas fa-ellipsis-h" onClick={() => alert("click already")}></i>
                        </li>
                    </ul>
                </Col>
                <Col className="unit" span={24}></Col>
                <Col className="unit"></Col>
            </Row>
        )
    }
}
