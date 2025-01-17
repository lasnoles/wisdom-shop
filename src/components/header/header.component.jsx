import { React } from "react";
import './header.style.scss';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { ReactComponent as Logo } from "../../assets/crown.svg";
import { auth } from "../../firebase/firebase.utils";
import CartIcon from "../cart-icon/card-icon.component";
import CartDropdown from '../cart-dropdown/card-dropdown.component';

const Header = ({currentUser, hidden})=>(
    <div className='header'>
      <Link to="/">
        <Logo className='logo'/>
      </Link>

      <div className='options'>
        <Link className='option' to='/shop'>
         SHOP
        </Link>
        <Link className='option' to='/shop'>
         CONTACT
       </Link>
       {
          currentUser? 
          <div className='option' onClick={()=>auth.signOut()}>SIGN OUT</div>
          :
          <Link to="/signIn">SIGN IN</Link>
       }
       <CartIcon />
      </div>
      {
        hidden? null: <CartDropdown />
      }
    </div>
);

const mapStateToProps = ({user:{currentUser}, cart: {hidden}}) => ({
  currentUser,
  hidden
});

export default connect(mapStateToProps)(Header);