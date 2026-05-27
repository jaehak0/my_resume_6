import React from 'react';
import parse from 'html-react-parser';
import type { ProjectDetail } from '@/types/project';

interface ProjectDetailsProps {
  details: ProjectDetail[];
}

const ProjectDetails: React.FC<ProjectDetailsProps> = ({ details }) => {
  return (
    <>
      {details.map((detail, index) => (
        <div key={index} className='project-details'>
          <strong>{detail.category}</strong>
          <br />
          {detail.items.map((item, itemIndex) => (
            <React.Fragment key={itemIndex}>
              • {parse(item)}
              {itemIndex < detail.items.length - 1 && <br />}
            </React.Fragment>
          ))}
        </div>
      ))}
    </>
  );
};

export default ProjectDetails;
