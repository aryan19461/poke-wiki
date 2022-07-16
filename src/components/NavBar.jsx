import React, { Component } from 'react'
import '../App.css'
export class NavBar extends Component {
  render() {
    return (
        <nav className="navbar bg-dark">
        <div className="container-flex">
          <a className="navbar-brand" href='/'>Search Your Pet</a>
          <form className="d-flex" role="search">
            <input className="form-control me-5" type="search" placeholder="Search" aria-label="Search"/>
            <button className="btn btn-success" type="submit">Search</button>
          </form>
        </div>
      </nav>
    )
  }
}

export default NavBar