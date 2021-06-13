import React, { Component } from 'react'
import Title from './Title'
import { FaCocktail, FaHiking, FaBeer, FaShuttleVan } from 'react-icons/fa'

export default class Services extends Component {
  state = {
    services: [
      {
        icon: <FaCocktail />,
        id: 1,
        name: 'Bear',
        text:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo, adipisci?',
      },
      {
        icon: <FaHiking />,
        id: 2,
        name: 'Hiking',
        text:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo, adipisci?',
      },
      {
        icon: <FaBeer />,
        id: 3,
        name: 'Information',
        text:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo, adipisci?',
      },
      {
        icon: <FaShuttleVan />,
        id: 4,
        name: 'Skill',
        text:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo, adipisci?',
      },
    ],
  }
  render() {
    return (
      <section className='services'>
        <Title title='services' />
        <div className='services-center'>
          {this.state.services.map((service, index) => {
            return (
              <article key={index} className='service'>
                <span>{service.icon}</span>
                <h6>{service.name}</h6>
                <p>{service.text}</p>
              </article>
            )
          })}
        </div>
      </section>
    )
  }
}
