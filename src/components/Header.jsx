import React from 'react'

const Header = () => {
  return (
    <header className="container-fluid pb-5 header"> 
        <div className="container">
            <div className="row g-5">
                <div className="col-lg-6 mx-auto mb-5">
                    <div>
                        <div className=''>
                            <h1 className="fw-bold">Lorem ipsum dolor sit, amet </h1>
                            <p className='my-4' style={{lineHeight: "32px", fontSize: "18px"}}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corporis, modi unde deserunt a sed reiciendis in itaque tempore quos suscipit accusantium </p>
                            <div>
                              <button style={{fontSize: "13px"}} className="btn-black">Get Started</button>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-lg-6 mx-auto">
                   <div>
                      <img src="" alt="header illustration or something will be here" />
                   </div>
                </div>
            </div> 
        </div>
    </header>
  )
}

export default Header