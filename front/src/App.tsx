import React, { useEffect, useState } from 'react';
import Header from './components/Header';
import axios, { AxiosResponse } from 'axios';
import { MessageData } from 'components/Message/types';
import Message from 'components/Message';
import MessageDetailed from 'components/MessageDetailed';
import { useParams } from 'react-router-dom';

const App = () => {
  const params = useParams();
  const [selectedAgencyId, setSelectedAgencyId] = useState<string | undefined>(
    params.realtorId,
  );
  const [agencies, setAgencies] = useState([]);
  const [selectedMessageId, setSelectedMessageId] = useState<string | undefined>(
    params.messageId,
  );
  const [messages, setMessages] = useState([]);
  const [singleMessage, setSingleMessage] = useState(undefined);
  const [loading, setLoading] = useState(true);

  const fetchAgencies = async () => {
    try {
      const result: AxiosResponse = await axios.get('http://localhost:8080/realtors');
      if (result.status === 200) {
        // const agencyId = String(result.data[0].id);
        setAgencies(result.data);
        setSelectedAgencyId(params.realtorId);
      }
    } catch (err: any) {
      console.log(err.response);
    }
  };

  const fetchMessages = async () => {
    try {
      const result = await axios.get(
        `http://localhost:8080/realtors/${selectedAgencyId}/messages`,
      );
      if (result.status === 200) {
        setMessages(result.data);
        setLoading(false);
      }
    } catch (err: any) {
      console.log(err.response);
    }
  };

  const fetchMessageDetails = async () => {
    try {
      const result = await axios.get(
        `http://localhost:8080/realtors/${selectedAgencyId}/messages/${selectedMessageId}`,
      );
      if (result.status === 200) {
        if (params.messageId) {
          setSingleMessage(result.data);
        }
      }
    } catch (err: any) {
      console.log(err.response);
    }
  };

  const updateMessage = async (msgId: number | undefined): Promise<AxiosResponse> => {
    const result = await axios({
      url: `http://localhost:8080/realtors/${selectedAgencyId}/messages/${msgId}`,
      method: 'PATCH',
      data: { read: true },
    });
    return result;
  };

  console.log(singleMessage);

  useEffect(() => {
    fetchAgencies();
  }, []);

  useEffect(() => {
    fetchMessages();
    setSingleMessage(undefined);
    setSelectedMessageId(undefined);
  }, [selectedAgencyId]);

  useEffect(() => {
    fetchMessages();
    fetchMessageDetails();
  }, [selectedMessageId]);

  useEffect(() => {
    if (selectedMessageId) {
      updateMessage(Number(selectedMessageId));
      fetchMessages();
      fetchMessageDetails();
    }
  }, [params.messageId]);

  return !loading ? (
    <div
      style={{
        height: '100%',
        width: '100%',
        display: 'grid',
        gridTemplateColumns: '550px 2fr',
        gridTemplateRows: '90px 1fr',
        gap: 10,
        gridTemplateAreas: `
        "header header"
        "messages details"
        `,
      }}>
      <Header
        agencies={agencies}
        setSelectedAgencyId={setSelectedAgencyId}
        count={messages.filter((msg: MessageData) => !msg.read).length}
        selectedAgencyId={selectedAgencyId}></Header>
      <div style={{ gridArea: 'messages' }}>
        {messages.map((msg: MessageData) => (
          <Message
            key={msg.id}
            data={msg}
            setSelectedMessageId={setSelectedMessageId}
            selectedAgencyId={selectedAgencyId}
            updateMessage={updateMessage}
          />
        ))}
      </div>
      <div
        style={{
          background: '#f7f7f7',
          gridArea: 'details',
        }}>
        {singleMessage && <MessageDetailed data={singleMessage} />}
      </div>
    </div>
  ) : null;
};

export default App;
