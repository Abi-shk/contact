import React from 'react'
import './single.css'

function Profile(props) {
  return (
    
    <div className="bod">
    <div className="main">
        <div className="img">
         <img  className='img' src={props.data.profile} alt="" />
        </div>
        <p>Name:{props.data.name}</p>
        <p>Email:{props.data.email}</p>
        <p>Mobile:{props.data.mobile}</p>
        <p>Location:{props.data.location}</p>
    
    </div>
    </div>
  )
}

export default Profile