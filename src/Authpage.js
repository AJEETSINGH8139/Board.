import React from 'react'
import SignIn from './components/SignIn'

function Authpage() {
    return (
        <div className='Authpage'>
            <div className='board'>
                <h1 className='board-head'>Board.</h1>
            </div>
            <div className='auth'>
                <SignIn />
            </div>
        </div>
    )
}

export default Authpage
