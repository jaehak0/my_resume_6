import React from 'react';
import parse from 'html-react-parser';
import type { TroubleShootingItem } from '@/types/troubleShooting';
import { TROUBLESHOOTING_CASES } from '@/constants/troubleShooting';
import SectionHeader from '@components/common/SectionHeader';
import ProjectCard from '@components/common/ProjectCard';
import ColoredTextBox from '@components/common/ColoredTextBox';

const TroubleShooting: React.FC = () => {
  return (
    <section className='trouble-shooting force-page-break bg-white rounded-2xl p-10 shadow-md border border-slate-200'>
      <SectionHeader
        icon='🔧'
        title='기술적 문제해결 경험'
        description='실제 프로덕션 환경에서 발생한 복잡한 이슈들을 독립적으로 분석하고 해결한 경험들입니다.'
      />

      <div className='space-y-8'>
        {TROUBLESHOOTING_CASES.map((item: TroubleShootingItem, index: number) => (
          <ProjectCard
            key={index}
            header={
              <>
                <h3 className='text-2xl font-bold text-indigo-600 mb-2'>{item.title}</h3>
                <p className='text-slate-600'>{item.subtitle}</p>
              </>
            }
          >
            {item.background && (
              <ColoredTextBox variant='amber' className='mb-4'>
                <div>{parse(item.background)}</div>
              </ColoredTextBox>
            )}

            {item.problem && (
              <ColoredTextBox variant='rose' className='mb-4'>
                <div>{parse(item.problem)}</div>
              </ColoredTextBox>
            )}

            <div className='project-details'>
              <div>{parse(item.solution)}</div>
            </div>

            <ColoredTextBox variant='emerald'>
              <div>{parse(item.result)}</div>
            </ColoredTextBox>
          </ProjectCard>
        ))}
      </div>
    </section>
  );
};

export default TroubleShooting;
