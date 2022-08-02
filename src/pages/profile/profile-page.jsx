import { StyledProfilePage } from "./profile-page.styled"
import { SectionEditBtn } from './sectionEditBtn/section-edit-btn'
import { CardUser } from "../../components/cardUser/card-user"
import {Navigation} from "./navigation/navigation.jsx";
import {ContainerFlex} from "../../globalStyled/styled.global";


export const ProfilePage = ({users}) => {
  const user = users.find(user => user.id === 1)

    return(
        <StyledProfilePage>
            <SectionEditBtn />
            <ContainerFlex>
              <CardUser user={user}/>
              <Navigation/>
            </ContainerFlex>
        </StyledProfilePage>
    )
}