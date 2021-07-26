import React from 'react'
export default function header() {
    return (
        <div>
<nav className="navbar navbar-expand-lg navbar-light bg-dark">
  <div className="container-fluid">
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="nav nav-pills">
        <li className="nav-item">
        <img src='/ab.gif' className="img-fluid" width={50} height={70}/>
        </li>
        <li className="nav-item">
        <a className="nav-link nav" style ={{color:'#fff'}} aria-current="page" href="/user/home">Home</a>
        </li>
        <li className="nav-item">
        <a className="nav-link nav" style ={{color:'#fff'}} aria-current="page" href="/user/about">About Us</a>
        </li>
        <li className="nav-item">
        <a className="nav-link nav" style ={{color:'#fff'}} aria-current="page" href="/user/komen">Komentar</a>
        </li>
        <li className="nav-item">
        <a className="nav-link nav" style ={{color:'#fff'}} aria-current="page" href="/">Log Out</a>
        </li>

      </ul>
    </div>
  </div>
</nav>

        </div>
    )}