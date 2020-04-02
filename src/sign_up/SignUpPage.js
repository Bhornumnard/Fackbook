import React, { Component } from 'react'
import {Layout} from 'antd'
import Nav from './NavbarSignUp'
import Body from './BodySignUp'
import FooterPage from './Footer'
import '../Style/sign_up/Navbar.css'
const { Header, Footer,Content } = Layout;

export default class SignUpPage extends Component {
    render() {
        return (
            <Layout className="layout">
            <Header><Nav /></Header>
            <Content><Body /></Content>
            <Footer><FooterPage /></Footer>
          </Layout>
        )
    }
}
