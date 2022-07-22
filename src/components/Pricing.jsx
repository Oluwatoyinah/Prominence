import React from 'react'

const Pricing = () => {
  return (
    <section className='container-fluid py-5 my-5 pricing'>
      <div className="container">
        <div className="col-md-8 text-center mx-auto mb-5">
          <h6 className="fw-bold small-heading" style={{fontSize: "14px", marginBottom: "10px"}}>PRICING</h6>
          <h2 className="fw-bold sub-title">Pricing lorem ipsum dolor sit amet consectetur</h2>
        </div>
        

        <div className="row g-5">
          <div className="col-lg-4 col-sm-8 mx-auto col-md-6">
            <div>
                <div className="pricing-box mb-3">
                    <div>
                        <h5 className="fw-bold">Basic</h5> 
                        <h3><span style={{color: "white"}}>$30</span>/month</h3> 
                        <p>Lorem ipsum dolor sit amet consectetur.</p>
                        <button className="btn-black">Get Started</button>
                    </div>
                </div>

                <div className="pricing-list">
                  <ul style={{paddingLeft: "0px"}}>
                    {
                      ["Special Offer 1", "Unique Feature 2", "Special Feature 3", "Special feature 4"].map(list => <li style={{padding: "10px 0"}}>
                            <span style={{marginRight: "10px"}}>+</span>
                            <span>{list}</span>
                          </li>
                          )
                    }
                  </ul>
                </div>
            </div>
          </div>

          <div className="col-lg-4 col-sm-8 mx-auto col-md-6">
            <div>
                <div className="pricing-box mb-3">
                    <div>
                        <h5 className="fw-bold">Gold</h5> 
                        <h3><span style={{color: "white"}}>$90</span>/month</h3> 
                        <p>Lorem ipsum dolor sit amet consectetur.</p>
                        <button className="btn-black">Get Started</button>
                    </div>
                </div>

                <div className="pricing-list">
                  <ul style={{paddingLeft: "0px"}}>
                    {
                      ["Special Offer 1", "Unique Feature 2", "Special Feature 3", "Special feature 4"].map(list => <li style={{padding: "10px 0"}}>
                            <span style={{marginRight: "10px"}}>+</span>
                            <span>{list}</span>
                          </li>
                          )
                    }
                  </ul>
                </div>
            </div>
          </div>

          <div className="col-lg-4 col-sm-8 mx-auto col-md-6">
            <div>
                <div className="pricing-box mb-3">
                    <div>
                        <h5 className="fw-bold">Diamond</h5> 
                        <h3><span style={{color: "white"}}>$150</span>/month</h3> 
                        <p>Lorem ipsum dolor sit amet consectetur.</p>
                        <button className="btn-black">Get Started</button>
                    </div>
                </div>

                <div className="pricing-list">
                  <ul style={{paddingLeft: "0px"}}>
                    {
                      ["Special Offer 1", "Unique Feature 2", "Special Feature 3", "Special feature 4"].map(list => <li style={{padding: "10px 0"}}>
                            <span style={{marginRight: "10px"}}>+</span>
                            <span>{list}</span>
                          </li>
                          )
                    }
                  </ul>
                </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Pricing