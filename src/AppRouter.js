import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import IndexPage from './pages/IndexPage'
import LoginPage from './pages/LoginPage'
import DashboardPage from './pages/DashboardPage'
import UsersPage from './pages/UsersPage'

function AppRouter() {
  return (
    <Router>
      <Route path="/" exact component={IndexPage} />
      <Route path="/login" exact component={LoginPage} />
      <Route path="/dashboard" exact component={DashboardPage} />
      <Route path="/dashboard/users" exact component={UsersPage} />
    </Router>
  )
}

export default AppRouter
