import React from 'react'
import './style.scss'

import Herobanner from './herobanner/Herobanner'
import Trending from './trending/trending'
import Popular from './popular/Popular'
import TopRated from './toprated/Toprated'
import Upcoming from './upcoming/Upcoming'

function Home() {
  return (
    <div className='homepage'>
      <Herobanner/>
      <Trending/>
      <Popular/>
      <TopRated/>
      <Upcoming/>
    </div>
  )
}

export default Home
