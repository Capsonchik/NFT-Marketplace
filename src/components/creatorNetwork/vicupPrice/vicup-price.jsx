import {useEffect, useState} from "react";

export const VicupPrice = ({card}) => {

  const [vicupPrice, setVicupPrice] = useState('')
  useEffect(()=>{
    setVicupPrice(card.price * 3.5)
  },)

  return(
    <div className='creator-man__block-text'>
      <p className='creator-man__text'>Instant price</p>
      <p className='creator-man__nickname'>{vicupPrice} {card.value}</p>
    </div>
  )
}