import {StyledDiscover} from './discover.styled'
import {Container, Header} from '../globalStyled/styled.global'
import {NavLink, Outlet, useLocation} from 'react-router-dom'

const Discover = () => {

  return (
      <StyledDiscover>
        <Container>
          <Header>Discover</Header>
          <div className="discover-nav-block">
            {/*<div className="discover-nav-block__added">*/}
            {/*  <span>Recently added</span>*/}
            {/*  <img src="/img/icons/circle-arrow-down.png" alt="btn-arw-dwn"/>*/}
            {/*</div>*/}
            {/*<div className="discover-nav-block__added">*/}
            {/*  <span>Recently added</span>*/}
            {/*  <img src="/img/icons/circle-arrow-down.png" alt="btn-arw-dwn"/>*/}
            {/*</div>*/}
            <div className="dropDownBlock">
              <div className="dropDownBlock__add">
                <span>Recently added</span>
                <img src="/img/icons/circle-arrow-down.png" alt="btn-arw-dwn"/>
              </div>
              <div className="dropDownBlock__open hidden">
                <ul>
                  <li>1 week ago</li>
                  <li>1 month ago</li>
                  <li>6 month ago</li>
                  <li>1 year ago</li>
                </ul>
              </div>
            </div>
            <nav className="discover-nav-block__nav">
              <NavLink className="nav-link" to="/">All items</NavLink>
              <NavLink className="nav-link" to="art">Art</NavLink>
              <NavLink className="nav-link" to="game">Game</NavLink>
              <NavLink className="nav-link" to="photography">Photography</NavLink>
              <NavLink className="nav-link" to="music">Music</NavLink>
              <NavLink className="nav-link" to="video">Video</NavLink>
            </nav>
            <button className="discover-nav-block__btn">
              Filter
              <img src="/img/icons/close-icon.png" alt="close-btn-con"/>
            </button>
          </div>
          <div className="discover-sort-block">
            <div className="discover-sort-block__item">
              <span>Highest price</span>
              <img src="/img/icons/circle-arrow-down.png" alt="btn-arw-dwn"/>
            </div>
            <div className="discover-sort-block__item">
              <span>Most liked</span>
              <img src="/img/icons/circle-arrow-down.png" alt="btn-arw-dwn"/>
            </div>
            <div className="discover-sort-block__item">
              <span>Verified only</span>
              <img src="/img/icons/circle-arrow-down.png" alt="btn-arw-dwn"/>
            </div>
            <div className="discover-sort-block__item">
              <span>Price Range</span>
              <img src="/img/icons/circle-arrow-down.png" alt="btn-arw-dwn"/>
            </div>
          </div>
          <div className="discover-cards-block">
            <div className="discover-card">
              {/*{mapCards}*/}
              All items here
              <Outlet/>
            </div>
          </div>
        </Container>
      </StyledDiscover>
  );
}

export default Discover;