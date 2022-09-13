import {StyledEditingHeader} from './edit-header.styled';


export const EditHeader = () => {
  return(
    <StyledEditingHeader>
      <div>
        <h1 className='subtitle-edit'>Edit profile</h1>
        <span className='title-edit'>
          You can set preferred display name, create your profile URL and manage other personal settings.
        </span>
      </div>
    </StyledEditingHeader>
  )
}