import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Header = () => {
  const navigate = useNavigate();

  return <nav className="Nav">
    <Link to="/">블랭크</Link>
  </nav>;
};

export default Header;
