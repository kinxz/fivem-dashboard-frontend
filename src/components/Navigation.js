import React from 'react'
import { Link } from 'react-router-dom'
import { matchPath } from 'react-router'

const Navigation = (props) => {
  const items = props.items || []

  return (
    <ul className="nav">
      {items.map((item, index) => {
        const isActiveItem = !!matchPath(window.location.pathname, {
          path: item.path,
          exact: true,
        })
        return (
          <li
            className={`nav-item ${isActiveItem ? 'active' : ''}`}
            key={index}
          >
            <Link to={item.path}>{item.title}</Link>
          </li>
        )
      })}
    </ul>
  )
}

export default Navigation
