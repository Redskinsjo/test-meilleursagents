import Logo from 'front/assets/images/logo.png';
import React from 'react';
import { BsEnvelope } from 'react-icons/bs';
import { MdOutlineKeyboardArrowDown, MdOutlineKeyboardArrowUp } from 'react-icons/md';
import { HeaderProps, Option } from './types';
import { useNavigate } from 'react-router-dom';
import { RightPartHeader } from './index.styled';

const Header = ({
  agencies,
  setSelectedAgencyId,
  count,
  selectedAgencyId,
}: HeaderProps) => {
  const navigate = useNavigate();
  return (
    <div
      style={{
        boxShadow: '5px 5px 10px 0 #c7c7c7',
        height: 90,
        padding: 15,
        boxSizing: 'border-box',
        display: 'flex',
        justifyContent: 'space-between',
        gridArea: 'header',
        maxWidth: '100vw',
      }}>
      <img src={Logo} alt="logo" style={{ objectFit: 'cover', height: '100%' }} />
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <RightPartHeader count={count}>
          <BsEnvelope style={{ color: 'white', fontSize: 20 }} />
          <span
            style={{
              fontSize: 18,
              color: 'white',
              position: 'relative',
              bottom: '0.5px',
            }}
            data-test="messages-counter">
            {count}
          </span>
        </RightPartHeader>
        <div style={{ display: 'flex', alignItems: 'center', margin: '0px 20px' }}>
          <select
            style={{
              padding: '0px 10px',
              width: 90,
              height: 24,
              appearance: 'none',
              borderTopLeftRadius: 5,
              borderBottomLeftRadius: 5,
              outline: 'none',
              border: '1px solid #c7c7c7',
              boxShadow: '1px 1px 0.5px 0 #c7c7c7',
            }}
            defaultValue={selectedAgencyId}
            onChange={(e) => {
              setSelectedAgencyId(e.target.value);
              navigate(`/realtors/${e.target.value}`);
            }}>
            {agencies.map((opt: Option) => (
              <option key={opt.id} value={opt.id}>
                Agence {opt.name.slice(-1)}
              </option>
            ))}
          </select>
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              height: 24,
              width: 20,
              background: '#0088ff',
              borderTopRightRadius: 5,
              borderBottomRightRadius: 5,
              boxShadow: '1px 1px 0.5px 0 #0088ff',
            }}>
            <MdOutlineKeyboardArrowUp style={{ color: 'white', width: 20 }} />
            <MdOutlineKeyboardArrowDown style={{ color: 'white', width: 20 }} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
