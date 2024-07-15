import React from 'react';
import { Card, Form, } from 'react-bootstrap';
import FalconCardHeader from 'components/common/FalconCardHeader';
import MarketingChart from './MarketingChart';

const Marketing = () => {

  return (
    <Card className="h-100 flex-fill">
      <FalconCardHeader
        title="Marketing"
        titleTag="h6"
        className="py-2 bg-transparent"
        light
        endEl={<Form.Select size="sm" className="fs--2  bg-transparent w-auto text-600 border-0 shadow-none" style={{ backgroundSize: "8px" }}>
          <option>Last 7 days</option>
          <option>Last Month</option>
          <option>Last Year</option>
        </Form.Select>}
      />
      <MarketingChart />
    </Card>
  );
};

export default Marketing;
