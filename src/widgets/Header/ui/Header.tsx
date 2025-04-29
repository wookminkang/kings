import React from 'react';
import { Link } from 'react-router-dom';
import { LoginButton } from '@/features/auth/ui/LoginButton/LoginButton';

export const Header = () => {
  return (
    <header className="header">
      <div className="header-container">
        <div className="logo">
          <Link to="/">
            <img src="/logo.png" alt="Kings Rock" />
          </Link>
        </div>
        <nav className="main-nav">
          <ul>
            <li><Link to="/club">클럽안내</Link></li>
            <li><Link to="/course">코스안내</Link></li>
            <li><Link to="/membership">이용안내</Link></li>
            <li><Link to="/reservation">인터넷예약</Link></li>
            <li><Link to="/community">커뮤니티</Link></li>
          </ul>
        </nav>
        <LoginButton />
      </div>
    </header>
  );
}; 