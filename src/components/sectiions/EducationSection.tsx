import React from 'react';

const EducationSection: React.FC = () => {
  return (
    <section className='bg-white rounded-2xl p-10 shadow-md border border-slate-200' id='education'>
      <div className='mb-8'>
        <h2 className='text-4xl font-bold text-indigo-600 mb-2 flex items-center gap-3'>
          📚 교육 배경
        </h2>
        <p className='text-slate-600 text-lg'>
          컴퓨터공학 기반으로 AI 전문 교육과정을 수료했습니다.
        </p>
      </div>

      <div className='relative pl-8'>
        <div className='absolute left-0 top-0 bottom-0 w-0.5 bg-indigo-600'></div>

        <div className='relative mb-8 pl-8'>
          <div className='absolute left-[-1rem] top-2 w-3 h-3 bg-indigo-600 rounded-full border-4 border-white shadow-md'></div>
          <div className='flex justify-between items-start mb-2'>
            <div>
              <h3 className='text-lg font-semibold text-slate-800'>컴퓨터공학과 학사</h3>
              <p className='text-indigo-600 font-medium'>서울과학기술대학교</p>
            </div>
            <span className='bg-slate-50 text-slate-600 px-3 py-1 rounded-xl text-sm'>
              2015.03 - 2023.06
            </span>
          </div>
        </div>

        <div className='relative mb-8 pl-8'>
          <div className='absolute left-[-1rem] top-2 w-3 h-3 bg-indigo-600 rounded-full border-4 border-white shadow-md'></div>
          <div className='flex justify-between items-start mb-2'>
            <div>
              <h3 className='text-lg font-semibold text-slate-800'>AI 웹서비스 자바풀스택</h3>
              <p className='text-indigo-600 font-medium'>Spring Boot, React 기반 Full-Stack 개발</p>
            </div>
            <span className='bg-slate-50 text-slate-600 px-3 py-1 rounded-xl text-sm'>
              2023.08 - 2024.03
            </span>
          </div>
        </div>

        <div className='relative pl-8'>
          <div className='absolute left-[-1rem] top-2 w-3 h-3 bg-indigo-600 rounded-full border-4 border-white shadow-md'></div>
          <div className='flex justify-between items-start mb-2'>
            <div>
              <h3 className='text-lg font-semibold text-slate-800'>생성형 AI활용 인재 양성과정</h3>
              <p className='text-indigo-600 font-medium'>
                LLM 파인튜닝, LangGraph, VectorDB 집중 학습
              </p>
            </div>
            <span className='bg-slate-50 text-slate-600 px-3 py-1 rounded-xl text-sm'>
              2025.05 - 2025.07
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
