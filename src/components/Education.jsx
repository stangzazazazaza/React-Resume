import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import './Education.css'

function education() {

  const [educationList,setEducation] = useState([])  

  useEffect(()=>{
    axios.get('http://localhost:3307/education')
    .then((res)=>{
      setEducation(res.data)
    }).catch((err)=>{
      console.log(err)
    })
  },[])

  return (                  
    <div className='section-education mt-5' id="education">
    <div className="d-flex justify-content-center align-items-center mb-5">
        <h1 className='text-center'>Education</h1>
        <div className="add-port" data-bs-toggle="modal" data-bs-target="#exampleModal3"><FontAwesomeIcon icon={faPlus}/></div>
    </div>
      <div className="container">
        {educationList.map((res ,key)=>{
          return (
            <div className="row align-items-center border-education">
              <div className="col-md-6 text-center">
                <h1>
                  {res.title}
                </h1>
                <h2>{res.year} years</h2>
                <h3>Grade {res.grade}</h3>
              </div>
              <div className="col-md-6 text-center">
                <img src={res.image} alt="" width={200}/>
              </div>
            </div>   
          )
        })}
            
      </div>
         
  </div>
  )
}

export default education