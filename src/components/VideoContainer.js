import React, {useEffect, useState} from 'react'
import { Link } from 'react-router-dom'
import { YOUTUBE_API } from '../utils/Constant'
import VideoCard from './VideoCard'

const VideoContainer = () => {
const [videos, setVideos] = useState(null)
  useEffect(() => {
    fetch(YOUTUBE_API).then(data => data.json())
  getVideos();

  }, [])
  
  const getVideos = async() => {
    const data = await fetch(YOUTUBE_API);
    const json = await data.json()
    setVideos(json.items)
    // console.log(json)
  }
  if(!videos) return null

  return (
    <div className='col-span-11 flex flex-wrap justify-between'>
      {
        videos.map((video) => {
          return (
            <Link to={`/watch?v=${video.id}`} >
<VideoCard key={video.id} info={video} />
            </Link>
          )
        })
      }
    </div>
  )
}

export default VideoContainer