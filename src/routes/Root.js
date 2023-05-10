import React from 'react'
import { Outlet } from 'react-router-dom'

const Root = () => {
    return (
        <div
            className='App'>
            <Outlet />
        </div>
    )
}

export default Root