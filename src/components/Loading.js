import React from 'react'
import loadingGif from '../images/gif/loading-arrow.gif'
export default function Loading() {
  return (
    <div className='loading'>
      <h4>rooms data loadings....</h4>
      <img src={loadingGif} alt='dd' />
    </div>
  )
}
