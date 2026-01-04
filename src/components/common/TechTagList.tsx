import React from 'react';

interface TechTagListProps {
  technologies: string[];
  className?: string;
}

const TechTagList: React.FC<TechTagListProps> = ({ technologies, className = 'tech-item' }) => {
  return (
    <div className='flex flex-wrap gap-2'>
      {technologies.map(tech => (
        <span key={tech} className={className}>
          {tech}
        </span>
      ))}
    </div>
  );
};

export default TechTagList;
