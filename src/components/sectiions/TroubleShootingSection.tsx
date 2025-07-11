import React from 'react';

const TroubleShooting: React.FC = () => {
  return (
    <section className='trouble-shooting force-page-break bg-white rounded-2xl p-10 shadow-md border border-slate-200'>
      <div className='mb-8'>
        <h2 className='text-4xl font-bold text-indigo-600 mb-2 flex items-center gap-3'>
          🔧 기술적 문제해결 경험
        </h2>
        <p className='text-slate-600 text-lg'>
          실제 프로덕션 환경에서 발생한 복잡한 이슈들을 독립적으로 분석하고 해결한 경험들입니다.
        </p>
      </div>

      <div className='space-y-8'>
        {/* 신용평가 정확도 개선 시스템 (완료) */}
        <div className='project-card'>
          <div className='bg-white p-8 border-b border-slate-200 relative'>
            <h3 className='text-2xl font-bold text-indigo-600 mb-2'>신용평가 정확도 개선 시스템</h3>
            <p className='text-slate-600'>
              자본잠식 기업 A+ 문제 해결을 위한 룰베이스 검증 + Agent 시스템 구축
            </p>
          </div>
          <div className='p-8'>
            <div className='rose-text-box-soft p-4 mb-4 leading-relaxed'>
              <strong>발견된 문제:</strong> 자본잠식 기업임에도 A+ 등급이 나오는 이상사태 발생
              <br />
              <strong>원인:</strong> ML 모델의 정량적 판단만으로는 극단적인 재무상황 감지 한계
            </div>

            <div className='project-details'>
              <strong>구현한 해결 방안:</strong>
              <br />• <strong>룰베이스 검증 로직 (본인 담당):</strong> 자본금 대비 부채비율,
              영업현금흐름 등 핵심 재무지표 기반 1차 검증
              <br />• <strong>LangGraph Agent 기반 2차 검증 (팀장 담당):</strong> GPT-4를 활용한
              정성적 분석으로 룰베이스 한계 보완
              <br />• <strong>이중 검증 파이프라인:</strong> ML 예측 → 룰베이스 검증 → Agent 검증
              3단계 워크플로우
              <br />• <strong>조건부 검증 최적화:</strong> AAA 등급 우대 조건 설정으로 과도한 하향
              조정 방지
            </div>

            <div className='emerald-text-box-soft p-4 leading-relaxed'>
              <strong>결과:</strong> 신용평가 시스템의 신뢰성과 정확성을 대폭 향상, 극단적인 오류
              사례 완전 제거
            </div>
          </div>
        </div>

        {/* SSE 실시간 피드백 시스템 (완료) */}
        <div className='project-card'>
          <div className='bg-white p-8 border-b border-slate-200 relative'>
            <h3 className='text-2xl font-bold text-indigo-600 mb-2'>SSE 실시간 피드백 시스템</h3>
            <p className='text-slate-600'>
              사용자 피드백을 위한 Server-Sent Events 기반 실시간 통신 구현
            </p>
          </div>
          <div className='p-8'>
            <div className='amber-text-box-soft p-4 mb-4'>
              <strong>배경:</strong> 신용평가 및 보고서 생성 과정의 복잡성으로 인한 사용자 대기시간
              문제
              <br />
              <strong>목표:</strong> 사용자 경험 개선 및 시스템 투명성 확보
            </div>

            <div className='project-details'>
              <strong>구현 방법:</strong>
              <br />• <strong>백엔드 SSE 엔드포인트:</strong> FastAPI에서 Server-Sent Events 스트림
              구현
              <br />• <strong>프론트엔드 실시간 UI:</strong> React에서 Fetch API +
              ReadableStream으로 SSE 데이터 파싱
              <br />• <strong>단계별 피드백:</strong> 데이터 수집 → 신용평가 → 보고서 생성 각 단계의
              진행률과 상태를 실시간 전달
              <br />• <strong>JSON 구조화:</strong> 구조화된 이벤트 데이터 전송으로 에러 핸들링 및
              연결 상태 관리
              <br />• <strong>사용자 경험 최적화:</strong> 로딩 애니메이션, 진행률 표시, 단계별
              메시지 표시
            </div>

            <div className='emerald-text-box-soft p-4 leading-relaxed'>
              <strong>결과:</strong> 사용자 경험 대폭 개선 및 시스템 투명성 확보, 대기시간에 대한
              사용자 불안감 해소
            </div>
          </div>
        </div>

        {/* 기존 항목들 */}
        <div className='project-card'>
          <div className='bg-white p-8 border-b border-slate-200 relative'>
            <h3 className='text-2xl font-bold text-indigo-600 mb-2'>라이브러리 충돌 해결</h3>
            <p className='text-slate-600'>LangGraph 설치 후 Pydantic v1/v2 호환성 충돌 문제 해결</p>
          </div>
          <div className='p-8'>
            <div className='rose-text-box-soft p-4 mb-4 leading-relaxed'>
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

            <div className='emerald-text-box-soft p-4 leading-relaxed'>
              <strong>결과:</strong> 모든 라이브러리가 안정적으로 동작하며, 팀 전체가 동일한 개발
              환경에서 작업 가능
            </div>
          </div>
        </div>

        <div className='project-card'>
          <div className='bg-white p-8 border-b border-slate-200 relative'>
            <h3 className='text-2xl font-bold text-indigo-600 mb-2'>Database Failover 시스템</h3>
            <p className='text-slate-600'>MySQL 장애 시 H2 자동 전환으로 개발 안정성 확보</p>
          </div>
          <div className='p-8'>
            <div className='amber-text-box-soft p-4 mb-4'>
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

            <div className='emerald-text-box-soft p-4 leading-relaxed'>
              <strong>결과:</strong> 무중단 개발 환경 구축으로 팀 생산성 향상 및 비용 절감 효과
            </div>
          </div>
        </div>

        <div className='project-card'>
          <div className='bg-white p-8 border-b border-slate-200 relative'>
            <h3 className='text-2xl font-bold text-indigo-600 mb-2'>
              OpenDART API 데이터 처리 최적화
            </h3>
            <p className='text-slate-600'>API 응답 데이터 정규화 및 VectorDB 최적화</p>
          </div>
          <div className='p-8'>
            <div className='rose-text-box-soft p-4 mb-4 leading-relaxed'>
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

            <div className='emerald-text-box-soft p-4 leading-relaxed'>
              <strong>결과:</strong> 데이터 일관성 확보 및 AI 모델 학습 품질 향상
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TroubleShooting;
