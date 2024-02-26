import './modalWrapper.scss'

export default function ModalWrapper(props) {
  const {children} = props
  return <div className="container-wrapper">{children}</div>
}
