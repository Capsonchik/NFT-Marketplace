import {StyledCollectionCard} from '../collection-card.styled'
import {ContainerFlex} from '../../../../../globalStyled/styled.global'
import {useContext} from 'react'
import CardContext from '../../../../../context'
import Card from '../../../../../components/card/card'


export const Followers = () => {
  const DataContext = useContext(CardContext)

  const getCards = (cards) => {
    return cards.slice(9, 12).map(element => {
      return (
        <div key={element.id} className='card'>
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