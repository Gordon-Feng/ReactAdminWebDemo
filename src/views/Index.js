import React from 'react'
import { Layout } from 'antd'
import { Route, Switch } from 'react-router-dom'
import '../styles/layout.scss'
import AsideMenu from '../views/components/Menu'
import SchoolManage from './pages/SchoolManage'
import { Storage } from '../services'

const logoImg = require('../assets/images/logo.png') // 引入图片, 似乎无法直接 <img src='../assets/images/logo.png' alt=''/>

const { Header, Sider, Content } = Layout;

const IndexLayout = (props) => {
    if (!Storage.get('token')) {
        props.history.push('/login')
    }

    return (
        <Layout className='app'>
            <Header className='header'>
                <img src={logoImg} alt=''/>
            </Header>
            <Layout style={{ marginLeft: '200px' }}>
                <Sider className='aside'>
                    <AsideMenu/>
                </Sider>
                <Content className='content'>
                    <Switch>
                        <Route key='/school-manage' path='/school-manage' exact component={SchoolManage}></Route>
                    </Switch>
                </Content>
            </Layout>
        </Layout>
    )
}

export default IndexLayout