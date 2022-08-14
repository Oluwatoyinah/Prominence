import React from 'react'

const Partner = () => {
  return (
    <section className="container-fluid py-5 my-5" style={{minHeight: "40vh"}}>
        <div className="container text-center">
            <h6 className="fw-bold small-heading" style={{fontSize: "14px", marginBottom: "10px"}}>PARTNERS</h6>
            <h2 className="fw-bold mb-5 sub-title">
                We are trusted by the best
            </h2>

            <div className="row g-5">
              {
                  [1, 2, 3, 4, 5, 6].map((partner,i) => (
                    <div key={i} className="col-lg-2 col-sm-6 col-md-4">
                      <img src="" alt={`Partner ${partner}`} />
                    </div>
                  ))
              }  
            </div>
            
        </div> 
    </section>
  )
}

export default Partner