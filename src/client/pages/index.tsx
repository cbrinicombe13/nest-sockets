import React, { useState, useEffect, useRef } from 'react';
import { NextPage } from 'next';
import { Container, Row, Col, Card, Form, Button } from 'react-bootstrap';
import io, { Socket } from 'socket.io-client';

const Home: NextPage = () => {
  const [message, setMessage] = useState('');
  const [chat, setChat] = useState([]);

  const socketRef = useRef<Socket>();

  // @ts-ignore
  useEffect(() => {
    socketRef.current = io('http://localhost:3000');
    socketRef.current.on('message', (msg) => {
        setChat([...chat, msg]);
    });
    return () => socketRef.current.disconnect();
  }, [chat]);

  const handleSubmit = (e) => {
    e.preventDefault();
    socketRef.current.emit('message', message);
  };

  return (
    <Container style={{ padding: 0 }}>
      <Row>
        <Col>
          <Card>
            <Card.Body>
              <Container>
                {chat.map((message, ind) => (
                  <p key={ind}>{message}</p>
                ))}
              </Container>
              <Form onSubmit={handleSubmit}>
                <Row>
                  <Col>
                    <Form.Group>
                      <Form.Label>Message</Form.Label>
                      <Form.Control
                        type="text"
                        value={message}
                        onChange={({ target: { value } }) => setMessage(value)}
                        placeholder="Start typing..."
                        className="mb-3"
                      />
                    </Form.Group>
                    <Button
                      type="submit"
                      variant="secondary"
                      style={{ float: 'right' }}
                    >
                      Send
                    </Button>
                  </Col>
                </Row>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Home;
