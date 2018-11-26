import React, { Component } from 'react';
import './Header.css'

class Header extends Component {

  render() {
  return (
      <ul className="menu">
        <h1 style={{marginBottom:'2%',color:"white"}}>High on Coding</h1>
        <li>Home</li>
        <li style={{fontWeight:'normal'}}>Categories</li>
      </ul>
    )
  }

}

export default Header
