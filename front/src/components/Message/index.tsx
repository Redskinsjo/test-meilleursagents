import React from 'react';
import { RiMessage2Fill } from 'react-icons/ri';
import {
  BsEnvelopeFill,
  BsEnvelopeOpenFill,
  BsTelephonePlusFill,
  BsTelephoneFill,
} from 'react-icons/bs';
import { MessageContainer, MessageDate, MessageIcon } from './index.styled';
import { formatMsgTitle, formatMsgDate, msgType } from '../../utils/message';
import LinesEllipsis from 'react-lines-ellipsis';
import { MessageProps } from './types';
import { useNavigate, useParams } from 'react-router-dom';

const Message = ({
  data,
  setSelectedMessageId,
  selectedAgencyId,
  updateMessage,
}: MessageProps) => {
  const navigate = useNavigate();
  const params = useParams();

  const regex = /(?<=#)[0-9]{5}\s/g;
  const messageId: string | null = data.body.match(regex)[0];

  return (
    <MessageContainer
      read={data.read}
      onClick={async () => {
        updateMessage(data?.id);
        setSelectedMessageId(String(data.id));
        navigate(`/realtors/${selectedAgencyId}/messages/${data.id}`);
      }}
      className="message"
      data-test={data.read ? 'read' : 'unread'}
      data-id={messageId}>
      <MessageIcon read={data.read}>
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
          fontWeight: 900,
        }}>
        <div style={{ marginRight: 5 }}>{formatMsgTitle(data)?.split('+')[0]}</div>
        <div style={{ fontFamily: 'Oxygen Regular', fontSize: 19, fontWeight: 500 }}>
          {formatMsgTitle(data)?.split('+')[1]}
        </div>
      </div>
      <MessageDate read={data.read}>{formatMsgDate(data)}</MessageDate>
      <div
        style={{
          gridRowStart: 2,
          gridColumnStart: 2,
          gridColumnEnd: 'span 2',
          fontSize: 17,
        }}>
        {msgType(data.type)} sur votre vitrine Meilleurs Agents
      </div>
      <LinesEllipsis
        text={data.body}
        ellipsis="..."
        trimRight
        basedOn="words"
        style={{
          gridRowStart: 3,
          gridColumnStart: 2,
          gridColumnEnd: 'span 2',
          fontFamily: 'Oxygen Light',
          color: '#979797',
        }}
      />
    </MessageContainer>
  );
};

export default Message;
