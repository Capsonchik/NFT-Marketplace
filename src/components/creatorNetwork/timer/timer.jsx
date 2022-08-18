import { useState } from 'react';

export const Timer = () => {

    const [hours, setHours] = useState()
    const [minutes, setMinutes] = useState()
    const [seconds, setSeconds] = useState()

        setInterval(() => {
            setHours(23 - new Date().getHours())
            setMinutes(59 - new Date().getMinutes())
            setSeconds(59 - new Date().getSeconds())
        }, 1000)

    return(
        <div className='creator-current-bid__block-time'>

            <div className='creator-current-bid__auction-ending'>
                <p className='creator-current-bid__time'>{hours}</p>
                <p className='creator-current-bid__time-text'>Hrs</p>
            </div>

            <div className='creator-current-bid__auction-ending'>
                <p className='creator-current-bid__time'>{minutes}</p>
                <p className='creator-current-bid__time-text'>mins</p>
            </div>

            <div className='creator-current-bid__auction-ending'>
                <p className='creator-current-bid__time'>{seconds}</p>
                <p className='creator-current-bid__time-text'>secs</p>
            </div>

        </div>
    )
}