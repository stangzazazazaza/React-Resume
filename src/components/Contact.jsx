import React from 'react'
import './Contact.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope,faPhone } from '@fortawesome/free-solid-svg-icons'
import { faFacebook,faGithub, faLine } from '@fortawesome/free-brands-svg-icons'


function Contact() {
  return (
    <div className="section-contact d-flex align-items-center" id='contact'>
        <h1>CONTACT</h1>
        <div className="row w-100 align-items-center z-index-2">
          <div className="col-md-4">
            <div className="logo text-center">
                NAPAMONTON
            </div>
          </div>
          <div className="col-md-4 text-center">
            <div className="content">
              <p><FontAwesomeIcon icon={faEnvelope}/> napamonton.norkhuntod@gmail.com</p>
              <p><FontAwesomeIcon icon={faPhone} /> 098-249-8727</p>
              <p><FontAwesomeIcon icon={faLine} /> 098-249-8727</p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="content">
                <a href=""><FontAwesomeIcon icon={faFacebook} /></a>
            </div>
            <div className="content">
                <a href="" className='text-main'><FontAwesomeIcon icon={faGithub} /></a>  
            </div>            
          </div>
        </div>
    </div>
  )
}

export default Contact