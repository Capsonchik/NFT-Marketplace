import EarnFreeCrypto from '../../components/earnFreeCrypto/earn-free-crypto';
import PopularSellers from '../../components/popularSellers/popular-sellers';
import NewEconomyBlock from '../../components/newCreativeEconomy/new-creative-economy';
import HotBid from '../../components/hotBid/hot-bid';
import HotCollection from '../../components/hotCollections/hot-collection';
import { CreatorNetwork } from '../../components/creatorNetwork/creator-network'

export const MainPage = ({ users, cards }) => {
    return(
        <div className='main'>
            <NewEconomyBlock/>
            <CreatorNetwork cards={ cards } users={ users } />
            <PopularSellers users={ users }/>
            <HotBid cards={ cards }/>
            <HotCollection cards={ cards } users={ users } />
            <EarnFreeCrypto />
        </div>
    )
}