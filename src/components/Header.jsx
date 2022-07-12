import React from 'react'

const Header = () => {
  return (
    <header className="container-fluid py-5" style={{minHeight: "100vh"}}>
        <div className="container">
          <div className="row g-5">
              <div className="col-lg-6">
                <div>
                   <h1 className="fw-bold mb-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi dignissimos eius numquam?</h1>
                   <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis dicta quos esse fugiat ullam quo explicabo officia quae provident eum.</p>
                </div>
              </div>

              <div className="col-lg-6">
                <div>
                  <img src="" alt="Header banner" />
                </div>
              </div>
          </div>
        </div>
    </header>
  )
}

export default Header