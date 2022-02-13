import React from 'react';
import { MessageData } from '../Message/types';
import { MessageIcon } from '../Message/index.styled';
import { RiMessage2Fill } from 'react-icons/ri';
import {
  BsEnvelopeFill,
  BsEnvelopeOpenFill,
  BsTelephonePlusFill,
  BsTelephoneFill,
} from 'react-icons/bs';
import { formatMsgTitle, formatMsgContactPhoneNumber } from '../../utils/message';
import moment from 'moment/min/moment-with-locales';
import { formatDateForDetailedMessage } from '../../utils/messageDetailed';

interface MessageDetailedProps {
  data: MessageData | undefined;
}

const MessageDetailed = ({ data }: MessageDetailedProps) => {
  return (
    <div
      style={{
        height: 'calc(100vh - 90px)',
        position: 'sticky',
        top: 30,
      }}>
      <div
        style={{
          padding: '20px 15px 25px 15px',
          display: 'grid',
          gridTemplateColumns: '40px 250px 1fr',
          gridTemplateRows: '30px 1fr 1fr',
          gap: 10,
          background: 'white',
          margin: 30,
          marginBottom: 0,
        }}>
        <MessageIcon read={data?.read}>
          {data?.type === 'phone' && !data?.read ? (
            <BsTelephonePlusFill />
          ) : data?.type === 'phone' && data.read ? (
            <BsTelephoneFill />
          ) : data?.type === 'email' && !data?.read ? (
            <BsEnvelopeFill />
          ) : data?.type === 'email' && data?.read ? (
            <BsEnvelopeOpenFill />
          ) : data?.type === 'sms' ? (
            <RiMessage2Fill />
          ) : null}
        </MessageIcon>
        <div
          style={{
            display: 'flex',
            alignItems: 'end',
            justifyContent: 'start',
            fontSize: 22,
            fontFamily: 'Work Sans Bold',
            gridColumnStart: 2,
            gridColumnEnd: 'span 2',
          }}>
          <div>{formatMsgTitle(data)?.split('+')[0]}</div>
        </div>
        <div
          style={{ gridColumnStart: 2, gridRowStart: 2, fontFamily: 'Work Sans Light' }}>
          Email
        </div>
        <div
          style={{ gridColumnStart: 2, gridRowStart: 3, fontFamily: 'Work Sans Light' }}>
          Téléphone
        </div>
        <div style={{ gridColumnStart: 3, gridRowStart: 2, color: '#0000ff' }}>
          {data?.contact.email}
        </div>
        <div style={{ gridColumnStart: 3, gridRowStart: 3, color: '#0000ff' }}>
          {formatMsgContactPhoneNumber(data?.contact.phone)}
        </div>
      </div>
      <div
        style={{
          display: 'grid',
          gridTemplateRows: '30px 40px 1fr',
          gap: 10,
          background: 'white',
          margin: 30,
          padding: 30,
        }}>
        <div
          style={{
            display: 'flex',
            alignItems: 'end',
            justifyContent: 'start',
            fontSize: 22,
            fontFamily: 'Work Sans Bold',
          }}>
          <div>{formatMsgTitle(data)?.split('+')[0]}</div>
        </div>
        <div style={{ fontFamily: 'Work Sans Light', color: '#979797' }}>
          {formatDateForDetailedMessage(data)}
        </div>
        <div style={{ fontFamily: 'Work Sans Regular' }}>{data?.body}</div>
      </div>
    </div>
  );
};

export default MessageDetailed;
