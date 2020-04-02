import React, { Component } from 'react'
import { Row, Col } from 'antd'
import '../Style/sign_up/Body.css'

export default class BodySignUp extends Component {
    state = {
        year: [],
        month: [],
        day: [],
    }

    componentDidMount() {
        let arrYear = []
        for (let i = 2020; i >= 1905; i--) {
            arrYear.push(i)
        }
        let arrDay = []
        for (let i = 2; i <= 31; i++) {
            arrDay.push(i)
        }
        let arrMonth = ["ม.ค.", "ก.พ.", "มี.ค.", "เม.ย.", "พ.ค.", "มิ.ย.", "ก.ค.", "ส.ค.", "ก.ย.", "ต.ค.", "พ.ย.", "ธ.ค."]
        this.setState({ year: arrYear, month: arrMonth, day: arrDay })
    }
    render() {


        return (
            <div className="Body">
                <Col span={20} className="Body" justify="center">
                    <Row>
                        <Col span={1}></Col>
                        <Col span={13} className="headBlock">
                            <Row className="Head">การเข้าสู่ระบบล่าสุด</Row>
                            <Row className="topic">คลิกรูปภาพหรือเพิ่มบัญชี</Row>
                            <Row>
                                <div className="picBlock">
                                    <div className="pic">
                                        <img className="img" src="https://scontent.fbkk5-3.fna.fbcdn.net/v/t1.0-1/49948478_2111075422265261_7329281039728115712_n.jpg?_nc_cat=111&amp;_nc_sid=dbb9e7&amp;_nc_oc=AQnRJLxNXbbRclYGbxDTRScmaKELz9TAkOoSfYwnYRWgR4mO2EgS5UisbqQTeivJhuc&amp;_nc_ht=scontent.fbkk5-3.fna&amp;oh=2cec0e8f179c4a4ff1b6a4769cd6e14a&amp;oe=5EAB3E9A" alt="" />
                                        <div className="name">พรอำนาจ</div>
                                    </div>
                                </div>

                            </Row>
                        </Col>
                        <Col span={10} className="headBlock">
                            <Row className="Head">สร้างบัญชีใหม่</Row>
                            <Row className="topic">ง่ายและเร็ว</Row>
                            <Row>
                                <Col>
                                    <Row>
                                        <Col>
                                            <input type="text" className="input" name="first name" label="ชื่อ" placeholder="ชื่อ" />
                                        </Col>
                                        <Col>
                                            <input type="text" className="input" name="first name" label="ชื่อ" placeholder="นามสกุล" />
                                        </Col>
                                    </Row>
                                    <Row><input type="text" className="inputLong" name="first name" label="ชื่อ" placeholder="หมายเลขโทรศัพท์มือถือหรืออีเมล์" /></Row>
                                    <Row><input type="text" className="inputLong" name="first name" label="ชื่อ" placeholder="รหัสผ่านใหม่" /></Row>
                                    <Row>
                                        <Col>
                                            <Row className="headForm">วันเกิด</Row>
                                            <Row>
                                                <Col>
                                                    <select>
                                                        <option value="0">วัน</option>
                                                        <option value="1" selected="1">1</option>
                                                        {this.state.day.map((item => <option value={item}>{item}</option>))}

                                                    </select>
                                                </Col>
                                                <Col>
                                                    <select>
                                                        <option value="0">เดือน</option>
                                                        {this.state.month.map((item, index) => <option value={index + 1}>{item}</option>)}

                                                    </select>
                                                </Col>
                                                <Col>
                                                    <select>

                                                        {this.state.year.map(item => item === 1995 ? <option value={item} selected={item}>{item}</option> : <option value={item}>{item}</option>)}
                                                    </select>
                                                </Col>
                                            </Row>
                                        </Col>
                                    </Row>
                                    <Row className="headForm">เพศ</Row>
                                    <span><input type="radio" /><label className="typeFont">หญิง</label></span>
                                    <span><input type="radio" /><label className="typeFont">ชาย</label></span>
                                    <span><input type="radio" /><label className="typeFont">กำหนดเอง</label></span>
                                    <p className="shortText">เมื่อคลิก สมัคร แสดงว่าคุณยินยอมตาม
                                    <a href="/legal/terms/update" id="terms-link" target="_blank" rel="nofollow"> ข้อกำหนด</a> 
                                    <a href="/about/privacy/update" id="privacy-link" target="_blank" rel="nofollow"> นโยบายข้อมูล </a> 
                                     และ <a href="/policies/cookies/" id="cookie-use-link" target="_blank" rel="nofollow">นโยบายคุกกี้ </a>
                                     ของเราแล้ว คุณอาจได้รับการแจ้งเตือนทาง SMS จากเราและสามารถเลือกไม่รับได้ทุกเมื่อ</p>
                                     <Row>
                                     <button type="submit" className="signUp" name="websubmit" id="u_0_17">สมัคร</button>
                                     </Row>
                                     <Row>
                                     <div id="reg_pages_msg" class="lastText">
                                         <a href="#" class="_8esh">สร้างเพจ </a> 
                                         สำหรับบุคคลมีชื่อเสียง วงดนตรี หรือธุรกิจ
                                         </div>
                                     </Row>
                                </Col>

                            </Row>
                        </Col>
                    </Row>
                </Col>
            </div>
        )
    }
}
