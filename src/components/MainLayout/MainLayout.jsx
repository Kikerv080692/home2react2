import {Outlet} from 'react-router-dom'
import Nav from '../Navigation/Nav/nav'

const MainLayout = (props) => {
  const { count, favorite } = props



  return (
    <>
      <Nav count={count} favorite={favorite} />
      <Outlet />
    </>
  )
}

export default MainLayout
