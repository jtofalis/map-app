import React from 'react';
import { getDistanceCategory } from '../../utils/getDistanceCategory';
import { getDirectionCategory } from '../../utils/getDirectionCategory';
import BarSection from './Section';

const BarChartLength = ({ savedPositions }) => {
  // Calculate categories for distance
  const categoriesDistance = savedPositions.map(getDistanceCategory);
  const countsDistance = {
    short: categoriesDistance.filter((category) => category === 'short').length,
    medium: categoriesDistance.filter((category) => category === 'medium').length,
    long: categoriesDistance.filter((category) => category === 'long').length,
  };

  // Calculate categories for direction
  const categoriesDirection = savedPositions.map(getDirectionCategory);
  const countsDirection = {
    sameThird: categoriesDirection.filter((category) => category === 'sameThird').length,
    crossThird: categoriesDirection.filter((category) => category === 'crossThird').length,
    crossPitch: categoriesDirection.filter((category) => category === 'crossPitch').length,
  };

  // Calculate total counts for distance and direction
  const totalDistance = Object.values(countsDistance).reduce((sum, count) => sum + count, 0);
  const totalDirection = Object.values(countsDirection).reduce((sum, count) => sum + count, 0);

  // Calculate percentages for distance categories
  const percentagesDistance = Object.fromEntries(
    Object.entries(countsDistance).map(([key, value]) => [
      key,
      totalDistance > 0 ? (value * 100) / totalDistance : 0,
    ])
  );

  // Calculate percentages for direction categories
  const percentagesDirection = Object.fromEntries(
    Object.entries(countsDirection).map(([key, value]) => [
      key,
      totalDirection > 0 ? (value * 100) / totalDirection : 0,
    ])
  );

  // JSX rendering
  return (
    <div>
      {/* Distance Bar Chart */}
      <div className='drop-shadow-xl flex w-full h-12 bg-gray-100 border border-gray-300 shadow-inner overflow-hidden mx-auto my-5 relative'>
        {['short', 'medium', 'long'].map((type) => (
          <BarSection key={type} type={type} percentage={percentagesDistance[type]} />
        ))}
        {totalDistance === 0 && (
          <p className="text-gray-500 text-sm italic absolute inset-0 flex items-center justify-center">
            Add throws to see distance distribution
          </p>
        )}
      </div>

      {/* Direction Bar Chart */}
      <div className='drop-shadow-xl flex w-full h-12 bg-gray-100 border border-gray-300 shadow-inner overflow-hidden mx-auto my-5 relative'>
        {['sameThird', 'crossThird', 'crossPitch'].map((type) => (
          <BarSection key={type} type={type} percentage={percentagesDirection[type]} />
        ))}
        {totalDirection === 0 && (
          <p className="text-gray-500 text-sm italic absolute inset-0 flex items-center justify-center">
            Add throws to see direction distribution
          </p>
        )}
      </div>
    </div>
  );
};

export default BarChartLength;
