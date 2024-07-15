import React from 'react';
import { Card, Col, Form, Row } from 'react-bootstrap';
import FalconCardHeader from 'components/common/FalconCardHeader';
import SummaryBarChart from './summaryBarChart';
import classNames from 'classnames';
import Flex from 'components/common/Flex';
import { summaries } from 'data/dashboard/crm';

const Summary = () => {
  return (
    <Card className="h-100 flex-fill">
      <Card.Header className="py-2 bg-transparent">
        <Row className="align-items-center justify-content-between">
          <Col>
            <Flex alignItems="center" className="gap-2 justify-content-lg-start justify-content-between" >
              <h6 className='mb-0'>Summary</h6>
              <Form.Select size="sm" className="fs--2  w-auto bg-soft-success rounded-2 border-0  shadow-none" style={{ backgroundSize: "8px" }}>
                <option value="prospecting">Prospecting</option>
                <option value="negotiation">Negotiation</option>
                <option value="closing">Closing</option>
                <option value="followup">Follow-Up</option>
                <option value="customer_service">Customer Service</option>
              </Form.Select>
            </Flex>
          </Col>
          <Col xs='auto' className='d-none d-lg-block'>
            <div>
              <Form.Select size="sm" className="fs--2  w-auto bg-transparent  text-600 border-0 shadow-none" style={{ backgroundSize: "8px" }}>
                <option>Today</option>
                <option defaultChecked>This week</option>
                <option>This month</option>
              </Form.Select>
            </div>
          </Col>
        </Row>

      </Card.Header>

      <Card.Body className="h-100">
        <SummaryBarChart data={summaries} className="h-100" />
      </Card.Body>
    </Card>
  );
};

export default Summary;
