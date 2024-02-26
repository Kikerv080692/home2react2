import './button.scss'

export default function Button(props) {
  const { type, className, handlerClick, children } = props

  return (
    <button type={type} className={className} onClick={handlerClick}>
      {children}
    </button>
  )
}
