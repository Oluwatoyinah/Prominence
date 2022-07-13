import React from 'react'
import NestGageBanner from '../assets/images/banner1.jpg'

const About = () => {
  return (
    <div className="container-fluid p-0 mb-5" style={{}}>
        <div className="container">
            <div className="row g-5">
                <div className="col-lg-6 d-flex justify-content-center">
                    <img src={NestGageBanner} className="mx-auto bg-danger" style={{width: "90%"}} alt="" />
                </div>
                <div className="col-lg-6 d-flex align-items-center">
                        <div className=''>
                            <h2 className="fw-bold">About Us</h2>
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corporis, modi unde deserunt a sed reiciendis in itaque tempore quos suscipit accusantium asperiores accusamus similique quam ipsam? Illum laudantium eveniet quisquam?</p>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente alias neque libero rerum quod vitae, rem, cum modi accusamus fugiat nisi? Deserunt, velit!</p>
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reprehenderit sequi vero numquam, vel fugiat fuga, dignissimos sunt eaque, maxime dolore fugit aliquam deserunt nostrum earum facilis magni praesentium nemo vitae.</p>
                        </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default About