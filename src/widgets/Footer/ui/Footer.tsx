import React from 'react';

export const Footer: React.FC = () => (
  <footer className="footer">
    <div className="footer__top">
      <img src="/logo_white.png" alt="King's Rock Country Club" className="footer__logo" />
      <ul className="footer__menu">
        <li>이용약관</li>
        <li>인터넷서비스 이용약관</li>
        <li><b>개인정보처리방침</b></li>
        <li>영상정보처리기기 운영 관리방침</li>
      </ul>
    </div>
    <div className="footer__info">
      <div>
        사업자등록번호. 106-87-09839<br />
        (27189) 충북 제천시 내토로7길 136 (천남동) 킹즈락 컨트리클럽
      </div>
      <div>
        TEL. 043-640-9000<br />
        FAX. 043-644-8000
      </div>
    </div>
    <div className="footer__copyright">
      <div>
        COPYRIGHTS (C) KING'S ROCK CC ALL RIGHTS RESERVED<br />
        Frontend Version:0.7.13<br />
        Backend Version:1.2.0(1439)
      </div>
      <div className="footer__sns">
        <a href="#"><img src="/icon_insta.svg" alt="인스타그램" /></a>
        <a href="#"><img src="/icon_facebook.svg" alt="페이스북" /></a>
        <a href="#"><img src="/icon_youtube.svg" alt="유튜브" /></a>
        <a href="#"><img src="/icon_blog.svg" alt="블로그" /></a>
      </div>
    </div>
  </footer>
); 