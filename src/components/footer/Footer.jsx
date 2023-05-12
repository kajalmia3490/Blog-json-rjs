import React from 'react';
import './Footer.css'

const Footer = () => {
    return (
        <footer
            className='bg-dark text-center'
            style={{ height: '100px' }}
        >
            <ul type='none' className='d-flex me-5 mt-5 w-100'>
                <li>Bettery</li>
                <li>Charge</li>
                <li>Load</li>
                <li>Settings</li>
            </ul>
            <div>@Copyright warning 2023</div>
        </footer>
    );
};

export default Footer;