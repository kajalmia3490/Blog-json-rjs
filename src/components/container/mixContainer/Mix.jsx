import React from 'react';
import './Mix.css'
import Left from '../leftContainer/Left';
import Right from '../rightContainer/Right';

const Mix = () => {
    return (
        <div>
            <div className='d-flex justify-content-between gap-5 mt-4'>
                <Left />
                <Right />
            </div>
        </div>
    );
};

export default Mix;