import React from 'react';

const LeadingSection: React.FC = () => {
  return (
    <section className='bg-white rounded-2xl p-10 shadow-md border border-slate-200'>
      <div className='mb-8'>
        <h2 className='text-4xl font-bold text-indigo-600 mb-2 flex items-center gap-3'>
          👥 팀 리더십 & 기술 멘토링
        </h2>
        <p className='text-slate-600 text-lg'>
          팀원들과의 협업과 기술 지식 공유를 통해 팀 전체의 역량 향상에 기여한 경험들입니다.
        </p>
      </div>

      <div className='space-y-8'>
        <div className='project-card'>
          <div className='bg-white p-8 border-b border-slate-200 relative'>
            <span className='absolute top-4 right-4 bg-amber-500 text-white px-3 py-2 rounded-xl text-sm font-semibold'>
              Technical Study
            </span>
            <h3 className='text-2xl font-bold text-indigo-600 mb-2'>기술 지식 공유 및 팀 협업</h3>
            <p className='text-slate-600'>
              주간 기술 스터디 진행 및 복잡한 개념의 이해하기 쉬운 설명
            </p>
          </div>
          <div className='p-8'>
            <div className='project-details'>
              <strong>스터디 진행:</strong>
              <br />
              • LLM 파인튜닝, LangGraph, VectorDB 관련 주간 기술 스터디 기획 및 진행
              <br />
              • 복잡한 다변량 분포 개념을 팀원들에게 이해하기 쉽게 설명
              <br />
              • Notion 기반 기술 문서 작성으로 프로젝트 지식 공유
              <br />• 이론과 실습을 결합한 실무 중심 교육
            </div>

            <div className='bg-green-500 text-white p-4 rounded-lg text-sm leading-relaxed'>
              <strong>성과:</strong> 팀 전체의 AI 기술 이해도 대폭 향상 및 프로젝트 성공률 증가
            </div>
          </div>
        </div>

        <div className='project-card'>
          <div className='bg-white p-8 border-b border-slate-200 relative'>
            <span className='absolute top-4 right-4 bg-amber-500 text-white px-3 py-2 rounded-xl text-sm font-semibold'>
              Code Review & Git Strategy
            </span>
            <h3 className='text-2xl font-bold text-indigo-600 mb-2'>코드 리뷰 및 협업 환경 구축</h3>
            <p className='text-slate-600'>
              건설적인 코드 리뷰와 Git 전략 수립으로 팀 개발 품질 향상
            </p>
          </div>
          <div className='p-8'>
            <div className='project-details'>
              <strong>코드 리뷰:</strong>
              <br />
              • 단순 오류 지적이 아닌 개선 방향 제시로 팀 역량 향상
              <br />
              • 브랜치 전략 수립 및 커밋 컨벤션 가이드
              <br />
              • AI 서버 API 명세서 작성 및 Swagger 문서 자동 생성
              <br />• 팀원들 간의 소통 비용 절감 및 개발 속도 향상
            </div>

            <div className='bg-green-500 text-white p-4 rounded-lg text-sm leading-relaxed'>
              <strong>결과:</strong> 코드 품질 향상 및 팀 협업 효율성 대폭 개선
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LeadingSection;
