import React, { Component } from 'react'
import '../Style/sign_up/Navbar.css'
import { Row, Col } from 'antd'
import facebook from '../img/Facebook_icon_login.png'

export default class NavbarSignUp extends Component {
    render() {
        return (
            <Row type="flex" justify="center">
                <Col span={20}>
                    <Row className="NavBlock" type="flex" justify="space-between">
                        <Col><h1>
                            <a id="facebook_block" href="https://www.facebook.com/" title="ไปที่หน้าหลักของ Facebook">
                                <img src={facebook} id="facebook"/>
                                    <u>Facebook</u>
                            </a>
                            
                        </h1></Col>
                        <Col>
                            <table>
                                <tr>
                                    <th><label for="email">อีเมล์หรือโทรศัพท์ </label></th>
                                    <th><label for="pass">รหัสผ่าน</label></th>
                                </tr>
                                <tr>
                                    <td>
                                        <input type="email" id="email" name="email" className="inputType" />
                                    </td>
                                    <td >
                                        <input type="password" id="pass" name="pass" className="inputType" />
                                    </td>
                                    <td>
                                        <label className="loginButton" for="Button">
                                            <input id="Button" type="submit" value="เข้าสู่ระบบ"/>
                                        </label>
                                    </td>
                                </tr>
                                <tr>
                                    <td></td>
                                    <td id="forget">ลืมบัญชีใช่หรือไม่</td>
                                </tr>
                            </table>
                        </Col>
                    </Row>
                </Col>
            </Row>
        )
    }
}
