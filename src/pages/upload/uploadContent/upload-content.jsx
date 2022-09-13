import {StyledUploadPage, UploadButton} from '../upload-page.styled'


export const UploadContent = () => {
  return (
    <StyledUploadPage>
      <div className='upload-header'>
        <p className='upload-subtitle'>
          Upload item
        </p>
        <p className='upload-title'>
          Choose “Single” if you want your collectible to be one of a kind or “Multiple”
          if you want to sell one collectible multiple times
        </p>
      </div>
      <div className='upload-img'>
        <div className='btn-border margin'>
          <img src='/img/picture/create-single.png' alt='create-single'/>
          <UploadButton>Create Single</UploadButton>
        </div>
        <div className='btn-border'>
          <img src='/img/picture/create-multiple.png' alt='create-multiple'/>
          <UploadButton primary>Create Multiple</UploadButton>
        </div>
      </div>
      <p className='upload-footer'>
        We do not own your private keys and cannot access your funds without your confirmation.
      </p>
    </StyledUploadPage>
  )
}