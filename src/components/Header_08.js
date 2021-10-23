import React from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from '../assets/crown.svg';
import './Header_08.scss';

const Header_08 = () => {
  return (
    <div>
      <div className='header'>
        <Link to='/' className='logo-container'>
          <Logo />
        </Link>
        <div className='options'>
          <Link to='/shop_08' className='option'>
            Shop
          </Link>
          <Link to='/contact_08' className='option'>
            Contact
          </Link>
          <Link to='/signin_08' className='option'>
            Sign In
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header_08;
