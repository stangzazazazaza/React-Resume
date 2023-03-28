import React from 'react'

function Home() {
  return (
    <div className="section-home" id='home'>
          <div className="container">
              <div className="row align-items-center">            
                  <div className="col-md-3 z-index-1">
                    <h1 className='slide-detail'><span>N</span>apamonton</h1>
                    <h1 className='slide-detail'><span>N</span>orkhuntod</h1>
                    <h1 className='slide-detail text-decoration'><span>F</span>ont&nbsp;&nbsp;<span>E</span>nd</h1>
                  </div>
                <div className="col-md-9">
                  <div id="carouselExampleIndicators" class="carousel slide w-133" data-bs-ride="carousel">
                    <div class="carousel-indicators">
                      <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                      <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                      <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    </div>
                    <div class="carousel-inner">
                      <div class="carousel-item active">
                        <img src="images/p2.jpg" width={40} class="d-block w-100" alt="..."/>
                      </div>
                      <div class="carousel-item">
                        <img src="images/p1.jpg" width={40} class="d-block w-100" alt="..."/>
                      </div>
                      <div class="carousel-item">
                        <img src="images/p3.jpg" width={40} class="d-block w-100" alt="..."/>
                      </div>
                    </div>
                    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                      <span class="visually-hidden">Previous</span>
                    </button>
                    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                      <span class="carousel-control-next-icon" aria-hidden="true"></span>
                      <span class="visually-hidden">Next</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
        </div>
  )
}

export default Home