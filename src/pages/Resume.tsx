import React from 'react';
import '@styles/resume.css';
// import { usePDFExport } from '@shared/utils/exportPdf.ts';
import HeroSection from '@components/sectiions/HeroSection.tsx';
import Sidebar from '@components/Sidebar.tsx';
import ProjectSection from '@components/sectiions/ProjectSection.tsx';
import TrobleShootingSection from '@components/sectiions/TrobleShootingSection.tsx';
import LeadingSection from '@components/sectiions/LeadingSection.tsx';
import ImprovementSection from '@components/sectiions/ImprovementSection.tsx';
import EducationSection from '@components/sectiions/EducationSection.tsx';
import JobObjectiveSection from '@components/sectiions/JobObjectiveSection.tsx';
import Navigation from '@components/Navigation.tsx';
// import { usePDFExport } from '@shared/utils/selectivePdfFix.ts';
// import { usePDFExport } from '@shared/utils/exportPdf.ts';
// import { usePDFExport } from '@shared/utils/browserPrint.ts';
import { usePDFExport } from '@shared/utils/alternativePdfMethods.tsx';

const Resume: React.FC = () => {
  const { exportPDF } = usePDFExport();
  const handlePrint = () => exportPDF('browser');

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
            <div className='pdf-only h-[430px] hidden'></div>
            {/* Main Content */}
            <main className='flex flex-col gap-12'>
              {/* Projects Section */}
              <ProjectSection />
              {/*// Part 3: 기술적 문제해결 경험 + 팀 리더십 + 현재 진행사항 // TSX에 추가할 부분*/}
              {/* 기술적 문제해결 경험 섹션 */}
              <div className='pdf-only  h-[280px]' />
              <TrobleShootingSection />
              {/* 팀 리더십 & 기술 멘토링 섹션 */}
              <LeadingSection />
              {/* 현재 진행 중인 개선사항 섹션 */}
              <ImprovementSection />
              {/*// Part 4: 교육 배경 + 희망 포지션 + CTA // TSX에 추가할 부분*/}
              {/* 교육 배경 섹션 */}
              <EducationSection />
              {/* 희망 포지션 섹션 */}
              <JobObjectiveSection />
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
