import { StyledSellersBlock } from "./sellers-card.styled";

const SellersCard = ({users}) => {

    const MapUsers = users.map(el => {
        return(
            <div key={el.id} className='user'>
                <div className='user__top'>
                    <div className='user__top-achivments'>
                        #{el.id}
                    </div>
                    <div className='user__top-invite'>
                        <img src='img/icons/add.png' alt="addbutton" />
                    </div>
                    <div className='user__top-open'>
                        <img src='img/icons/open-arrow.png' alt="inviteButton" />
                    </div>
                </div>
                <img className='user__photo' src={el.photo} alt='photo'/>
                <p className='user__name'>{el.name}</p>
                <p className='user__balanse'>{el.balance} <span className='user__balanse-currensy'>ETH</span></p>
            </div>
        )
    })


    return (
        <StyledSellersBlock>
            <div className='sellers-wraper'>
                {MapUsers}
            </div>
        </StyledSellersBlock>
    );
}

export default SellersCard;