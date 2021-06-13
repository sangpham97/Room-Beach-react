import React from 'react'
import Hero from '../components/Hero'
import { Link } from 'react-router-dom'
import RoomContainer from '../components/RoomContainer'
import Banner from '../components/Banner'

const RoomPage = () => {
  return (
    <div>
      <Hero hero='roomsHero'>
        <Banner title='Our Room'>
          <Link to='/' className='btn-primary'>
            Return Home
          </Link>
        </Banner>
      </Hero>
      <RoomContainer />
    </div>
  )
}

export default RoomPage
