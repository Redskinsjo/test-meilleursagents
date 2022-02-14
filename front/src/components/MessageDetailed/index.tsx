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
// import moment from 'moment/min/moment-with-locales';
import { MessageDetailedContainer } from './index.styled';
import { formatDateForDetailedMessage } from '../../utils/messageDetailed';
import { useParams } from 'react-router-dom';
import { MessageDetailedPartOne } from './index.styled';

interface MessageDetailedProps {
  data: MessageData | undefined;
}

const MessageDetailed = ({ data }: MessageDetailedProps) => {
  const params = useParams();
  return (
    <MessageDetailedContainer params={params}>
      <MessageDetailedPartOne>
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
            fontFamily: 'Oxygen Bold',
            gridColumnStart: 2,
            gridColumnEnd: 'span 2',
            fontWeight: 900,
          }}>
          <div>{formatMsgTitle(data)?.split('+')[0]}</div>
        </div>
        <div style={{ gridColumnStart: 2, gridRowStart: 2, fontFamily: 'Oxygen Light' }}>
          Email
        </div>
        <div style={{ gridColumnStart: 2, gridRowStart: 3, fontFamily: 'Oxygen Light' }}>
          Téléphone
        </div>
        <div style={{ gridColumnStart: 3, gridRowStart: 2, color: '#0000ff' }}>
          {data?.contact.email}
        </div>
        <div style={{ gridColumnStart: 3, gridRowStart: 3, color: '#0000ff' }}>
          {formatMsgContactPhoneNumber(data?.contact.phone)}
        </div>
      </MessageDetailedPartOne>
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
            fontFamily: 'Oxygen Bold',
            fontWeight: 900,
          }}>
          <div>{formatMsgTitle(data)?.split('+')[0]}</div>
        </div>
        <div style={{ fontFamily: 'Oxygen Light', color: '#979797' }}>
          {formatDateForDetailedMessage(data)}
        </div>
        <div style={{ fontFamily: 'Oxygen Regular' }} data-test="msg-details-body">
          {data?.body}
        </div>
      </div>
    </MessageDetailedContainer>
  );
};

export default MessageDetailed;
