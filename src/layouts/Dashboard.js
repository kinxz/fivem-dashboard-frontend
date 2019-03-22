import React, { useState, useEffect } from 'react'
import { matchPath } from 'react-router'

import Navigation from '../components/Navigation'

const DashboardLayout = (props) => {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    if (window.innerWidth < 960) {
      setIsMobile(true)
      return
    }
    setIsMobile(false)
  }, window.innerWidth)

  const sidebarStyle = {
    height: '100vh',
  }

  const items = [
    {
      title: 'Dashboard',
      path: '/dashboard',
    },
    {
      title: 'Users',
      path: '/dashboard/users',
    },
  ]

  const title = () => {
    var s = items.find((item) => {
      const isActiveItem = !!matchPath(window.location.pathname, {
        path: item.path,
        exact: true,
      })
      if (isActiveItem) {
        return item.title
      }
    })
    return s.title
  }

  console.log(title())

  return (
    <>
      <div
        className={`off-canvas ${isMobile ? '' : 'off-canvas-sidebar-show'}`}
      >
        <a
          className="off-canvas-toggle btn btn-primary btn-action"
          href="#sidebar-id"
        >
          <i className="icon icon-menu" />
        </a>

        <div
          id="sidebar-id"
          className="off-canvas-sidebar"
          style={sidebarStyle}
        >
          <Navigation items={items} />
        </div>

        <a className="off-canvas-overlay" href="#close" />

        <div
          className="off-canvas-content"
          style={{ padding: '.4rem 4rem .4rem 4rem' }}
        >
          <div className="container" style={{ marginTop: '40px' }}>
            <h3>{title()}</h3>
            {props.children}
          </div>
        </div>
      </div>
    </>
  )
}

export default DashboardLayout
