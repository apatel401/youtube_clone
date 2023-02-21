import React from 'react'

const VideoCard = ({info}) => {
    const {snippet, statistics} = info
    const {channelTitle, title, thumbnails} = snippet;
// console.log(thumbnails.medium)
  return (
    <div className='p-2 w-60 shadow-sm'>
        <img className='rounded-lg' src={thumbnails.medium.url} alt={title} />
        <ul>
            <li className='font-semibold text-sm py-2'>{title}</li>
            <li className='py-2'>{channelTitle}</li>
            <li>{statistics.viewCount}</li>
        </ul>
    </div>
  )
}

export default VideoCard