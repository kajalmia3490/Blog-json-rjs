import React from 'react';
import './Header.css'
// import BsPersonWorkspace from '';

const Header = () => {
    return (
        <div className='m-4 mb-0'>
            <div className='d-flex justify-content-between gap-5 bg-primary p-2 text-white rounded'>
                <div>
                    <h1 className='text-white-50'>
                    <i class="fa-solid fa-person-digging text-light"></i> 
                    WorkOut</h1>
                </div>
                <div>
                    <h3 className='me-5 text-white-50'>
                        Practice make a perfect!
                    </h3>
                </div>
            </div>
            <nav>
                <ul
                    type='none'
                    className='d-flex fs-5 mt-4'>
                    <li>Home</li>
                    <li>Information</li>
                    <li>Load</li>
                    <li>Contact</li>
                    <li>About</li>
                </ul>
            </nav>
            <h1 className='text-center fs-5 mt-4'>
                Loading Data & Phone's Bettery Charging!
            </h1>
        </div>
    );
};

export default Header;