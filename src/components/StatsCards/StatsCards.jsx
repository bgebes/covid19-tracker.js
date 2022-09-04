import React from 'react';
import StatsCard from '../StatsCard/StatsCard';
import { getCounts } from '../../actions/actions';

function StatsCards() {
  const counts = Object.values(getCounts());

  return (
    <div className="mt-4 d-flex justify-content-center align-items-center">
      {counts.map((data, index) => (
        <StatsCard key={index} data={data} />
      ))}
    </div>
  );
}

export default StatsCards;
