import React from 'react'
// import NestGageBanner from '../assets/images/banner1.jpg'
import NestGageWhite from '../assets/images/nestgage-white.jpg';
import NestGageBlue from '../assets/images/nestgage-blue.jpg'

const Header = () => {
  return (
    <header className="container-fluid py-5" style={{minHeight: "80vh"}}> 
        <div className="container">
            <div className="row g-5">
                <div className="col-lg-6 mb-5">
                    <div>
                        <div className=''>
                            <h1 className="fw-bold">Lorem ipsum dolor sit, amet consectetur!</h1>
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corporis, modi unde deserunt a sed reiciendis in itaque tempore quos suscipit accusantium asperiores accusamus similique quam ipsam? Illum laudantium eveniet quisquam?</p>
                        </div>

                        <div>
                          <button style={{fontSize: "13px"}} className="btn btn-dark me-3">Request a demo</button>
                          <button style={{fontSize: "13px"}} className="btn btn-outline-dark">Explore</button>
                        </div>
                    </div>
                </div>

                <div className="col-md-6 mx-auto  my-5" style={{minHeight: "30vh"}}>
                   <div style={{position: "relative"}}>
                      <img src={NestGageWhite} style={{width: "50%"}} className="headerImg1" alt="header banner" />
                      <img src={NestGageBlue} style={{width: "50%"}} className="headerImg2" alt="header banner" />    
                   </div>
                </div>
            </div> 
        </div>
    </header>
  )
}

export default Header