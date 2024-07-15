import React, { useState } from 'react';
import StatsItem from './StatsItem';
import { statsData } from 'data/dashboard/crm';
import { Card } from 'react-bootstrap';


const CrmStats = () => {
  const [stats] = useState(statsData("fs-1"));
  return (
    <div className="row row-cols-1 row-cols-lg-3 g-3 flex-fill">
      {stats.map((stat, index) => (
        <div key={stat.id} className="col">
              <StatsItem stat={stat} />
        </div>
      ))}
    </div>
  );
};

export default CrmStats;
