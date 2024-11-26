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
    <div className='drop-shadow-xl flex w-full h-12 bg-gray-100 border border-gray-300 shadow-inner overflow-hidden mx-auto my-5 relative'>
      {['short', 'medium', 'long'].map((type) => (
        <BarSection key={type} type={type} percentage={percentages[type]} />
      ))}
      {total === 0 && (
        <p className="text-gray-500 text-sm italic absolute inset-0 flex items-center justify-center">
          Add throws to see distribution
        </p>
      )}
    </div>
  );
};

export default BarChart;
