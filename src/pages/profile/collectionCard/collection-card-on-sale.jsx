import {StyledCollectionCard} from './collection-card.styled';
import {ContainerFlex} from '../../../globalStyled/styled.global';


export const CollectionCardOnSale = ({card}) => {
  return(
    <StyledCollectionCard>
      <ContainerFlex>
        <div className='cards-flex'>{card}</div>
      </ContainerFlex>
    </StyledCollectionCard>
  )
}