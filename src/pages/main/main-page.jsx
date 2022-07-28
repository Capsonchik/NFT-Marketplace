import EarnFreeCrypto from "../../components/earnFreeCrypto/earn-free-crypto";
import PopularSellers from "../../components/popularSellers/popular-sellers";
import NewEconomyBlock from "../../components/newCreativeEconomy/new-creative-economy";
import HotBid from "../../components/hotBid/hot-bid";


export const MainPage = ({users, cards}) => {
    return(
        <div className="main">
            <NewEconomyBlock/>
            <PopularSellers users={users}/>
            <HotBid cards={cards}/>
            <EarnFreeCrypto/>
        </div>
    )
}