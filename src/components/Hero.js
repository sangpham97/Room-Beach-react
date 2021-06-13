import React from 'react'

export default function Hero({ children, hero }) {
  return <header className={hero}>{children}</header>
}

//khai báo trang mac dinh se la defaultHero
Hero.defaultProps = {
  hero: 'defaultHero',
}
