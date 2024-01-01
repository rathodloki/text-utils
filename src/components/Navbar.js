import React from 'react'
import PropTypes from 'prop-types'
import { Outlet, Link } from 'react-router-dom'
export default function Navbar(props) {
  return (
    <nav className={`navbar navbar-expand-lg navbar-${props.mode==='success'?'dark':props.mode} bg-${props.mode} }`}>
  <div className="container-fluid">
    <a className="navbar-brand" href="/">{props.title}</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/about">{props.aboutText}</Link>
        </li>
      </ul>
      <Outlet />
      {/* <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-primary" type="submit">Search</button>
      </form> */}
      {/* <div className={`form-check form-switch text-${props.mode==='dark'?'light':'dark'}`}>
          <input className="form-check-input" onClick={props.toggleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
          <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable {props.mode} Mode</label>
      </div> */}
      <label className={`"form-check-label bg-light"`} htmlFor="flexSwitchCheckDefault">Choose Theme</label>
      <div className="btn-toolbar mx-3" role="toolbar" aria-label="Toolbar with button groups">
          <div className="btn-group me-2" role="group" aria-label="First group">
              <button type="button" onClick={() => props.toggleMode("light")} className="btn btn-primary  " >1</button>
              <button type="button" onClick={() => props.toggleMode("dark")} className="btn btn-dark">2</button>
              <button type="button" onClick={() => props.toggleMode("warning")} className="btn btn-warning">3</button>
              <button type="button" onClick={() => props.toggleMode("success")} className="btn btn-success">4</button>              
          </div>
      </div>

    </div>
  </div>
</nav>
  )
}

Navbar.propTypes = {
    title: PropTypes.string.isRequired,
    aboutText: PropTypes.string.isRequired
}

Navbar.defaultProps = {
    title: "Set Title here",
    aboutText: "About"
}