import React from 'react'

const VideoCard = ({info}) => {
    const {snippet, statistics} = info
    const {channelTitle, title, thumbnails} = snippet;
// console.log(thumbnails.medium)
  return (
    <div className='p-2 my-4 w-60 shadow-md min-h-[280px]'>
        <img className='rounded-lg' src={thumbnails.medium.url} alt={title} />
        <ul>
            <li className='font-semibold text-sm py-1'>{title}</li>
            <li className='py-1 text-xs'>{channelTitle}</li>
            <li className='text-xs'>{statistics.viewCount}</li>
        </ul>
    </div>
  )
}

export default VideoCard