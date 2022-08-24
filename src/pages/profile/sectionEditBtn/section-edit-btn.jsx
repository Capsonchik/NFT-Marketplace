import { EditPhoto, EditProfile } from './section-edit-btn.styled'
import { StyledSectionEditBtn } from './section-edit-btn.styled'
import { Container } from '../../../globalStyled/styled.global'
import { FlexBtn } from './section-edit-btn.styled'
import { Link } from 'react-router-dom'


export const SectionEditBtn = () => {
    return(
        <StyledSectionEditBtn>
            <Container>
                <FlexBtn>
                    <EditPhoto>Edit cover photo
                        <img className='button-img' src='/img/icons/edit-btn-profile-galery.png' alt="gallery" />
                    </EditPhoto>
            
                    <EditProfile>
                        <Link className='button-text' to='/profile/edit'>Edit profile 
                            <img className='button-img__pencil' src='/img/icons/edit-btn-profile-pencil.png' alt="pencil" />
                        </Link>
                    </EditProfile>
                </FlexBtn>
            </Container>
        </StyledSectionEditBtn>
   
    )
}