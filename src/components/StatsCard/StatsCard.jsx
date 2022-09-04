import React from 'react';

function StatsCard({ stats }) {
  const style_colors = {
    infected: { bgColor: '#afd6fc', bottomColor: '#576afd' },
    recovered: { bgColor: '#dcf5e1', bottomColor: '#6dfa70' },
    deaths: { bgColor: '#f3d5d5', bottomColor: '#f96a6a' },
    active: { bgColor: '#f3e0c8', bottomColor: '#f2e463' },
  };

  return (
    <div className="mx-3">
      <div
        className="shadow rounded border"
        style={{ backgroundColor: style_colors.recovered.bgColor }}
      >
        <div className="p-4">
          <div className="fw-bold">Recovered</div>
          <div className="fs-3">0</div>
          <div>Last updated at:</div>
          <div className="text-secondary">
            <div>Sun Sep 04 2022</div>
            <div>5:20:50 AM</div>
          </div>
          <div>Number of recoveries from COVID-19</div>
        </div>
        <div
          className="rounded-bottom"
          style={{
            backgroundColor: style_colors.recovered.bottomColor,
            height: '0.5em',
          }}
        />
      </div>
    </div>
  );
}

export default StatsCard;
