import React from 'react'
import NestGageBanner from '../assets/images/banner1.jpg'

const About = () => {
  return (
    <div className="container-fluid py-5 p-lg-0 mb-5" style={{minHeight: "90vh"}}>
        <div className="container">
            <div className="row g-5">
                <div className="col-lg-6 col-md-8 mx-auto order-1 order-lg-0 d-flex justify-content-center">
                    <img src={NestGageBanner} className="mx-auto bg-danger" style={{width: "90%"}} alt="" />
                </div>
                <div className="col-lg-6 order-0 order-lg-1 d-flex align-items-center">
                    <div>
                        <h6 className="fw-bold small-heading" style={{fontSize: "14px", marginBottom: "10px"}}>ABOUT US</h6>
                        <h2 className="fw-bold sub-title">Who we are</h2>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corporis, modi unde deserunt a sed reiciendis in itaque tempore quos suscipit accusantium asperiores accusamus similique quam ipsam? Illum laudantium eveniet quisquam?</p>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reprehenderit sequi vero numquam, vel fugiat fuga, dignissimos sunt eaque, maxime dolore fugit aliquam deserunt nostrum earum facilis magni praesentium nemo vitae.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default About