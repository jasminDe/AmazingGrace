import React from 'react'

function User({title},{icon}) {
  return (
    <div>
        <div>
        {/* icon */}
        {icon}
        </div>

        {/* title */}
        <h2>{title}</h2>
    </div>
  )
}

export default User