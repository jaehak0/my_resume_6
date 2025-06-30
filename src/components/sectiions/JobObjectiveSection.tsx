import React from 'react';

const JobObjectiveSection: React.FC = () => {
  return (
    <section className='bg-white rounded-2xl p-10 shadow-md border border-slate-200'>
      <div className='mb-8'>
        <h2 className='text-4xl font-bold text-indigo-600 mb-2 flex items-center gap-3'>
          🎯 희망 포지션
        </h2>
        <p className='text-slate-600 text-lg'>
          AI 기술의 실무 경험과 Full-Stack 개발 역량을 바탕으로 기여하고 싶습니다.
        </p>
      </div>

      <div className='space-y-8'>
        <div className='project-card'>
          <div className='bg-white p-8 border-b border-slate-200 relative'>
            <span className='absolute top-4 right-4 bg-amber-500 text-white px-3 py-2 rounded-xl text-sm font-semibold'>
              1순위
            </span>
            <h3 className='text-2xl font-bold text-indigo-600 mb-2'>AI Engineer</h3>
            <p className='text-slate-600'>LLM 파인튜닝 및 Multi-Agent 시스템 개발 전문성</p>
          </div>
          <div className='p-8'>
            <p className='text-slate-600 leading-relaxed mb-6'>
              LLM 파인튜닝 및 Multi-Agent 시스템 개발 경험, 실제 AI 서비스 배포 및 운영 경험을
              보유하고 있습니다.
            </p>

            <div className='flex flex-wrap gap-2'>
              {[
                'LLaMA 3.2 파인튜닝',
                'LangGraph Multi-Agent',
                'RunPod GPU 배포',
                '프로덕션 운영',
              ].map(tech => (
                <span key={tech} className='tech-item'>
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className='project-card'>
          <div className='bg-white p-8 border-b border-slate-200 relative'>
            <span className='absolute top-4 right-4 bg-amber-500 text-white px-3 py-2 rounded-xl text-sm font-semibold'>
              2순위
            </span>
            <h3 className='text-2xl font-bold text-indigo-600 mb-2'>Frontend Developer</h3>
            <p className='text-slate-600'>
              React 기반 복잡한 UI/UX 구현 및 AI 서비스 인터페이스 전문성
            </p>
          </div>
          <div className='p-8'>
            <p className='text-slate-600 leading-relaxed mb-6'>
              React 기반 복잡한 UI/UX 구현 경험과 AI 서비스의 사용자 인터페이스 전문성을 보유하고
              있습니다.
            </p>

            <div className='flex flex-wrap gap-2'>
              {['React SPA 개발', 'TypeScript', 'AI 연동 특화', '복잡 UI 구현'].map(tech => (
                <span key={tech} className='tech-item'>
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className='project-card'>
          <div className='bg-white p-8 border-b border-slate-200 relative'>
            <span className='absolute top-4 right-4 bg-amber-500 text-white px-3 py-2 rounded-xl text-sm font-semibold'>
              3순위
            </span>
            <h3 className='text-2xl font-bold text-indigo-600 mb-2'>Backend Developer</h3>
            <p className='text-slate-600'>
              FastAPI, Spring Boot 기반 서버 개발 및 데이터베이스 설계
            </p>
          </div>
          <div className='p-8'>
            <p className='text-slate-600 leading-relaxed mb-6'>
              FastAPI, Spring Boot 기반 서버 개발과 데이터베이스 설계 및 API 개발 경험을 보유하고
              있습니다.
            </p>

            <div className='flex flex-wrap gap-2'>
              {['FastAPI AI 서버', 'Spring Boot', 'Database 설계', 'API 설계'].map(tech => (
                <span key={tech} className='tech-item'>
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default JobObjectiveSection;
