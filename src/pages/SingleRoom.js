import React, { Component } from 'react'
import defaultBcg from '../images/room-1.jpeg'
import Banner from '../components/Banner'
import { Link } from 'react-router-dom'
import { RoomContext } from '../components/context'
import Hero from '../components/Hero'
import StyledHero from '../components/StyledHero'

export default class SingleRoom extends Component {
  constructor(props) {
    super(props)
    // console.log(this.props)
    this.state = {
      slug: this.props.match.params.slug,
      defaultBcg,
    }
  }

  static contextType = RoomContext

  // componentDidMount() {
  //   console.log(this.props);
  // }
  render() {
    const { getRoom } = this.context

    const room = getRoom(this.state.slug)
    console.log(room)
    if (!room) {
      return (
        <div className='error'>
          <h3> no such room could be found...</h3>
          <Link to='/rooms' className='btn-primary'>
            back to rooms
          </Link>
        </div>
      )
    }
    const {
      name,
      description,
      capacity,
      size,
      price,
      extras,
      breakfast,
      pets,
      images,
    } = room

    const [mainImg, ...defaultImg] = images
    //destructuring để lấy hình defaultImg phía dưới
    return (
      <>
        <StyledHero img={images[0]}>
          <Banner title={`${name} room`}>
            <Link to='/rooms' className='btn-primary '>
              back to rooms
            </Link>
          </Banner>
        </StyledHero>
        <section className='single-room'>
          <div className='single-room-images'>
            {defaultImg.map((image, index) => {
              return <img src={image} alt='Image-rooms' key={index} />
            })}
          </div>
          <div className='single-room-info'>
            <article className='desc'>
              <h3>details</h3>
              <p>{description}</p>
            </article>
            <article className='info'>
              <h3>Infor</h3>
              <h6>Price:${price}</h6>
              <h6>Size:{size}</h6>
              <h6>
                Max Capacity:
                {capacity > 1 ? `${capacity} people` : `${capacity} person`}
              </h6>
              <h6>Pets:{pets ? `Pets Allowed` : `No Pets`}</h6>
              <h6>{breakfast && 'free breakfast included'}</h6>
              {/* {khi có breakfast thi hien free breakfast included} */}
            </article>
          </div>
        </section>
        <section className='room-extras'>
          <h6>extras</h6>
          <ul className='extras'>
            {extras.map((item, index) => {
              return <p key={index}>-{item}</p>
            })}
          </ul>
        </section>
      </>
    )
  }
}

//images là 1 object lay ra object dau tien se la images[0]
