import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { HeaderNav, SearchBar, LogoutButton, IconWrapper } from './Styled';
import {
  FiHome,
  FiSend,
  FiPlusSquare,
  FiCompass,
  FiHeart,
} from 'react-icons/fi';
const Header = () => {
  const navigate = useNavigate();

  const Logout = () => {
    try {
      localStorage.removeItem('user');

      alert('로그아웃 완료!');
      navigate('/');
    } catch (err) {
      alert('로그아웃에 실패했습니다.');
      console.log('# Logout Error', err);
    }
  };

  return (
    <HeaderNav className="Nav">
      <Link to="/">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Instagram_logo.svg/800px-Instagram_logo.svg.png?20160616034027"
          alt="Instagram Logo"
          height={50}
          style={{ padding: 5 + 'px' }}
        />
      </Link>
      <SearchBar placeholder="검색"></SearchBar>
      <IconWrapper>
        <FiHome size="30" />
        <FiSend size="30" />
        <FiPlusSquare size="30" />
        <FiCompass size="30" />
        <FiHeart size="30" />
        <LogoutButton onClick={Logout}>Logout</LogoutButton>
      </IconWrapper>
    </HeaderNav>
  );
};

export default Header;
