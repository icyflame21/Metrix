import React from 'react';
import { Card } from 'react-bootstrap';
import FalconCardHeader from 'components/common/FalconCardHeader';
import { RecentOrder } from './recentOrder';

const RecentOrders = ({ files, className }) => {
  return (
    <Card className={className}>
      <FalconCardHeader
        title="Recent Orders"
        titleTag="h6"
        className="py-2 bg-transparent"
        light
      />
      <Card.Body className="pb-0">
        {files.map((file, index) => (
          <RecentOrder
            key={file.id}
            file={file}
            isLast={index === files.length - 1}
          />
        ))}
      </Card.Body>
    </Card>
  );
};

export default RecentOrders;
