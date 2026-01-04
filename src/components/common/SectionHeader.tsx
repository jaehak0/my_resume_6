import React from 'react';

interface SectionHeaderProps {
  icon: string;
  title: string;
  description: string;
}

const SectionHeader: React.FC<SectionHeaderProps> = ({ icon, title, description }) => {
  return (
    <div className='mb-8'>
      <h2 className='text-4xl font-bold text-indigo-600 mb-2 flex items-center gap-3'>
        {icon} {title}
      </h2>
      <p className='text-slate-600 text-lg'>{description}</p>
    </div>
  );
};

export default SectionHeader;
