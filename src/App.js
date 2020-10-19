import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'
import { Spin } from 'antd';
import { connect } from 'react-redux'
import Login from './views/Login'
import Index from './views/Index'
import './styles/App.scss'
import './styles/base.scss'
import 'animate.css'

const App = (props) => (
    <Spin spinning={props.isSpinning}>
        <BrowserRouter>
            <Switch>
                <Route path='/' exact render={() => <Redirect to='/school-manage' />}></Route>
                <Route exact path='/login' component={Login}></Route>
                <Route component={Index}></Route>
            </Switch>
        </BrowserRouter>
    </Spin>
)

const stateToProps = state => ({
    isSpinning: state.isSpinning
})

export default connect(stateToProps)(App)
