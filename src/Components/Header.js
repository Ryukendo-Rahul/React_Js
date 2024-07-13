import "./Header.css"
import React from 'react'

const Header = () => {
  const headerStyle={
    backgroundColor:"gray",
    padding:".5 rem",
    margin:".3rem",
    border:"2px solid red"
  };


  return (
   <nav style={headerStyle} >My name is Header</nav> )
};

export default Header;
