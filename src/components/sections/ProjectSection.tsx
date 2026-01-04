import React from 'react';
import type { Project } from '@/types/project';
import { PROJECTS } from '@/constants/projects';
import SectionHeader from '@components/common/SectionHeader';
import ProjectCard from '@components/common/ProjectCard';
import MetricGrid from '@components/common/MetricGrid';
import ProjectDetails from '@components/common/ProjectDetails';
import TechTagList from '@components/common/TechTagList';

const ProjectSection: React.FC = () => {
  return (
    <section
      className='force-page-break bg-white rounded-2xl p-10 shadow-md border border-slate-200'
      id='projects'
    >
      <SectionHeader
        icon='🏆'
        title='주요 프로젝트'
        description='AI 기술을 활용한 실제 서비스 개발 경험을 소개합니다.'
      />

      <div className='space-y-8'>
        {PROJECTS.map((project: Project, index: number) => (
          <ProjectCard
            key={index}
            header={
              <>
                <span className='absolute top-4 right-4 amber-text-box px-3 py-2 font-semibold'>
                  {project.role}
                </span>
                <h3 className='text-2xl font-bold text-indigo-600 mb-2'>{project.title}</h3>
                <p className='text-slate-600 mb-4'>{project.subtitle}</p>
                <div className='flex gap-6 text-slate-500 text-sm flex-wrap'>
                  <span>📅 {project.period}</span>
                  <span>👥 {project.teamSize}</span>
                  <span>⭐ {project.highlight}</span>
                </div>
              </>
            }
          >
            <p className='text-slate-600 leading-relaxed mb-8'>{project.description}</p>

            <ProjectDetails details={project.details} />

            <MetricGrid metrics={project.metrics} />

            <TechTagList technologies={project.techStack} />
          </ProjectCard>
        ))}
      </div>
    </section>
  );
};

export default ProjectSection;
