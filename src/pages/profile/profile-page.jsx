import { StyledProfilePage } from './profile-page.styled';
import { SectionEditBtn } from './sectionEditBtn/section-edit-btn';
import { CardUser } from '../../components/cardUser/card-user';
import {Navigation} from './navigation/navigation.jsx';
import {ContainerFlex, FlexBoxColumn} from '../../globalStyled/styled.global';
import {CollectionCardOnSale} from './collectionCard/collection-card-on-sale';
import Card from '../../components/card/card';


export const ProfilePage = ({users, cards}) => {
  const user = users.find(user => user.id === 1)

  const card = cards.slice(cards.length - 3, cards.length).map(element => {
    return(
        <div key={element.id} className="card">
          <Card data={element}/>
        </div>
    )
  })

    return(
        <StyledProfilePage>
            <SectionEditBtn />
            <ContainerFlex>
              <CardUser user={user}/>
              <FlexBoxColumn>
                <Navigation/>
                <CollectionCardOnSale card={card}/>
              </FlexBoxColumn>
            </ContainerFlex>
        </StyledProfilePage>
    )
}