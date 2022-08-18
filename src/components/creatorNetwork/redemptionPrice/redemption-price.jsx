import {useEffect, useState} from 'react'

export const RedemptionPrice = ({ card, index }) => {

  const [redemptionPrice, setRedemptionPrice] = useState('')
  useEffect(()=>{
    setRedemptionPrice((card[index].price * 3.5).toFixed(2))
  },)

  return(
    <div className='creator-man__block-text'>
      <p className='creator-man__text'>Instant price</p>
      <p className='creator-man__nickname'>{redemptionPrice} {card[index].value}</p>
    </div>
  )
}