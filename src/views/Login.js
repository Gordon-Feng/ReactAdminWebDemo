import React from 'react'
import { Layout, Input, Form, Button, Divider, message } from 'antd'
import { connect } from 'react-redux'
import { triggerSpin } from '../redux/actions/spinning'
import '../styles/login.scss'
import { Storage, AdminLogin } from '../services'

const Login = (props) => {

    const handleSubmit = async(e) => {
        props.dispatch(triggerSpin())
        const result = await AdminLogin(e)
        props.dispatch(triggerSpin())
        if (result) {
            message.success(`你好 ${result.data.account.account}, 登录成功`)
            Storage.set('token', result.data.token)
            props.history.push('/')
        }
    }

    return (
        <Layout className='login animated fadeIn'>
            <div className='model'>
                <div className='login-form'>
                    <h4>您好 ！欢迎登陆 , 后台管理系统</h4>
                    <Divider/>
                    <Form onFinish={handleSubmit}>
                        <Form.Item name='account' rules={[{required: true, message: '账号不能为空!'}]}>
                            <Input placeholder='请输入账号'></Input>
                        </Form.Item>
                        <Form.Item name='password' rules={[{required: true, message: '密码不能为空!'}]}>
                            <Input type='password' placeholder='请输入密码'></Input>
                        </Form.Item>
                        <Form.Item>
                            <Button className='login-form-button' type="primary" htmlType="submit" loading={props.isSpinning}>登录</Button>
                        </Form.Item>
                    </Form>
                </div>
            </div>
        </Layout>
    )
}

// 在 redux 的 state 导出 当前组件需要的 部分 state 值 (并不建议将整个 redux state 导出)
// 导出后, 可在组件中的 props 中使用导出的值
const stateToProps = state => ({
    isSpinning: state.isSpinning
})

// 每次在组件中使用 redux 的 state 时, 都要 执行 stateToProps and dispatchToProps(可选)
export default connect(stateToProps)(Login)