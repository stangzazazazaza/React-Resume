import React, { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import dataPortfolio from '../Data/dataPortfolio'
import Slilder from './Slilder'
import axios from 'axios'

function portfolio() {

  const [portfolio,setPortfolio] = useState([])
  useEffect(()=>{
    axios.get('http://localhost:3307/portfolio')
    .then((res)=>{
      setPortfolio(res.data)
    })
  })

  return (
    <div className="section-portfolio" id='portfoilo'>          
    <div className="d-flex justify-content-center align-items-center mb-5">
      <h1 className='text-center'>Portfolio</h1>
      <div className="add-port" data-bs-toggle="modal" data-bs-target="#exampleModal2"><FontAwesomeIcon icon={faPlus}/></div>
    </div>
      <div className="row">
        <div className="col-md-7">
          <Slilder data={portfolio}/>
        </div>
        <div className="col-md-5">
          <div className="position-relative">
            <div className="bg-main-port position-absolute"></div>
            <div className="content position-absolute">
              <h1>My certificate <br/>in 2016-2022</h1>
            </div>
          </div>
        </div>
      </div>
  </div>
  )
}

export default portfolio