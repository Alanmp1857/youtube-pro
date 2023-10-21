import React, { useEffect, useState } from 'react'
import VideoCard from './VideoCard'
import { YOUTUBE_VIDEOS_API } from '../utils/constants';

const VideoContainer = () => {
    const [videos, setVideos] = useState([])

    useEffect(() => {
        getVideos();
    }, []);

    const getVideos = async () => {
        const data = await fetch(YOUTUBE_VIDEOS_API);
        const json = await data.json();
        console.log(json.items);
        setVideos(json.items)
    }

    return (
        <div className='flex flex-wrap'>
            {videos.map((video) => (<VideoCard info={video} />))}
        </div>
    )
}

export default VideoContainer