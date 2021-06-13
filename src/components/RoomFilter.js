import React from 'react'
import { useContext } from 'react'
import { RoomContext } from './context'
import Title from './Title'

const getUnique = (items, value) => {
  return [...new Set(items.map((item) => item[value]))]
}
export default function RoomFilter({ rooms }) {
  const context = useContext(RoomContext)
  console.log(rooms)

  const {
    // rooms,
    handleChange,
    type,
    capacity,
    price,
    minPrice,
    maxPrice,
    minSize,
    maxSize,
    breakfast,
    pets,
  } = context

  let types = getUnique(rooms, 'type')

  types = ['all', ...types]
  // console.log(types)
  types = types.map((item, index) => {
    return (
      <option value={item} key={index}>
        {item}
      </option>
    )
  })

  let people = getUnique(rooms, 'capacity')

  //lọc ra người
  // console.log(types)
  people = people.map((item, index) => {
    return (
      <option value={item} key={index}>
        {item}
      </option>
    )
  })

  return (
    <section className='filter-container'>
      <Title title='search rooms' />
      <form className='filter-form'>
        <div className='form-group'>
          <label htmlFor='type'>room type</label>
          <select
            name='type'
            id='type'
            value={type}
            className='form-control'
            onChange={handleChange}
          >
            {types}
          </select>
        </div>
        <div className='form-group'>
          <label htmlFor='capacity'>Guests</label>
          <select
            name='capacity'
            id='capacity'
            value={capacity}
            className='form-control'
            onChange={handleChange}
          >
            {people}
          </select>
          {/* {Dùng select de chon} */}
        </div>
        <div className='form-group'>
          <label htmlFor='price'>Price ${price}</label>
          <input
            type='range'
            name='price'
            min={minPrice}
            max={maxPrice}
            value={price}
            onChange={handleChange}
            className='form-control'
          />
        </div>
        <div className='form-group'>
          <label htmlFor='price'>Room Size</label>
          <input
            type='text'
            name='minSize'
            id='size'
            value={minSize}
            onChange={handleChange}
            className='size-input'
          />
          <input
            type='text'
            name='maxSize'
            id='size'
            value={maxSize}
            onChange={handleChange}
            className='size-input'
          />
        </div>
        <div className='form-group'>
          <div className='single-extra'>
            <input
              type='checkbox'
              name='breakfast'
              checked={breakfast}
              id='breakfast'
              onChange={handleChange}
            />
            <label htmlFor='breakfast'>Breakfast</label>
          </div>
          <div className='single-extra'>
            <input
              type='checkbox'
              name='pets'
              checked={pets}
              id='pets'
              onChange={handleChange}
            />
            <label htmlFor='pets'>Pets</label>
          </div>
        </div>
      </form>
    </section>
  )
}
