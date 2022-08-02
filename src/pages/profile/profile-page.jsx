import { CardUser } from "../../components/cardUser/card-user"
import { StyledProfilePage } from "./profile-page.styled"
import { SectionEditBtn } from './sectionEditBtn/section-edit-btn'




export const ProfilePage = () => {
    return(
        <StyledProfilePage>
           <SectionEditBtn />
           <CardUser/>
        </StyledProfilePage>
    )
}