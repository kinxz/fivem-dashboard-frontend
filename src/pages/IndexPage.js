import React, { useState, useEffect } from 'react'
import axios from 'axios'
import config from '../config'
import Cookies from 'js-cookie'

const IndexPage = (props) => {
  useEffect(() => {
    if (!Cookies.get('authtoken')) {
      window.location = '/login'
      return
    }
    window.location = '/dashboard'
  })

  return <></>
}

export default IndexPage
