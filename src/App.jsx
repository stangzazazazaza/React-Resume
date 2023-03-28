import { useState } from 'react'
import Nav from './components/Nav'
import './App.css'
import axios from 'axios'
import Home from './components/Home'
import About from './components/about'
import Portfolio from './components/Portfolio'
import Education from './components/Education'
import Contact from './components/Contact'


function App() { 

  // skill
  const [titleskill,setTiltleskill] = useState('')
  const [imgskill,setImgskill] = useState('')

  return (
    <div className="App">     
      <Nav/>
      <Home/>
      <About/>
      <Portfolio/>
      <Education/>
      <Contact/>

        {/* <!-- Modal About Skill --> */}
        <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div class="modal-dialog">
            <div class="modal-content bg-modal">
              <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">Add SKills</h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div class="modal-body">
                <form action="">
                  <div class="mb-3">
                    <label class="form-label">Name Skill</label>
                    <input onChange={((e)=>setTiltleskill(e.target.data))} type="text" class="form-control bg-modal-input" />                    
                  </div>
                  <div class="mb-3">
                    <label class="form-label">image</label>
                    <input onChange={((e)=>setImgskill(e.target.files[0]))} type="file" class="form-control bg-modal-input"/>
                  </div>
                </form>
              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                <button type="button" class="btn  bg-main">Add </button>
              </div>
            </div>
          </div>
        </div>

       

        {/* <!-- Modal Portfolio --> */}
        <div class="modal fade" id="exampleModal2" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div class="modal-dialog">
            <div class="modal-content bg-modal">
              <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">Add Portfolio</h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div class="modal-body">
                <form action="">
                  <div class="mb-3">
                    <label class="form-label">title</label>
                    <input type="email" class="form-control bg-modal-input" />                    
                  </div>
                  <div class="mb-3">
                    <label class="form-label">image</label>
                    <input type="file" class="form-control bg-modal-input"/>
                  </div>
                </form>
              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                <button type="button" class="btn  bg-main">Add </button>
              </div>
            </div>
          </div>
        </div>

       
        

         {/* <!-- Modal Education --> */}
        <div class="modal fade" id="exampleModal3" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div class="modal-dialog">
            <div class="modal-content bg-modal">
              <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">Add Education</h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div class="modal-body">
                <form action="">
                  <div class="mb-3">
                    <label class="form-label">title</label>
                    <input type="email" class="form-control bg-modal-input" />                    
                  </div>
                  <div class="mb-3">
                    <label class="form-label">year</label>
                    <input type="email" class="form-control bg-modal-input" />                    
                  </div>
                  <div class="mb-3">
                    <label class="form-label">grade</label>
                    <input type="email" class="form-control bg-modal-input" />                    
                  </div>
                  <div class="mb-3">
                    <label class="form-label">image</label>
                    <input type="file" class="form-control bg-modal-input"/>
                  </div>
                </form>
              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                <button type="button" class="btn  bg-main">Add </button>
              </div>
            </div>
          </div>
        </div>    

    </div>
  )
}

export default App
