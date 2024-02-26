import ModalWrapper from './ModalWrapper/ModalWrapper'
import ModalHeader from './ModalHeader/modalHeader'
import ModalFooter from './ModalFooter/modalFooter'
import ModalClose from './ModalClose/modalClose'
import ModalBody from './ModalBody/ModalBody'

import './modal.scss'

export default function Modal(props) {
  const handleClose = (e) => {
    if (e.target === e.currentTarget) {
      props.handlerClose()
    }
  }


  const cancelBtn = (e) => {
    if (e.target === e.currentTarget) {
      props.cancelBtn()
    }
  }

  return (
    <>
      {props.isModal && (
        <div className='modalWrapper' onClick={handleClose}>
          <ModalWrapper>
            <ModalClose handlerClose={props.handlerClose} />
            <ModalHeader>Замовлення</ModalHeader>
            <ModalBody>Ваш товар</ModalBody>
            <ModalFooter >
              <button onClick={cancelBtn} className="btn-cancel">
                Відмінити
              </button>
              <button onClick={props.addToBasket} className="btn-add">Додати</button>
            </ModalFooter>
          </ModalWrapper>
        </div>
      )}
    </>
  )
}
