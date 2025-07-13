import React from 'react';

const skillMapping: (skills: Array<string>) => React.ReactNode[] = (skills: Array<string>) => {
  return skills.map((skill: any, index: number) => {
    return (
      <span key={index} className='skill-tag'>
        {skill}
      </span>
    );
  });
};

const Sidebar: React.FC = () => {
  // AI/ML 스킬 리스트
  const aiMlSkills = [
    'LLaMA 3.2',
    'LangGraph',
    'LoRA',
    'Unsloth',
    'HuggingFace',
    'Tavily',
    'Anthropic',
    'OpenAI',
    'YOLOv8',
    'WandB',
    'RunPod',
    'MediaPipe',
    'OpenCV',
    'DeepFace',
  ];
  const aiMlDesktop = aiMlSkills.slice(0, 4);
  const aiMlRemainingCount = aiMlSkills.length - aiMlDesktop.length;

  // Backend 스킬 리스트
  const backendSkills = [
    'FastAPI',
    'Spring Boot',
    'JWT',
    'OAuth',
    'Spring Security',
    'Spring Data JPA',
    'SSE',
    'Pydantic',
    'Selenium',
    'H2',
    'log4jdbc',
    'MyBatis',
    'Flask',
    'Gradle',
    'Oracle DB',
    'MySQL',
    'ChromaDB',
    'QDrant',
  ];
  const backendDesktop = backendSkills.slice(0, 4);
  const backendRemainingCount = backendSkills.length - backendDesktop.length;

  // Frontend 스킬 리스트
  const frontendSkills = [
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
    'Material-UI',
    'React Router Dom',
    'Recoil',
    'Prettier',
    'Recharts',
  ];
  const frontendDesktop = frontendSkills.slice(0, 4);
  const frontendRemainingCount = frontendSkills.length - frontendDesktop.length;

  // Data 스킬 리스트
  const dataSkills = [
    'Python',
    'NumPy',
    'Pandas',
    't-SNE',
    'Matplotlib',
    'Seaborn',
    'Scikit-learn',
  ];
  const dataDesktop = dataSkills.slice(0, 4);
  const dataRemainingCount = dataSkills.length - dataDesktop.length;

  // DevOps & Tools 스킬 리스트
  const devopsToolsSkills = [
    'Git',
    'GitHub',
    'Notion',
    'Jira',
    'Docker',
    'AWS',
    'Vercel',
    'Postman',
    'IntelliJ',
    'PyCharm',
    'WebStorm',
    'DataGrip',
    'CursorAI',
    'Windsurf',
    'Jupyter Notebook',
    'GitHub Desktop',
    'Fork',
  ];
  const devopsToolsDesktop = devopsToolsSkills.slice(0, 4);
  const devopsToolsRemainingCount = devopsToolsSkills.length - devopsToolsDesktop.length;

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
            {skillMapping(aiMlDesktop)}
            <span className='text-xs text-slate-500 self-center ml-2'>
              외 {aiMlRemainingCount}개
            </span>
          </div>
          {/* 모바일/태블릿용 (전체버전) */}
          <div className='skill-items-mobile'>{skillMapping(aiMlSkills)}</div>
        </div>

        <div className='skill-category'>
          <h4 className='skill-category-title'>⚡ Backend</h4>
          {/* 데스크톱용 (축약버전) */}
          <div className='skill-items-desktop'>
            {skillMapping(backendDesktop)}
            <span className='text-xs text-slate-500 self-center ml-2'>
              외 {backendRemainingCount}개
            </span>
          </div>
          {/* 모바일/태블릿용 (전체버전) */}
          <div className='skill-items-mobile'>{skillMapping(backendSkills)}</div>
        </div>

        <div className='skill-category'>
          <h4 className='skill-category-title'>💻 Frontend</h4>
          {/* 데스크톱용 (축약버전) */}
          <div className='skill-items-desktop'>
            {skillMapping(frontendDesktop)}
            <span className='text-xs text-slate-500 self-center ml-2'>
              외 {frontendRemainingCount}개
            </span>
          </div>
          {/* 모바일/태블릿용 (전체버전) */}
          <div className='skill-items-mobile'>{skillMapping(frontendSkills)}</div>
        </div>

        <div className='skill-category'>
          <h4 className='skill-category-title'>📊 Data</h4>
          {/* 데스크톱용 (축약버전) */}
          <div className='skill-items-desktop'>
            {skillMapping(dataDesktop)}
            <span className='text-xs text-slate-500 self-center ml-2'>
              외 {dataRemainingCount}개
            </span>
          </div>
          {/* 모바일/태블릿용 (전체버전) */}
          <div className='skill-items-mobile'>{skillMapping(dataSkills)}</div>
        </div>

        <div className='skill-category'>
          <h4 className='skill-category-title'>🛠️ DevOps & Tools</h4>
          {/* 데스크톱용 (축약버전) */}
          <div className='skill-items-desktop'>
            {skillMapping(devopsToolsDesktop)}
            <span className='text-xs text-slate-500 self-center ml-2'>
              외 {devopsToolsRemainingCount}개
            </span>
          </div>
          {/* 모바일/태블릿용 (전체버전) */}
          <div className='skill-items-mobile'>{skillMapping(devopsToolsSkills)}</div>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
