import React from 'react';
import Format from 'format-number';
import { capitalizeWord, parseDate } from '../../utils/utils';
import { getInformations } from '../../actions/actions';

function StatsCard({ data }) {
  const { title, count } = data;
  const { lastUpdate } = getInformations();
  const { date, time } = parseDate(lastUpdate);

  const style_colors = {
    infected: { bgColor: '#afd6fc', bottomColor: '#576afd' },
    recovered: { bgColor: '#dcf5e1', bottomColor: '#6dfa70' },
    death: { bgColor: '#f3d5d5', bottomColor: '#f96a6a' },
    active: { bgColor: '#f3e0c8', bottomColor: '#f2e463' },
  };

  return (
    <div className="me-3">
      <div
        className="shadow rounded border"
        style={{ backgroundColor: style_colors[title].bgColor }}
      >
        <div className="p-4">
          <div className="fw-bold">{capitalizeWord(title)}</div>
          <div className="fs-3">{Format()(count)}</div>
          <div>Last updated at:</div>
          <div className="text-secondary small">
            <div>{date}</div>
            <div>{time}</div>
          </div>
          <div>Number of {title} cases of COVID-19</div>
        </div>
        <div
          className="rounded-bottom"
          style={{
            backgroundColor: style_colors[title].bottomColor,
            height: '0.5em',
          }}
        />
      </div>
    </div>
  );
}

export default StatsCard;
