import React from 'react';
import type { EducationItem } from '@/types/education';
import { EDUCATION_HISTORY } from '@/constants/education';
import SectionHeader from '@components/common/SectionHeader';

const EducationSection: React.FC = () => {
  return (
    <section
      className='education-section force-page-break bg-white rounded-2xl p-10 shadow-md border border-slate-200'
      id='education'
    >
      <SectionHeader
        icon='📚'
        title='교육 배경'
        description='컴퓨터공학 기반으로 AI 전문 교육과정을 수료했습니다.'
      />

      <div className='relative pl-8'>
        <div className='absolute left-0 top-0 bottom-0 w-0.5 bg-indigo-600'></div>

        {EDUCATION_HISTORY.map((item: EducationItem, index: number) => (
          <div
            key={index}
            className={`relative pl-8 ${index < EDUCATION_HISTORY.length - 1 ? 'mb-8' : ''}`}
          >
            <div className='absolute left-[-1rem] top-2 w-3 h-3 bg-indigo-600 rounded-full border-4 border-white shadow-md'></div>
            <div className='flex justify-between items-start mb-2'>
              <div>
                <h3 className='text-lg font-semibold text-slate-800'>{item.degree}</h3>
                <p className='text-indigo-600 font-medium'>{item.institution}</p>
              </div>
              <span className='bg-slate-50 text-slate-600 px-3 py-1 rounded-xl text-sm'>
                {item.period}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default EducationSection;
