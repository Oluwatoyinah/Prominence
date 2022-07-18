import React from 'react'

const Nav = () => {
  return (
    <nav className="container-fluid">
        <div className="container py-3">
            <div className="d-flex justify-content-between align-items-center">
                <div>
                    <img src="" alt="logo" />
                </div>
                <div>
                    <ul className='nav-links d-flex gap-3'>
                        <li>Home</li>
                        <li>About</li>
                    </ul>
                </div>
            </div>
        </div>
    </nav>
  )
}

export default Nav