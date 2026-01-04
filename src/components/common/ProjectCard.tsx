import React from 'react';

interface ProjectCardProps {
  header: React.ReactNode;
  children: React.ReactNode;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ header, children }) => {
  return (
    <div className='project-card'>
      <div className='bg-white p-8 border-b border-slate-200 relative'>{header}</div>
      <div className='p-8'>{children}</div>
    </div>
  );
};

export default ProjectCard;
