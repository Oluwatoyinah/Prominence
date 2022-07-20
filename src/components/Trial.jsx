import React from 'react'

const Trial = () => {
  return (
    <section className='container-fluid py-5 trial'>
      <div className="container">
        <div className="trial-box">
          <div className="container p-sm-5 p-4">
            <div className="row g-5">
              <div className="col-lg-7 col-md-10 mx-auto text-lg-start text-center">
                 <h6 style={{fontSize: "13px", lineHeight: "20px", color: "#be9cfd"}} className="fw-bold">FREE TRIAL</h6>
                 <div className='mb-2'>
                    <h2 className="fw-bold mb-0 sub-title">Start your 1-month free trial</h2>
                    {/* <p style={{lineHeight: "24px", color: "rgb(129, 147, 178)"}}>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p> */}
                 </div>

                 <div className='mb-2'>
                    <div className="trial-email d-flex align-items-center" style={{width: "100%"}}>
                        <input className='trial-email-input flex-grow-1' type="email" name="" placeholder='Your email' id="" />
                        <button className='trial-email-btn inline-flex me-2'>Submit</button>
                    </div> 
                 </div>

                 <div>
                    <div style={{fontSize: "13px",color: "rgb(129, 147, 178)"}} className="d-sm-flex gap-lg-5 gap-sm-3 justify-content-lg-start justify-content-center">
                      <p className='mb-0'><span>+</span> Cancel anytime</p>
                      <p><span>+</span> No credit card required</p>
                    </div>
                 </div>
              </div>

              <div className="col-lg-5 d-none d-lg-block">
                <div>
                  <img src="" alt="trial illustration will be here" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Trial