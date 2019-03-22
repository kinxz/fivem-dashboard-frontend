import React, { useState, useEffect } from 'react'
import axios from 'axios'
import config from '../config'
import Cookies from 'js-cookie'

const LoginPage = (props) => {
  var defaultState = {
    username: '',
    password: '',
  }

  const centerStyle = {
    marginTop: '50vh',
    transform: 'translateY(-70%)',
  }

  const [formState, setFormState] = useState(defaultState)
  const [requesting, setRequesting] = useState(false)
  const [error, setError] = useState(false)
  const [btnDisabled, setBtnDisabled] = useState(true)

  useEffect(
    () => {
      if (formState.username.length < 3 || formState.password.length < 3) {
        setBtnDisabled(true)
        return
      }
      setBtnDisabled(false)
    },
    [formState]
  )

  function handleInput(e) {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    })
  }

  function login() {
    setRequesting(true)
    axios
      .post(`${config.apiurl}/auth`, {
        username: formState.username,
        password: formState.password,
      })
      .then(function(response) {
        Cookies.set('authtoken', response.data.authtoken)
        window.location = '/dashboard'
      })
      .catch(function(error, res) {
        setError('incorrect username or password.')
      })
      .then(() => {
        setRequesting(false)
      })
  }

  return (
    <div className="container grid-sm" style={centerStyle}>
      <div className="panel">
        <div className="panel-header">
          <div className="panel-title">
            <h4>Login</h4>
          </div>
        </div>
        <div className="panel-body">
          <form>
            <div className="form-group">
              <label className="form-label">Name</label>
              <input
                className="form-input"
                type="text"
                name="username"
                placeholder="Username"
                value={formState.username}
                onChange={(e) => handleInput(e)}
              />
            </div>
            <div className="form-group">
              <label className="form-label">Password</label>
              <input
                className="form-input"
                type="password"
                name="password"
                placeholder="Password"
                value={formState.password}
                onChange={(e) => handleInput(e)}
              />
            </div>
          </form>
        </div>
        <div className="panel-footer">
          {error && <div className="toast toast-error mt-2 mb-2">{error}</div>}
          <button
            className={`btn btn-primary mt-2 mb-2 ${
              requesting ? ' loading' : ''
            }`}
            onClick={login}
            disabled={btnDisabled}
          >
            Login
          </button>
        </div>
      </div>
    </div>
  )
}

export default LoginPage
