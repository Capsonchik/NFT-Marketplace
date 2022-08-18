import {NotificationModal} from '../notificationModal/notification-modal';
import {useState} from 'react';
import styled from 'styled-components';

const StyledModal = styled.div`
  .modal-backdrop {
    position: absolute;
    top: 0;
    left: 0;
    background: transparent;
    height: 100%;
    width: 100vw;
  }
`

export const Modal = () => {
  const [showModal,setShowModal] = useState(false)

  return (
    <StyledModal>
      <button onClick={ () => setShowModal(true) } className='img'>
        <img src='/img/icons/bell.png' alt='bell'/>
      </button>
      { showModal &&  (
        <div>
          <div className='modal-backdrop' onClick={() => setShowModal(false)}></div>
          <NotificationModal />
        </div>
      )}
    </StyledModal>

  )
}