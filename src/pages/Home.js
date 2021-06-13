import React from 'react'
import Hero from '../components/Hero'
import Banner from '../components/Banner'
import { Link } from 'react-router-dom'
import Services from '../components/Services'
import FeaturedRoom from '../components/FeaturedRoom'
import StyleHero from '../components/StyledHero'
export default function Home() {
  return (
    <div>
      <Hero>
        <Banner
          title='luxurious rooms'
          subtitle='deluxe rooms starting at $299'
        >
          <Link to='/rooms' className='btn-primary'>
            our rooms
          </Link>
        </Banner>
      </Hero>
      <Services />
      <FeaturedRoom />
    </div>
  )
}
//trang default se là Home neu muon chọn trang khác trong navbar thì gán truc tiep hero='class của trang đó'
// <Hero hero='defaultHero'>Home</Hero>
