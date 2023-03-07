import React from 'react'

const Chatmsg = ({name, message}) => {
  return (
    <div className='flex items-center p-2'>
    <img src="./user.png" alt="user" class="my-2 h-7" />
    <span className='px-2 font-semibold'>{name}</span>
    <span>{message}</span>
    </div>
  )
}

export default Chatmsg