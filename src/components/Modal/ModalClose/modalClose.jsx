import './modalClose.scss'

export default function ModalClose(props) {
    const {handlerClose} = props
  return (
    <div className='btn-close'>
      <button onClick={handlerClose}> &times;</button>
    </div>
  )
}
