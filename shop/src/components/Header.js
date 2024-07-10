import React from 'react'
import './Header.css'
import logo from './images/logo.png'

const Header = () => {
  return (
    <section className="search">
      <div className=" col-10 container c_flex">
        <div className="logo width ">
          <h3 className='easy'> EASY CART</h3>
        </div>

        <div className="search-box f_flex">
          <i className="fa fa-search"></i>
          <input type="text" placeholder="Search and hit enter..." />
          
            <span>All Category</span>
         
        </div>

        <div className="icon f_flex width">
          <i className="fa fa-user icon-circle"></i>
          <div className="cart">
            <i i className="fa-solid fa-heart icon-circle"></i>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Header
