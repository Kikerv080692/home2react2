import Button from "../../Button/Button";
import Search from "../SearchBar/search";
import "./nav.scss";
import Cart  from '../../../assets/images/cart.svg'
import starY from '../../../assets/images/starY24.png'


const Nav = (props) => {
  const { count, favorite  } = props;
  return (
    <div className="menu">
      <nav className="nav">
        <Search placeholder="пошук товару"/>
        <div className="containet-btn">
          <Button className="button-nav">
             <img src={starY} alt="" />
              <span>{favorite}</span>
          </Button>
          <Button className="button-nav">
             <img src={Cart} alt="" />
              <span>{count}</span>
          </Button>
        </div>
      </nav>
    </div>
  );
};

export default Nav;
