import React from 'react';
import { Route, Switch } from 'react-router-dom'
// import { connect } from 'react-redux'
import Login from './views/pages/login'
import SchoolManage from './views/pages/schoolManage'

const App = () => (
    <Switch>
        <Route exact path='/login' component={Login}></Route>
        <Route exact path='/school-manage' component={SchoolManage}></Route>
    </Switch>
)

export default App
