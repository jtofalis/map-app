import React from 'react';
import { getDistanceCategory } from '../../utils/getDistanceCategory';
import BarSection from './Section';

const BarChart = ({ savedPositions }) => {
  const categories = savedPositions.map(getDistanceCategory);
  const counts = {
    long: categories.filter((category) => category === 'long').length,
    medium: categories.filter((category) => category === 'medium').length,
    short: categories.filter((category) => category === 'short').length,
  };

  const total = Object.values(counts).reduce((sum, count) => sum + count, 0);

  const percentages = Object.fromEntries(
    Object.entries(counts).map(([key, value]) => [key, total > 0 ? (value * 100) / total : 0]),
  );

  return (
    <div className='drop-shadow-xl max-w-sm flex w-full h-12 bg-gray-100 border border-gray-300 shadow-inner overflow-hidden mx-auto my-5'>
      {['short', 'medium', 'long'].map((type) => (
        <BarSection key={type} type={type} percentage={percentages[type]} />
      ))}
    </div>
  );
};

export default BarChart;
