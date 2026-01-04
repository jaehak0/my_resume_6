import React from 'react';
import type { Experience } from '@/types/experience';
import { CAREER_EXPERIENCE } from '@/constants/experience';
import SectionHeader from '@components/common/SectionHeader';
import ProjectCard from '@components/common/ProjectCard';
import ProjectDetails from '@components/common/ProjectDetails';
import TechTagList from '@components/common/TechTagList';

const ExperienceSection: React.FC = () => {
  return (
    <section
      className='force-page-break bg-white rounded-2xl p-10 shadow-md border border-slate-200'
      id='experience'
    >
      <SectionHeader
        icon='💼'
        title='경력 사항'
        description='실무에서 쌓은 개발 경험과 기술 역량을 소개합니다.'
      />

      <div className='space-y-8'>
        {CAREER_EXPERIENCE.map((exp: Experience, expIndex: number) => (
          <div key={expIndex} className='space-y-6'>
            {/* Company Header */}
            <div className='flex justify-between items-start mb-6'>
              <div>
                <span className='bg-amber-50 text-amber-600 px-3 py-1 rounded-xl text-sm font-semibold mb-2 inline-block'>
                  {exp.type}
                </span>
                <h3 className='text-2xl font-bold text-indigo-600'>{exp.company}</h3>
                <p className='text-lg text-slate-700 mt-1'>{exp.role}</p>
                <p className='text-slate-600 mt-2'>{exp.description}</p>
              </div>
              <span className='bg-slate-50 text-slate-600 px-3 py-1 rounded-xl text-sm whitespace-nowrap'>
                {exp.period}
              </span>
            </div>

            {/* Projects */}
            <div className='space-y-6 pl-4 border-l-2 border-indigo-200'>
              {exp.projects.map((project, projIndex) => (
                <ProjectCard
                  key={projIndex}
                  header={
                    <>
                      {project.badge && (
                        <span className='absolute top-4 right-4 amber-text-box px-3 py-2 font-semibold'>
                          {project.badge}
                        </span>
                      )}
                      <h4 className='text-xl font-bold text-indigo-600 mb-2'>
                        {project.title}
                      </h4>
                      <p className='text-slate-600 mb-4'>{project.description}</p>
                    </>
                  }
                >
                  <ProjectDetails
                    details={[{ category: '주요 성과:', items: project.highlights }]}
                  />
                  <TechTagList technologies={project.techStack} />
                </ProjectCard>
              ))}
            </div>

            {/* Overall Tech Stack */}
            <div className='mt-6 p-6 bg-slate-50 rounded-xl'>
              <h4 className='text-sm font-semibold text-slate-600 mb-3'>전체 기술 스택</h4>
              <TechTagList technologies={exp.techStack} />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ExperienceSection;
