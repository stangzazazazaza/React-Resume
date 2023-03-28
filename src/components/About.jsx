import React, { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import './About.css'
import axios from 'axios'

function about() {

const [skillsList,setSkills] = useState([])


useEffect(()=>{
  axios.get('http://localhost:3307/skill')
  .then((res)=>{
    setSkills(res.data)    
  })
})

  return (
    <div className="section-about" id='about'>
    <div className="container">
      <div className="content-head">
        <h1 className='text-white'>About</h1>
        <h3>Hi,I'm <b>Napamonton Norkhuntod I'm 23 years old</b></h3>
        <div className="underline"></div>
        <div className="add-skill d-flex ">
          <h1>My skill</h1>
          <div className="add-skill-btn" data-bs-toggle="modal" data-bs-target="#exampleModal"><FontAwesomeIcon icon={faPlus}/></div>
        </div>
      </div>
      <div className="row mt-3">
        <h2 className='text-center'>My skill</h2>
        {skillsList.map((res,key)=>{
          return(
            <div className="col-md-3 mb-3 text-center">
              <div className={"p-4 rounded " + (res.status == 'Font-End' ? "bg-white":"bg-black")} >
                <img src={res.iamge} alt="" width={100} height={100}/>
                <h2 className=' text-center '>{res.name}</h2>
              </div>
            </div>  
          )
        })}
          
                              
      </div>
    </div>
  </div>
  )
}

export default about