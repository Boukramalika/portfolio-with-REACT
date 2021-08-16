import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Login from './login/Login'
import Signup from './Signup/Signup'
import Welcome from './Welcome/Welcome'
import Landing from './Landing/Landing'
import ErrorPage from './ErrorPage/ErrorPage'
import("./LoginPage.css")
const LoginPage = () => {
    return (
        <Router>
                <Switch>
                    <Route exact path='/' component={Landing} />
                    <Route path='/welcome' component={Welcome} />
                    <Route path='/signup' component={Signup} />
                    <Route path='/login' component={Login} />
                    <Route  component={ErrorPage} />
                </Switch>
        </Router>
    )
}
export default LoginPage