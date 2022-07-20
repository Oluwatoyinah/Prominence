import React from 'react'

const CoreValues = () => {
  return (
    <div className="container-fluid py-5 text-center" style={{minHeight: "60vh"}}>
        <div className="container">
            <h6 className="fw-bold small-heading" style={{fontSize: "14px", marginBottom: "10px"}}>OUR CORE VALUES</h6>
            <h2 className="fw-bold mb-5 sub-title">What we stand by</h2>

            <div className="row g-5">
                <div className="col-lg-4 col-md-6">
                    <div>
                        <img src="" alt="value" className='mb-2' />
                        <h6 className="fw-bold">Lorem, ipsum.</h6>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6">
                    <div>
                        <img src="" alt="value" className='mb-2' />
                        <h6 className="fw-bold">Lorem, ipsum.</h6>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6">
                    <div>
                        <img src="" alt="value" className='mb-2' />
                        <h6 className="fw-bold">Lorem, ipsum.</h6>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default CoreValues