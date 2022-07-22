import React from 'react'

const Features = () => {
  return (
    <section className='container-fluid py-5 features' style={{minHeight: "100vh"}}>
      <div className="container">
        <div className="text-center mb-5">
            <h6 className="fw-bold small-heading" style={{fontSize: "14px", marginBottom: "10px"}}>FEATURES</h6>
            <h2 className="fw-bold sub-title">What we offer</h2>
        </div>

        <div className="row g-5">
          <div className="col-lg-4 col-md-6 mx-auto col-sm-8">
            <div className="features-box">
              <h3>01</h3>

              <div>
                <h5 className="fw-bold">Security</h5>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. totam iusto, voluptas dolorum.</p>
              </div>

              <p>Learn More </p>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 mx-auto col-sm-8">
            <div className="features-box">
              <h3>02</h3>

              <div>
                <h5 className="fw-bold">Responsibility</h5>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. totam iusto, voluptas dolorum.</p>
              </div>

              <p>Learn More </p>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 mx-auto col-sm-8">
            <div className="features-box">
              <h3>03</h3>

              <div>
                <h5 className="fw-bold">Comfort</h5>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. totam iusto, voluptas dolorum.</p>
              </div>

              <p>Learn More </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Features