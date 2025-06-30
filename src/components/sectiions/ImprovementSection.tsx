import React from 'react';

const ImprovementSection: React.FC = () => {
  return (
    <section className='bg-white rounded-2xl p-10 shadow-md border border-slate-200'>
      <div className='mb-8'>
        <h2 className='text-4xl font-bold text-indigo-600 mb-2 flex items-center gap-3'>
          🚀 현재 진행 중인 개선사항
        </h2>
        <p className='text-slate-600 text-lg'>
          지속적인 시스템 개선과 품질 향상을 위해 현재 진행 중인 작업들입니다.
        </p>
      </div>

      <div className='space-y-8'>
        <div className='project-card'>
          <div className='bg-white p-8 border-b border-slate-200 relative'>
            <span className='absolute top-4 right-4 bg-amber-500 text-white px-3 py-2 rounded-xl text-sm font-semibold'>
              Accuracy Improvement
            </span>
            <h3 className='text-2xl font-bold text-indigo-600 mb-2'>신용평가 정확도 향상</h3>
            <p className='text-slate-600'>룰베이스 검증 + GPT 필터링으로 이상 결과 방지</p>
          </div>
          <div className='p-8'>
            <div className='bg-amber-500 text-white p-4 rounded-lg mb-4 text-sm leading-relaxed'>
              <strong>발견된 문제:</strong> 자본잠식 기업임에도 A+ 등급이 나오는 이상사태 발생
            </div>

            <div className='project-details'>
              <strong>개선 중인 방안:</strong>
              <br />
              • 룰베이스 검증 로직 구현으로 중간 검증 시스템 구축
              <br />
              • GPT 기반 중간 필터링: 보고서 작성 전 이상 결과 사전 차단
              <br />
              • 이중 검증 시스템으로 신뢰성 확보
              <br />• 보고서 품질 향상을 위한 섹션별 요약 기능 추가
            </div>
          </div>
        </div>

        <div className='project-card'>
          <div className='bg-white p-8 border-b border-slate-200 relative'>
            <span className='absolute top-4 right-4 bg-amber-500 text-white px-3 py-2 rounded-xl text-sm font-semibold'>
              System Optimization
            </span>
            <h3 className='text-2xl font-bold text-indigo-600 mb-2'>시스템 최적화</h3>
            <p className='text-slate-600'>데이터 연동 개선 및 성능 향상</p>
          </div>
          <div className='p-8'>
            <div className='project-details'>
              <strong>진행 중인 개선사항:</strong>
              <br />
              • 정성적 데이터 긍정/부정 분류 정확도 향상
              <br />
              • 재무데이터 단위 통일 (원/억원 혼재 문제 해결)
              <br />
              • UI 변경으로 인한 데이터 연동 완성
              <br />• 관련 그래프 및 시각화 기능 추가 예정
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImprovementSection;
