import React from 'react';
import type { ProjectMetric } from '@/types/project';

interface MetricGridProps {
  metrics: ProjectMetric[];
}

const MetricGrid: React.FC<MetricGridProps> = ({ metrics }) => {
  return (
    <div className='grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8'>
      {metrics.map((metric, index) => (
        <div key={index} className='metric-card'>
          <span className='metric-value'>{metric.value}</span>
          <span className='metric-label'>{metric.label}</span>
        </div>
      ))}
    </div>
  );
};

export default MetricGrid;
