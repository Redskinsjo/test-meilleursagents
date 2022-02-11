import React, { useEffect, useState } from 'react';
import Header from './components/Header';
import axios, { AxiosResponse } from 'axios';
import { MessageData } from 'components/Message';
import Message from 'components/Message';

const App = () => {
  const [selectedAgencyId, setSelectedAgencyId] = useState<string>('');
  const [agencies, setAgencies] = useState([]);
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchAgencies = async () => {
    try {
      const result: AxiosResponse = await axios.get('http://localhost:8080/realtors');
      if (result.status === 200) {
        const agencyId = String(result.data[0].id);
        setAgencies(result.data);
        setSelectedAgencyId(agencyId);
      }
    } catch (err) {
      console.log(err);
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
      console.log(err.message);
    }
  };

  useEffect(() => {
    fetchAgencies();
  }, []);

  useEffect(() => {
    fetchMessages();
  }, [selectedAgencyId]);

  return !loading ? (
    <div>
      <Header agencies={agencies} setSelectedAgencyId={setSelectedAgencyId}></Header>
      <div>
        <div>
          {messages.map((msg: MessageData) => (
            <Message key={msg.id} data={msg} />
          ))}
        </div>
        <div></div>
      </div>
    </div>
  ) : null;
};

export default App;
