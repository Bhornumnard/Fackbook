import React, { Component } from 'react'
import Nav from './HomepageNav'
import Body from './HomepageBody'
import {Col, Row} from 'antd'

export default class Homepage extends Component {
    render() {
        return ( 
                <Row>
                <Col span={24}><Nav /></Col>
                <Col span={24}><Body /></Col>
                </Row>
           
                
            
        )
    }
}
