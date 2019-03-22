import React, { useState, useEffect } from 'react'
import Cookies from 'js-cookie'

import DashboardLayout from '../layouts/Dashboard'

const DashboardPage = (props) => {
  useEffect(() => {
    if (!Cookies.get('authtoken')) {
      window.location = '/'
    }
  })

  return <DashboardLayout>kek</DashboardLayout>
}

export default DashboardPage
