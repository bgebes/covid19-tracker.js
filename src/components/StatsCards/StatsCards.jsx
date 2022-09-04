import React from 'react';
import StatsCard from '../StatsCard/StatsCard';

function StatsCards() {
  const temp = [0, 1, 2, 3];

  return (
    <div className="mt-4 d-flex justify-content-center align-items-center">
      {temp.map((v, index) => (
        <StatsCard key={index} />
      ))}
    </div>
  );
}

export default StatsCards;
