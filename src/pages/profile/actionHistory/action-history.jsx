import {Navigation} from './navigation/navigation'
import {Outlet} from 'react-router-dom'


export const ActionHistory = () => {
  return (
    <>
      <Navigation/>
      <Outlet/>
    </>

  )
}