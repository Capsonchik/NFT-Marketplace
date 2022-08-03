import EarnFreeCrypto from "../../components/earnFreeCrypto/earn-free-crypto";
import PopularSellers from "../../components/popularSellers/popular-sellers";
import NewEconomyBlock from "../../components/newCreativeEconomy/new-creative-economy";
import HotBid from "../../components/hotBid/hot-bid";
import HotCollection from "../../components/hotCollections/hot-collection";
// import { Signin } from '../singnin/signin'
// import { Signup } from '../signup/signup'
// import {Routes, Route, BrowserRouter} from 'react-router-dom'

export const MainPage = ({users, cards}) => {
    return(
        <div className="main">
            <NewEconomyBlock/>
            <PopularSellers users={users}/>
            <HotBid cards={cards}/>
            <HotCollection cards={cards} users={users}/>
            <EarnFreeCrypto />
        {/* <BrowserRouter>
            <Routes>
              <Route path='/:signin' element={<Signin />} />
              <Route path='/:signup' element={<Signup />} />
          </Routes> 
          </BrowserRouter> */}
        </div>
    )
}