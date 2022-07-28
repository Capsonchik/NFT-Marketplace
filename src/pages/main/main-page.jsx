import EarnFreeCrypto from "../../components/earnFreeCrypto/earn-free-crypto";
import PopularSellers from "../../components/popularSellers/popular-sellers";


export const MainPage = ({users}) => {
    return(
        <div className="main">
            <PopularSellers users={users}/>
            <EarnFreeCrypto/>
        </div>
    )
}