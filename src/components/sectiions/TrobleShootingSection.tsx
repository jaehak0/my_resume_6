import React from 'react';

const TroubleShooting: React.FC = () => {
  return (
    <section className='bg-white rounded-2xl p-10 shadow-md border border-slate-200'>
      <div className='mb-8'>
        <h2 className='text-4xl font-bold text-indigo-600 mb-2 flex items-center gap-3'>
          🔧 기술적 문제해결 경험
        </h2>
        <p className='text-slate-600 text-lg'>
          실제 프로덕션 환경에서 발생한 복잡한 이슈들을 독립적으로 분석하고 해결한 경험들입니다.
        </p>
      </div>

      <div className='space-y-8'>
        <div className='project-card'>
          <div className='bg-white p-8 border-b border-slate-200 relative'>
            <span className='absolute top-4 right-4 bg-amber-500 text-white px-3 py-2 rounded-xl text-sm font-semibold'>
              Library Conflict Resolution
            </span>
            <h3 className='text-2xl font-bold text-indigo-600 mb-2'>라이브러리 충돌 해결</h3>
            <p className='text-slate-600'>LangGraph 설치 후 Pydantic v1/v2 호환성 충돌 문제 해결</p>
          </div>
          <div className='p-8'>
            <div className='bg-red-500 text-white p-4 rounded-lg mb-4 text-sm leading-relaxed'>
              <strong>문제:</strong> LangGraph 설치 후 ForwardRef._evaluate() 에러 발생
              <br />
              <strong>원인:</strong> Pydantic v1/v2 호환성 충돌 및 Python 버전 호환성 문제
            </div>

            <div className='project-details'>
              <strong>해결 과정:</strong>
              <br />
              • 1단계: 전체 의존성 트리 분석으로 충돌 지점 특정
              <br />
              • 2단계: FastAPI 0.115.0 + Pydantic 2.11.7 + LangChain 0.3.25 조합 테스트
              <br />
              • 3단계: 가상환경 재구성 및 requirements.txt 버전 고정
              <br />• 4단계: pip check으로 의존성 무결성 최종 검증
            </div>

            <div className='bg-green-500 text-white p-4 rounded-lg text-sm leading-relaxed'>
              <strong>결과:</strong> 모든 라이브러리가 안정적으로 동작하며, 팀 전체가 동일한
              환경에서 개발 가능
            </div>
          </div>
        </div>

        <div className='project-card'>
          <div className='bg-white p-8 border-b border-slate-200 relative'>
            <span className='absolute top-4 right-4 bg-amber-500 text-white px-3 py-2 rounded-xl text-sm font-semibold'>
              Database Failover
            </span>
            <h3 className='text-2xl font-bold text-indigo-600 mb-2'>Database Failover 시스템</h3>
            <p className='text-slate-600'>MySQL 장애 시 H2 자동 전환으로 개발 안정성 확보</p>
          </div>
          <div className='p-8'>
            <div className='bg-amber-500 text-white p-4 rounded-lg mb-4 text-sm leading-relaxed'>
              <strong>배경:</strong> AWS RDS MySQL 프리 티어 한계 (월 750시간 제한) 고려
              <br />
              <strong>목표:</strong> 개발 환경 편의성과 비용 효율성 동시 확보
            </div>

            <div className='project-details'>
              <strong>구현 방법:</strong>
              <br />
              • 연결 상태 헬스체크 로직 추가
              <br />
              • MySQL 연결 실패 시 자동 H2 전환 메커니즘
              <br />
              • H2 인메모리 DB 백업 시스템 구성
              <br />• Spring Boot 환경에서 동적 DataSource 전환
            </div>

            <div className='bg-green-500 text-white p-4 rounded-lg text-sm leading-relaxed'>
              <strong>결과:</strong> 무중단 개발 환경 구축으로 팀 생산성 향상 및 비용 절감 효과
            </div>
          </div>
        </div>

        <div className='project-card'>
          <div className='bg-white p-8 border-b border-slate-200 relative'>
            <span className='absolute top-4 right-4 bg-amber-500 text-white px-3 py-2 rounded-xl text-sm font-semibold'>
              Performance Optimization
            </span>
            <h3 className='text-2xl font-bold text-indigo-600 mb-2'>
              OpenDART API 데이터 처리 최적화
            </h3>
            <p className='text-slate-600'>API 응답 데이터 정규화 및 VectorDB 최적화</p>
          </div>
          <div className='p-8'>
            <div className='bg-red-500 text-white p-4 rounded-lg mb-4 text-sm leading-relaxed'>
              <strong>문제:</strong> API 응답의 기업별/연도별 컬럼 구조가 불일치
              <br />
              <strong>이슈:</strong> 원화/억원 단위 혼재, 계정과목명 상이
            </div>

            <div className='project-details'>
              <strong>해결 방안:</strong>
              <br />
              • 25개 핵심 재무지표로 표준화 스키마 설계
              <br />
              • 손익계산서, 재무상태표, 현금흐름표 항목 통합 매핑 테이블 작성
              <br />
              • 기업별 계정과목 차이를 통일된 형태로 변환
              <br />• VectorDB 저장을 위한 JSON 구조화 및 임베딩 전처리 파이프라인
            </div>

            <div className='bg-green-500 text-white p-4 rounded-lg text-sm leading-relaxed'>
              <strong>결과:</strong> 데이터 일관성 확보 및 AI 모델 학습 품질 향상
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TroubleShooting;
