import React, { useState } from 'react'
import '../components/Nav.css'



function Nav() {
  const [nav,setNav] = useState(false)

  const changBG =()=>{
    if(window.scrollY >= 600){
        setNav(true)      
    }else{
        setNav(false)        
    }
  }

  window.addEventListener('scroll',changBG)
  
  return (
    <nav className={"navbar navbar-expand-lg bg-body-tertiary"+(nav ?' nav':' ')} >
    <div className="container">
        <a className="navbar-brand border-brand" href="#">Napamonton</a>
        <button className="navbar-toggler bg-white" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon bg-white"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav mx-auto">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#home">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#about">About</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#porfolio">Porfolio</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#education">Education</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#contact">Contact</a>
              </li>
          </ul>        
        </div>
        
    </div>
    </nav>
  )
}

export default Nav