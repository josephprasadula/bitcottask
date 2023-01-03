import React from 'react'

export default function Header({ item }) {
    return (
        <div>
            <div className='header-section'>
                <h1>Demo Streaming</h1>
                <div className='dummy-nav'>
                    <p className='login-btn'>Log in</p>
                    <p>Start your free trail</p>
                </div>
            </div>
            <div className='header-step'>{`Popular ${item}`}</div>
        </div>
    )
}
