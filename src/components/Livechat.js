import React from 'react'
import Chatmsg from './Chatmsg'

const Livechat = () => {
  return (
    <div className='flex flex-col-reverse ml-2 p-2 border h-[500px] w-full rounded-lg bg-slate-100 overflow-scroll'>
       <Chatmsg name={'Akash Patel'} message="hello from youtube chat" />
       <Chatmsg name={'Akash Patel'} message="hello from youtube chat" />
       <Chatmsg name={'Akash Patel'} message="hello from youtube chat" />
       <Chatmsg name={'Akash Patel'} message="hello from youtube chat" />
       <Chatmsg name={'Akash Patel'} message="hello from youtube chat" />
       <Chatmsg name={'Akash Patel'} message="hello from youtube chat" />
       <Chatmsg name={'Akash Patel'} message="hello from youtube chat" />
       <Chatmsg name={'Akash Patel'} message="hello from youtube chat" />
       <Chatmsg name={'Akash Patel'} message="hello from youtube chat" />
       <Chatmsg name={'Akash Patel'} message="latest" />
    </div>
  )
}

export default Livechat