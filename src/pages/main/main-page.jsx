import EarnFreeCrypto from "../../components/earnFreeCrypto/earn-free-crypto";
import PopularSellers from "../../components/popularSellers/popular-sellers";
import NewEconomyBlock from "../../components/newCreativeEconomy/new-creative-economy";


export const MainPage = ({users}) => {
    return(
        <div className="main">
            <NewEconomyBlock/>
            <PopularSellers users={users}/>
            <EarnFreeCrypto/>
        </div>
    )
}