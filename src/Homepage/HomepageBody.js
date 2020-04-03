import React, { Component } from 'react'
import Left from './LeftBody'
import Center from './CenterBody'
import Right from './RightBody'
import { Col, Row } from 'antd'
import '../Style/Homepage/Body.css'


export default class HomepageBody extends Component {
    render() {
        return (
            <div className="fullBody">
                <Row id="ContentBody">
                    <Col flex={2}><Left /></Col>
                    <Col flex={18}><Center /></Col>
                    <Col flex={10}><Right /></Col>
                </Row>
            </div>
        )
    }
}
