import React from 'react';
import Img from './8-84938_generic-edge-rounded-big-android-phone-png-transparent.png'
import Button from '../button/Button';

const Right = () => {
    return (
            <div
                className='p-2 border rounded w-100'
                style={{ backgroundColor: 'lightgreen' }}>
                <h1 className='fs-5 text-center mt-3'>Your Charge</h1>
                <div className='d-flex justify-content-between w-100 gap-5 mt-3'>
                    <div className='text-center'>
                        <h1 className='fs-5'>Phone:</h1>
                        <img style={{ width: '150px' }} src={Img} alt='...' />
                    </div>
                    <div className='w-100 text-center p-2'>
                        <h1 className='fs-5'>Bettery:</h1>
                        <Button />
                    </div>
                </div>
            </div>
    );
};

export default Right;