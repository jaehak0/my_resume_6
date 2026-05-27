import React from 'react';
import parse from 'html-react-parser';
import type { LeadershipItem } from '@/types/leadership';
import { LEADERSHIP_EXPERIENCES } from '@/constants/leadership';
import SectionHeader from '@components/common/SectionHeader';
import ProjectCard from '@components/common/ProjectCard';
import ColoredTextBox from '@components/common/ColoredTextBox';

const LeadingSection: React.FC = () => {
  return (
    <section className='leading-section force-page-break bg-white rounded-2xl p-10 shadow-md border border-slate-200'>
      <SectionHeader
        icon='👥'
        title='팀 리더십 & 기술 멘토링'
        description='팀원들과의 협업과 기술 지식 공유를 통해 팀 전체의 역량 향상에 기여한 경험들입니다.'
      />

      <div className='space-y-8'>
        {LEADERSHIP_EXPERIENCES.map((item: LeadershipItem, index: number) => (
          <ProjectCard
            key={index}
            header={
              <>
                <h3 className='text-2xl font-bold text-indigo-600 mb-2'>{item.title}</h3>
                <p className='text-slate-600'>{item.subtitle}</p>
              </>
            }
          >
            <div className='project-details'>
              <div>{parse(item.details)}</div>
            </div>

            <ColoredTextBox variant='emerald' className='text-white rounded-lg text-sm'>
              <div>{parse(item.result)}</div>
            </ColoredTextBox>
          </ProjectCard>
        ))}
      </div>
    </section>
  );
};

export default LeadingSection;
