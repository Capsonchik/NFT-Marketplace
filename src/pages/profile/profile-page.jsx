import { StyledProfilePage } from "./profile-page.styled"
import { SectionEditBtn } from './sectionEditBtn/section-edit-btn'
import { CardUser } from "../../components/cardUser/card-user"



export const ProfilePage = ({users}) => {
  const user = users.find(user => user.id === 1)

    return(
        <StyledProfilePage>
           <SectionEditBtn />
           <CardUser user={user}/>
        </StyledProfilePage>
    )
}