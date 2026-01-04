import React from 'react';
import '@styles/resume.css';
import HeroSection from '@components/sections/HeroSection.tsx';
import Sidebar from '@components/Sidebar.tsx';
import ProjectSection from '@components/sections/ProjectSection.tsx';
import SkillsSection from '@components/sections/SkillsSection.tsx';
import TrobleShootingSection from '@components/sections/TroubleShootingSection.tsx';
import LeadingSection from '@components/sections/LeadingSection.tsx';
import EducationSection from '@components/sections/EducationSection.tsx';
import ExperienceSection from '@components/sections/ExperienceSection.tsx';
import Navigation from '@components/Navigation.tsx';
import { usePDFExport } from '@shared/utils/alternativePdfMethods.ts';

const Resume: React.FC = () => {
  const { exportPDF } = usePDFExport();
  const handlePrint = () => exportPDF();

  return (
    <div className='font-noto bg-white text-slate-800 overflow-x-hidden'>
      {/* Navigation */}
      <Navigation />

      {/* Download Button */}
      <button onClick={handlePrint} className='download-btn'>
        📄 <span>PDF 다운로드</span>
      </button>

      <div className='resume-container'>
        {/* Hero Section */}
        <HeroSection />

        {/* Main Content */}
        <div className='py-16 px-8'>
          <div className='content-grid'>
            {/* Sidebar */}
            <Sidebar />
            {/*<div className='pdf-only h-[340px] hidden' ></div>*/}
            {/* Main Content */}
            <main className='flex flex-col gap-12'>
              {/* Experience Section */}
              <ExperienceSection />
              {/* Projects Section */}
              <ProjectSection />
              {/* Skills Section */}
              <SkillsSection />
              {/*// Part 3: 기술적 문제해결 경험 + 팀 리더십 + 현재 진행사항 // TSX에 추가할 부분*/}
              {/* 기술적 문제해결 경험 섹션 */}
              {/*<div className='pdf-only  h-[280px]' />*/}
              <TrobleShootingSection />
              {/* 팀 리더십 & 기술 멘토링 섹션 */}
              <LeadingSection />
              {/* 현재 진행 중인 개선사항 섹션 */}
              {/*<ImprovementSection />*/}
              {/*// Part 4: 교육 배경 + 희망 포지션 + CTA // TSX에 추가할 부분*/}
              {/* 교육 배경 섹션 */}
              <EducationSection />
              {/* 희망 포지션 섹션 */}
              {/*<JobObjectiveSection />*/}
              {/* Contact CTA 섹션 */}
              {/*<ContactSection />*/}
            </main>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
