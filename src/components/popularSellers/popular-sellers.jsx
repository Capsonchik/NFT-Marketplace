import { StyledPopularSellers } from "./popular-sellers.styled";
import { Container } from "../../globalStyled/styled.global";
import { useState } from "react";
import SellersCard from "./sellersCard/sellers-card";
import SellersSortBlock from "./sellersSortBlock/sellers-sort-block";


const PopularSellers = ({users}) => {

    const [offset, setOffset] = useState(232)

    const swipeSlideRight  = () => {
        const sliderBlock = document.querySelector('.slider-wrapper')
        setOffset(offset + 232)
        sliderBlock.style.left = -offset +  'px'
        if(offset > 695) {
            setOffset(0)
        }
    }

    const swipeSlideLeft  = () => {
        const sliderBlock = document.querySelector('.slider-wrapper')
        setOffset(offset - 232)
        sliderBlock.style.left = offset +  'px'
        if(offset < -695) {
            setOffset(0)
        }
    }

    return (
        <StyledPopularSellers>
            <div className='section-wrapper'>
                <Container>
                    <div className='popular-sellers__header'>
                        <SellersSortBlock />
                    </div>
                    <div className='popular-sellers__slider'>
                        <div onClick={swipeSlideLeft} className='arrow prev-arrow'>
                            <img src='img/icons/circle-next-arrow.png' alt="prev-arrov" />
                        </div>
                        <div className='popular-sellers__slider-block'>
                            <div className='slider-wrapper'>
                                <SellersCard users={users}/>
                            </div>
                        </div>
                        <div onClick={swipeSlideRight} className='arrow next-arrow'>
                            <img src='img/icons/circle-next-arrow.png' alt="prev-arrow" />
                        </div>
                    </div>
                </Container>
            </div>
        </StyledPopularSellers>
    )
}

export default PopularSellers;