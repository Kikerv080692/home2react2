import Button from '../../../ui/Button/Button'
import Search from '../SearchBar/search'
import './nav.scss'
import Cart from '../../../assets/images/cart.svg'
import starY from '../../../assets/images/starY24.png'
import {Link, useLocation} from 'react-router-dom'

const Nav = (props) => {
  const { count, favorite } = props
  const location = useLocation()


  return (
    <div className='menu'>
      <nav className='nav'>
        <Search placeholder='пошук товару' />
        <div className='containet-btn'>
          {
            location.pathname === '/' ? null :
                (<Link to='/'>
                  <Button className='button-nav'>
                    Home
                  </Button>
                </Link>)
          }

          <Link to='favorite'>
            <Button className='button-nav'>
              <img src={starY} alt='' />
              <span>{favorite}</span>
            </Button>
          </Link>
          <Link to='basket'>
            <Button className='button-nav'>
              <img src={Cart} alt='' />
              <span>{count}</span>
            </Button>
          </Link>
        </div>
      </nav>
    </div>
  )
}

export default Nav
