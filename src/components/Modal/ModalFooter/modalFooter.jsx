import './modalFooter.scss'

export default function ModalFooter(props) {
  const { children } = props

  return <>{children && <div className='container-btn'>{children}</div>}</>
}
