import React, { useContext } from 'react';
import './Header.css'
import logo from '../../images/Logo.svg'
import { Link } from 'react-router-dom';
import { AuthContext } from '../Provider/AuthProvider';

const Header = () => {

  const {user, logOut} = useContext(AuthContext)

  const handleLogout = () => {
    
  }

  return (
    <nav className="header">
      <img src={logo} />
      <div>
          <Link to='/'>Shop</Link>
          <Link to='/orders'>Orders</Link>
          <Link to='/inventory'>Inventory</Link>
          <Link to='/login'>Login</Link>
          <Link to='/signup'>Sign Up</Link>
          {user && <span>Welcome{user.displayName}<button onClick={handleLogout}>Sign Out</button></span>}
      </div>
    </nav>
  );
};

export default Header;