import ModalWrapper from "./ModalWrapper/ModalWrapper";
import ModalHeader from "./ModalHeader/modalHeader";
import ModalFooter from "./ModalFooter/modalFooter"
import ModalClose from "./ModalClose/modalClose";
import ModalBody from "./ModalBody/ModalBody";

import './modal.scss'

export default function Modal(props) {
        const handleClose = (e) => {
            if(e.target === e.currentTarget){
                props.handlerClose()
            }
        }

    return (
        <>
            {props.isModal && <div className="modalWrapper" onClick={handleClose}>
            <ModalWrapper >
                <ModalClose handlerClose={props.handlerClose}/>
                <ModalHeader>
                    {props.header}
                </ModalHeader>
                <ModalBody>
                    {props.body}
                </ModalBody>
                <ModalFooter className="modal-footer-btn"> 
                    {props.footer}
                </ModalFooter>
            </ModalWrapper>
            </div>}
        </>
    )
}