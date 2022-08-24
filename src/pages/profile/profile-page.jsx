import { useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { ContainerFlex,
        FlexBoxColumn } from '../../globalStyled/styled.global';
import { StyledProfilePage } from './profile-page.styled';
import { SectionEditBtn } from './sectionEditBtn/section-edit-btn';
import { CardUser } from '../../components/cardUser/card-user';
import { ActionHistory } from './actionHistory/action-history'


export const ProfilePage = ({users}) => {
  const location = useLocation();
  const navigate = useNavigate();
  const user = users.find(user => user.id === 1)


  useEffect(()=> {
    if(location.pathname === '/profile'){
      navigate('/profile/on-sale');
    }}, [location, navigate]);


    return(
        <StyledProfilePage>
            <SectionEditBtn />
            <ContainerFlex>
              <CardUser user={user}/>
              <FlexBoxColumn>
                <ActionHistory/>
              </FlexBoxColumn>
            </ContainerFlex>
        </StyledProfilePage>
    )
}