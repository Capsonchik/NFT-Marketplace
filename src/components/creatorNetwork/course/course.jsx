import { useEffect, useState } from 'react';
import { Timer } from '../timer/timer';

export const Course = ({ card, index }) => {

  const [course, setCourse] = useState({ course: 1595.1, crypto: card[index].price, value: 0 })

  useEffect(() => {
    setCourse({ value: (course.course * course.crypto).toFixed(2), course: 1595.1, crypto: card[index].price })
  },[card[index]])

  return (
    <div className='creator-current-bid'>
      <h4 className='creator-current-bid__text'>Current Bid</h4>
      <h3 className='creator-current-bid__price-eth'>{course.crypto} {card[index].value}</h3>
      <p className='creator-current-bid__price-dolar'>${course.value}</p>
      <h4 className='creator-current-bid__text'>Auction ending in</h4>
      <Timer/>
    </div>
  )
}