import React from 'react';
import logoHeader from '../../img/logo.png';

const Header = () => {
    return (
        <header className="bg-light py-3">
        <div className="container">
         <div className="d-flex">
         <img src={logoHeader} alt="" srcset=""/>
          <form className="form-inline ml-auto">
              <input className="form-control mr-sm-2" placeholder="Search" type="text" name="" id=""/>
              <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
          </form>
         </div>
        </div>
      </header>
    );
};

export default Header;