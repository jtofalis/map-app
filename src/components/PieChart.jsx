import { PieChart } from 'react-minimal-pie-chart';
import { getDistanceCategory } from '../utils/getDistanceCategory';

const PieChartByRobinHeIsAmazing = ({ savedPositions }) => {
  const categories = savedPositions.map((savedPos) => {
    return getDistanceCategory(savedPos);
  });
  const longValue = categories.filter((category) => category === 'long').length;
  const mediumValue = categories.filter((category) => category === 'medium').length;
  const shortValue = categories.filter((category) => category === 'short').length;

  return (
    <PieChart
      data={[
        { title: 'Long', value: longValue, color: '#E38627' },
        { title: 'Medium', value: mediumValue, color: '#C13C37' },
        { title: 'Short', value: shortValue, color: '#6A2135' },
      ]}
    />
  );
};
export default PieChartByRobinHeIsAmazing;
