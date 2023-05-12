import React, { useEffect, useState } from 'react';
import './Left.css'

const Left = () => {
    const [user, setUser] = useState([])
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(res => res.json())
            .then(data => setUser(data))
    }, [])
    const dataShow = () => {
        return (
            <p>
                {user.map(u => {
                    return (
                        <p> {u.name} </p>
                    )
                })}
            </p>
        )
    }
    return (
        <div className='d-flex justify-content-between w-100 gap-3'>
            <div className='' style={{ height: '0px' }}>
                <h1 className='fs-5'>User Id: {user.length} </h1>
                <div
                    className='overflow-auto'
                    style={{ height: '400px' }}>
                    {user.map(u =>
                        <p
                            className='text-light bg-dark p-2 rounded'
                            onClick={dataShow}
                        >
                            {u.id}. {u.name} <i class="fa-solid fa-angle-down float-right"></i>
                        </p>)}
                </div>
            </div>
            <div className='details text-center border rounded w-100 gap-5'
                style={{ backgroundColor: 'lightsky' }}>
                <h1 className='fs-5 mt-3'>Details:</h1>
                <div>
                    <p> Data loading </p>
                </div>
            </div>
        </div>
    );
};

export default Left;