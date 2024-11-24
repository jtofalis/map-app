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
    <div style={{
      width: '100%', 
      padding: '10px',
      display: 'flex',
      minHeight: '30px'}}>

    <PieChart
      style={{ 
        marginInline: 'auto'}}
      data={[
        { title: 'Long', value: longValue, color: '#84a98c' },
        { title: 'Medium', value: mediumValue, color: '#52796f' },
        { title: 'Short', value: shortValue, color: '#354f52' },
      ]}
      />
      </div>
  );
};
export default PieChartByRobinHeIsAmazing;
