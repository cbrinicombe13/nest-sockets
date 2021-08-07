import React, { useState, useEffect, useRef } from 'react';
import { NextPage } from 'next';
import { Container, Card } from 'react-bootstrap';
import io, { Socket } from 'socket.io-client';
import MessageForm from '../components/MessageForm';
import DashboardLayout from '../components/layouts/DashboardLayout';
import ApiService from '../services/ApiService';
import { Group } from '../../shared/interfaces/Group';

const Home: NextPage = () => {
  const [chat, setChat] = useState([]);
  const [groups, setGroups] = useState([]);

  const socketRef = useRef<Socket>();

  const http = new ApiService();

  const getGroups = async () => {
    const groups = await http.request<Group[]>('GET', '/groups');
    setGroups(groups);
  };

  useEffect(() => {
    getGroups();
  }, []);

  // @ts-ignore
  useEffect(() => {
    socketRef.current = io('http://localhost:3000');
    socketRef.current.on('message', (msg) => {
      setChat([...chat, msg]);
    });
    return () => socketRef.current.disconnect();
  }, [chat]);

  const handleSubmit = (msg) => {
    socketRef.current.emit('message', msg);
  };

  return (
    <DashboardLayout groups={groups}>
      <Card>
        <Card.Body>
          <Container>
            {chat.map((message, ind) => (
              <p key={ind}>{message}</p>
            ))}
          </Container>
          <MessageForm onSubmit={handleSubmit} />
        </Card.Body>
      </Card>
    </DashboardLayout>
  );
};

export default Home;
