import React from 'react';

const Navigation: React.FC = () => {
  const handleScrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className='fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-xl border-b border-slate-200 z-50 py-4'>
      <div className='max-w-7xl mx-auto px-8 flex justify-between items-center'>
        <div className='text-2xl font-bold text-indigo-600'>이재학 이력서</div>
        <div className='hidden md:flex gap-8'>
          <button onClick={() => handleScrollTo('projects')} className='nav-link'>
            프로젝트
          </button>
          <button onClick={() => handleScrollTo('skills')} className='nav-link'>
            기술
          </button>
          <button onClick={() => handleScrollTo('education')} className='nav-link'>
            교육
          </button>
          <button onClick={() => handleScrollTo('contact')} className='nav-link'>
            연락처
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
