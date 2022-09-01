import {StyledCollectionCard} from '../collection-card.styled'
import {ContainerFlex} from '../../../../../globalStyled/styled.global'
import {useContext} from 'react'
import CardContext from '../../../../../context'
import Card from '../../../../../components/card/card'


export const OnSale = () => {
  const DataContext = useContext(CardContext)

  const getCards = (cards) => {
    return cards.slice(cards.length - 3, cards.length).map(element => {
      return (
        <div key={element.id} className="card">
          <Card data={element}/>
        </div>
      )
    })

  }
  return (
    <StyledCollectionCard>
      <ContainerFlex>
        <div className='cards-flex'>
          {getCards(DataContext)}
        </div>
      </ContainerFlex>
    </StyledCollectionCard>
  )
}