import {useState} from 'react'


export const ButtonFollow = ({config}) => {
  const [clickButton, setClickButton] = useState(true)

  const onClick = () => {
    setClickButton(!clickButton)
  }
  return (
    <button onClick={onClick}
            className={clickButton
              ? `${config.selected.class}`
              : `${config.unselected.class}`}>
      {clickButton ? config.selected.label : config.unselected.label}
    </button>
  )
}