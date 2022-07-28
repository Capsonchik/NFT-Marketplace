import { StyledSellersSortBlock } from './sellers-sort-block.styled';

const SellersSortBlock = () => {
    const clickToOpen = () => {
        const sellersOpenBlock = document.querySelector('.popular-sellers__open')
        const sellersClickBlock = document.querySelector('.popular-sellers__date-sort')
        sellersClickBlock.classList.toggle('block-open')
        sellersOpenBlock.classList.toggle('active')
    }


    return (
        <StyledSellersSortBlock>
            <div className='sellers-sort-wraper'>
                <div>
                    <h2>Popular</h2>
                    <div className='sellers-sort-left-block'>
                        <span>Sellers</span>
                        <img src='img/icons/popular-sellers-arrow.png' alt="arrow" />
                    </div>
                </div>
                <div className="popular-sellers__open-block">
                    <div onClick={clickToOpen} className='popular-sellers__date-sort'>
                        <span>Today</span>
                        <img src='img/icons/circle-arrow-down.png' alt="arrow"/>
                    </div>
                    <div className="popular-sellers__open">
                        <span>Date Sort</span>
                        <span>Sellers Sort</span>
                        <span>Price Sort</span>
                    </div>
                </div>
            </div>
        </StyledSellersSortBlock>
    );
}

export default SellersSortBlock;