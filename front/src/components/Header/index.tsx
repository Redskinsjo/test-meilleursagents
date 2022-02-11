import Logo from 'front/assets/logo.png';
import React, { FC } from 'react';

const Header: FC = () => {
  return (
    <div
      style={{
        boxShadow: '5px 5px 10px 0 #c7c7c7',
        height: 90,
        padding: 15,
        boxSizing: 'border-box',
      }}>
      <img src={Logo} alt="logo" style={{ objectFit: 'cover', height: '100%' }} />
    </div>
  );
};

export default Header;
