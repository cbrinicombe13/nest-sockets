import React, { useState, useRef } from 'react';
import { Row, Col, Form, Button } from 'react-bootstrap';

export default function MessageForm(props) {
  const [message, setMessage] = useState('');

  const inputRef = useRef<HTMLInputElement>();

  const handleSubmit = (e, message) => {
    e.preventDefault();

    if (message === '') {
      return;
    }

    props.onSubmit(message);
    inputRef.current.focus();
    setMessage('');
  };

  return (
    <Form onSubmit={(e) => handleSubmit(e, message)}>
      <Row>
        <Col>
          <Form.Group>
            <Form.Label>Message</Form.Label>
            <Form.Control
              ref={inputRef}
              type="text"
              value={message}
              onChange={({ target: { value } }) => setMessage(value)}
              placeholder="Start typing..."
              className="mb-3"
            />
          </Form.Group>
          <Button type="submit" variant="secondary" style={{ float: 'right' }}>
            Send
          </Button>
        </Col>
      </Row>
    </Form>
  );
}
