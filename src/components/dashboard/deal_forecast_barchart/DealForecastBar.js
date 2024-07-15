import React, { useState } from 'react';
import { Card, } from 'react-bootstrap';
import StatsItem from '../crm_stats/StatsItem';
import { statsData } from 'data/dashboard/crm';


const DealForecastBar = () => {
  const [stats] = useState(statsData("fs-1"));
  const updatedStats = stats.slice(0, 3).slice(0, 2);
  return (
    <Card className="h-100 flex-fill bg-transparent border-0 shadow-none">
      {updatedStats.map((stat, index) => (
        <Card.Body key={stat.id} className={`m-0 p-0 ${index % 2 == 0 ? "mb-3" : ""}`}>
          <StatsItem stat={stat} deal_type="deal_forecast" index={index} />
        </Card.Body>
      ))}
    </Card>
  );
};

export default DealForecastBar;
