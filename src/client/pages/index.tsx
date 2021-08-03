import React from 'react';
import { NextPage } from 'next';
import { Container, Row, Col, Card } from 'react-bootstrap';

const Home: NextPage = () => {
  return (
    <Container fluid>
      <Row>
        <Col>
          <Card>
            <Card.Body>Hello World!</Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Home;
