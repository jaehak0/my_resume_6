import React from 'react';

const skillMapping: (skills: Array<string>) => React.ReactNode[] = (skills: Array<string>) => {
  return skills.map((skill: any) => {
    return <span className='skill-tag'>{skill}</span>;
  });
};

const Sidebar: React.FC = () => {
  return (
    <aside className='sidebar'>
      {/* Contact Info */}
      <div className='sidebar-section' id='contact'>
        <h3 className='sidebar-title'>📞 연락처</h3>
        <div className='flex flex-col gap-4'>
          <div className='contact-item'>📧 jack1087902@gmail.com</div>
          <a href='tel:010-5745-7180' className='contact-item'>
            📱 010-5745-7180
          </a>
          <a href='https://github.com/jaehak0' className='contact-item'>
            💻 GitHub <span className='pdf-only'>[https://github.com/jaehak0]</span>
          </a>
          <a
            href='https://curse-swordtail-eb6.notion.site/91a958c8e09441b2b5297a672b81d0db'
            className='contact-item'
          >
            📝 개발 학습 노트{' '}
            <span className='pdf-only'>
              [https://curse-swordtail-eb6.notion.site/91a958c8e09441b2b5297a672b81d0db]
            </span>
          </a>
        </div>
      </div>

      {/* Skills Summary */}
      <div className='sidebar-section' id='skills'>
        <div className='skill-category'>
          <h4 className='skill-category-title'>🤖 AI/ML</h4>
          {/* 데스크톱용 (축약버전) */}
          <div className='skill-items-desktop'>
            {skillMapping(['LLaMA 3.2', 'LangGraph', 'LoRA', 'WandB'])}
            <span className='text-xs text-slate-500 self-center ml-2'>외 5개</span>
          </div>
          {/* 모바일/태블릿용 (전체버전) */}
          <div className='skill-items-mobile'>
            {skillMapping([
              'LLaMA 3.2',
              'LangGraph',
              'LoRA',
              'WandB',
              'RunPod',
              'MediaPipe',
              'YOLOv8',
              'OpenCV',
              'DeepFace',
            ])}
          </div>
        </div>

        <div className='skill-category'>
          <h4 className='skill-category-title'>⚡ Backend</h4>
          {/* 데스크톱용 (축약버전) */}
          <div className='skill-items-desktop'>
            {skillMapping(['FastAPI', 'Spring Boot', 'MySQL', 'ChromaDB'])}
            <span className='text-xs text-slate-500 self-center ml-2'>외 6개</span>
          </div>
          {/* 모바일/태블릿용 (전체버전) */}
          <div className='skill-items-mobile'>
            {skillMapping([
              'FastAPI',
              'Spring Boot',
              'MySQL',
              'ChromaDB',
              'JWT',
              'OAuth',
              'H2',
              'log4jdbc',
              'MyBatis',
              'Flask',
            ])}
          </div>
        </div>

        <div className='skill-category'>
          <h4 className='skill-category-title'>💻 Frontend</h4>
          {/* 데스크톱용 (축약버전) */}
          <div className='skill-items-desktop'>
            {skillMapping(['React', 'TypeScript', 'Tailwind', 'Vite'])}
            <span className='text-xs text-slate-500 self-center ml-2'>외 6개</span>
          </div>
          {/* 모바일/태블릿용 (전체버전) */}
          <div className='skill-items-mobile'>
            {skillMapping([
              'React',
              'TypeScript',
              'Tailwind',
              'Vite',
              'Jotai',
              'TanStack Query',
              'Axios',
              'html2Canvas',
              'jsPDF',
              'Next.js',
            ])}
          </div>
        </div>

        <div className='skill-category'>
          <h4 className='skill-category-title'>📊 Data</h4>
          {/* 데스크톱용 (축약버전) */}
          <div className='skill-items-desktop'>
            {skillMapping(['Python', 'NumPy', 'Pandas', 't-SNE'])}
            <span className='text-xs text-slate-500 self-center ml-2'>외 3개</span>
          </div>
          {/* 모바일/태블릿용 (전체버전) */}
          <div className='skill-items-mobile'>
            {skillMapping([
              'Python',
              'NumPy',
              'Pandas',
              't-SNE',
              'Matplotlib',
              'Seaborn',
              'Scikit-learn',
            ])}
          </div>
        </div>

        <div className='skill-category'>
          <h4 className='skill-category-title'>🛠️ DevOps & Tools</h4>
          {/* 데스크톱용 (축약버전) */}
          <div className='skill-items-desktop'>
            {skillMapping(['Git', 'GitHub', 'Notion', 'Jira'])}
            <span className='text-xs text-slate-500 self-center ml-2'>외 3개</span>
          </div>
          {/* 모바일/태블릿용 (전체버전) */}
          <div className='skill-items-mobile'>
            {skillMapping(['Git', 'GitHub', 'Notion', 'Jira', 'Gradle', 'Oracle DB', 'QDrant'])}
          </div>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
