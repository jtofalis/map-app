import { PieChart } from 'react-minimal-pie-chart';
import { getDistanceCategory } from '../utils/getDistanceCategory';
import React from 'react';


const PieChartByRobinHeIsAmazing = ({ savedPositions }) => {
  const categories = savedPositions.map((savedPos) => {
    return getDistanceCategory(savedPos);
  });
  const longValue = categories.filter((category) => category === 'long').length;
  const mediumValue = categories.filter((category) => category === 'medium').length;
  const shortValue = categories.filter((category) => category === 'short').length;
  const totalValue = longValue + mediumValue + shortValue;
  const longPer = longValue * 100/totalValue
  const mediumPer = mediumValue * 100/totalValue
  const shortPer = shortValue * 100/totalValue
  
  return (
    <div style={styles.barContainer}>
      {shortPer > 0 && (
      <div
        style={{
          ...styles.barSection,
          backgroundColor: '#52796f', // Green for short
          width: `${shortPer}%`,
          position: 'relative', // To position the title inside the div
        }}
      >
      <span style={styles.title}>Short </span>
    </div>
    )}
      {mediumPer > 0 && (
      <div
        style={{
          ...styles.barSection,
          backgroundColor: '#354f5', // Green for medium
          width: `${mediumPer}%`,
          position: 'relative', // To position the title inside the div
        }}
      >
      <span style={styles.title}>Medium </span>
    </div>
    )}
    {longPer > 0 && (
      <div
        style={{
          ...styles.barSection,
          backgroundColor: '#84a98c', // Green for long
          width: `${longPer}%`,
          position: 'relative', // To position the title inside the div
        }}
      >
      <span style={styles.title}>Long </span>
    </div>
    )}

    </div>
  );
};

const styles = {
  barContainer: {
    display: 'flex',
    width: '100%',
    height: '50px',
    backgroundColor: '#f0f0f0',
    border: '1px solid #ccc',
    boxShadow: 'inset 0 0 5px rgba(0, 0, 0, 0.1)',
    overflow: 'hidden',
  },
  barSection: {
    height: '100%',
  },
  title: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    color: 'black', // Or any color you want for the title
  }
};
export default PieChartByRobinHeIsAmazing;




