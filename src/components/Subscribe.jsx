import React from 'react'

const Subscribe = () => {
  return (
    <section className="py-5 container-fluid subscribe">
        <div className="container">
            <div className="container p-md-5 subscribe-box d-flex align-items-center">
                <div className="row g-md-5 g-3">
                    <div className="col-lg-6 d-flex align-items-center">
                        <div className=''>
                            <h2 className="fw-bold">Ready to get started with us</h2>
                            <h6 className="mt-2">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Natus animi tenetur harum, laboriosam cum corporis?</h6>
                        </div>
                    </div>

                    <div className="col-lg-6 d-flex align-items-center"> 
                            <div className="subscribe-email d-flex align-items-center" style={{width: "100%"}}>
                                <input className='subscribe-email-input' type="email" name="" placeholder='Your email' id="" />
                                <button className='subscribe-email-btn'>Subscribe</button>
                            </div> 
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Subscribe