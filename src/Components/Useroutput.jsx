import React from 'react'

function Useroutput(prop) {
  return (
    <div>
      {/* adding username with props */}
      <p className='text-white text-3xl'>
        My username is {prop.username}
      </p>
    </div>
  )
}

export default Useroutput

