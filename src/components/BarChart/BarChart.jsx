import React from 'react';
import { Bar } from 'react-chartjs-2';
import { registerables, Chart } from 'chart.js';
import { getCounts } from '../../actions/actions';
import { capitalizeWord } from '../../utils/utils';

function BarChart() {
  Chart.register(...registerables);
  const counts = getCounts();

  const data = {
    labels: Object.keys(counts).map((name) => capitalizeWord(name)),
    datasets: [
      {
        label: 'Counts',
        data: Object.values(counts).map((countData) => countData.count),
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(255, 159, 64, 0.2)',
          'rgba(255, 205, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
        ],
        borderColor: [
          'rgb(255, 99, 132)',
          'rgb(255, 159, 64)',
          'rgb(255, 205, 86)',
          'rgb(75, 192, 192)',
        ],
        borderWidth: 1,
      },
    ],
  };

  return (
    <div className="my-4">
      <Bar data={data} />
    </div>
  );
}

export default BarChart;
