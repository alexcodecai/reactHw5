import React from 'react'


function Logout(props) {
    return (
        <div>
        <h1>wlecome back</h1>
        <button onClick={props.handleLogout}>logout</button>
        </div>
    )
}



export default Logout

