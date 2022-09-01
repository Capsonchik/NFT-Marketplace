import {useEffect} from 'react'
import {useLocation, useNavigate} from 'react-router-dom'
import {
  ContainerFlex,
  FlexBoxColumn
} from '../../globalStyled/styled.global'
import {StyledProfilePage} from './profile-page.styled'
import {SectionEditBtn} from './sectionEditBtn/section-edit-btn'
import {CardUser} from '../../components/cardUser/card-user'
import {ActionHistory} from './actionHistory/action-history'


export const ProfilePage = () => {
  const location = useLocation()
  const navigate = useNavigate()


  useEffect(() => {
    if (location.pathname === '/profile') {
      navigate('/profile/on-sale')
    }
  }, [location, navigate])


  return (
    <StyledProfilePage>
      <SectionEditBtn/>
      <ContainerFlex>
        <CardUser/>
        <FlexBoxColumn>
          <ActionHistory/>
        </FlexBoxColumn>
      </ContainerFlex>
    </StyledProfilePage>
  )
}