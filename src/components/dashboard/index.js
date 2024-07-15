import React from 'react';
import { Col, Row } from 'react-bootstrap';
import CrmStats from './crm_stats/CrmStats';
import Marketing from './marketing/Marketing';
import DealForecastBar from './deal_forecast_barchart/DealForecastBar';
import Summary from './sales_summary/summary';
import RecentOrders from './recent_orders/RecentOrders';
import { files } from 'data/dashboard/crm';

const Crm = () => {
  return (
    <>
      <Row className="g-3 mb-3">
        <Col className="d-flex">
          <CrmStats />
        </Col>
      </Row>
      <Row className='g-3'>
        <Col md={8} className="d-flex flex-column">
          <Row className='g-3 mb-3'>
            <Col className="d-flex">
              <Marketing />
            </Col>
            <Col className="d-flex">
              <DealForecastBar />
            </Col>
          </Row>
          <Row className="flex-grow-1">
            <Col className="d-flex">
              <Summary  />
            </Col>
          </Row>
        </Col>
        <Col className='d-flex'>
          <RecentOrders files={files} className="flex-fill scrollbar" />
        </Col>
      </Row>
    </>
  );
};

export default Crm;
