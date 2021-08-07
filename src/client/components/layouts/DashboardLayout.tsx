import React, { useState, useEffect } from 'react';
import { Container, Row, Col, ListGroup } from 'react-bootstrap';
import { Group } from '../../../shared/interfaces/Group';

export default function DashboardLayout({ children, groups }) {
  const [activeGroup, setActiveGroup] = useState<Group>({
    id: 0,
    name: '',
  });

  useEffect(() => {
    groups.length > 0 && setActiveGroup(groups[0]);
  }, [groups]);

  const handleGroupClick = (e) => {
    setActiveGroup(
      groups.find((group) => group.id.toString() === e.target.id.toString()),
    );
  };

  return (
    <Container fluid className="p-0 vh-100">
      <Row className="h-100">
        <Col className="p-0" md={1}>
          <ListGroup variant="flush">
            {groups.map((group) => (
              <ListGroup.Item
                role="button"
                className="p-3 text-center"
                active={activeGroup.id.toString() === group.id.toString()}
                key={group.id}
                id={group.id.toString()}
                onClick={handleGroupClick}
              >
                {group.name}
              </ListGroup.Item>
            ))}
          </ListGroup>
        </Col>
        <Col className="p-0" md={11}>
          <Row>
            <Col>
              <h1>{activeGroup.name}</h1>
            </Col>
          </Row>
          {children}
        </Col>
      </Row>
    </Container>
  );
}
