import Logo from 'front/assets/images/logo.png';
import React from 'react';
import { BsEnvelope } from 'react-icons/bs';
import { MdOutlineKeyboardArrowDown, MdOutlineKeyboardArrowUp } from 'react-icons/md';
import { HeaderProps, Option } from './types';

const Header = ({ agencies, setSelectedAgencyId }: HeaderProps) => (
  <div
    style={{
      boxShadow: '5px 5px 10px 0 #c7c7c7',
      height: 90,
      padding: 15,
      boxSizing: 'border-box',
      display: 'flex',
      justifyContent: 'space-between',
      gridArea: 'header',
    }}>
    <img src={Logo} alt="logo" style={{ objectFit: 'cover', height: '100%' }} />
    <div style={{ display: 'flex', alignItems: 'center' }}>
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-around',
          width: 58,
          margin: '0px 30px',
          background: '#0000ff',
          padding: 8,
          borderRadius: 10,
        }}>
        <BsEnvelope style={{ color: 'white', fontSize: 20 }} />
        <span
          style={{
            fontSize: 18,
            color: 'white',
            position: 'relative',
            bottom: '0.5px',
          }}>
          3
        </span>
      </div>
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
          onChange={(e) => setSelectedAgencyId(e.target.value)}>
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

export default Header;
