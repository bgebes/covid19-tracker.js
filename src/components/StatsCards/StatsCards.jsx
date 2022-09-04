import React from 'react';
import StatsCard from '../StatsCard/StatsCard';
import { getCounts, getInformations } from '../../actions/actions';

function StatsCards() {
  const counts = Object.values(getCounts());
  const { error } = getInformations();

  return (
    <div className="my-4">
      {error && <div className="text-danger text-center my-2">{error}</div>}
      <div className="d-flex justify-content-center align-items-center">
        {counts.map((data, index) => (
          <StatsCard key={index} data={data} />
        ))}
      </div>
    </div>
  );
}

export default StatsCards;
