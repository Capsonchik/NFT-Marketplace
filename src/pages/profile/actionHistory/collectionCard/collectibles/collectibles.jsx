import {StyledCollectionCard} from '../collection-card.styled'
import {ContainerFlex} from '../../../../../globalStyled/styled.global'
import {useContext} from 'react'
import CardContext from '../../../../../context'
import Card from '../../../../../components/card/card'


export const Collectibles = () => {
  const DataContext = useContext(CardContext)

  const getCards = (cards) => {
    return cards.slice(2, cards.length).map(element => {
      return (
        <div key={element.id} className="cards">
          <Card data={element}/>
        </div>
      )
    })

  }
  return (
    <StyledCollectionCard>
      <ContainerFlex>
        <div className="collectibles-flex">
          {getCards(DataContext)}
        </div>
      </ContainerFlex>
    </StyledCollectionCard>
  )
}