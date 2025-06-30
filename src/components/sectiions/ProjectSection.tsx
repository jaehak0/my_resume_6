import React from 'react';

const ProjectSection: React.FC = () => {
  return (
    <section className='bg-white rounded-2xl p-10 shadow-md border border-slate-200' id='projects'>
      <div className='mb-8'>
        <h2 className='text-4xl font-bold text-indigo-600 mb-2 flex items-center gap-3'>
          🏆 주요 프로젝트
        </h2>
        <p className='text-slate-600 text-lg'>
          AI 기술을 활용한 실제 서비스 개발 경험을 소개합니다.
        </p>
      </div>

      <div className='space-y-8'>
        <div className='project-card'>
          <div className='bg-white p-8 border-b border-slate-200 relative'>
            <span className='absolute top-4 right-4 bg-amber-500 text-white px-3 py-2 rounded-xl text-sm font-semibold'>
              Lead AI Developer
            </span>
            <h3 className='text-2xl font-bold text-indigo-600 mb-2'>SheetAI</h3>
            <p className='text-slate-600 mb-4'>LLM 기반 기업 신용평가 및 자동 보고서 생성 시스템</p>
            <div className='flex gap-6 text-slate-500 text-sm flex-wrap'>
              <span>📅 2025.05 - 2025.07 (7주 집중 개발)</span>
              <span>👥 6명 팀</span>
              <span>⭐ 프로덕션 완료 (배포 준비 중)</span>
            </div>
          </div>
          <div className='p-8'>
            <p className='text-slate-600 leading-relaxed mb-8'>
              7주라는 짧은 기간 동안 기업 신용평가 데이터 부족 문제를 해결하고, LLM 파인튜닝과
              Multi-Agent 시스템을 활용하여 완전히 자동화된 신용평가 및 보고서 생성 서비스를
              개발했습니다. 팀 내 AI/ML 분야 핵심 담당자로서 기술적 리더십을 발휘하며 프로젝트
              성공을 이끌었습니다.
            </p>

            <div className='project-details'>
              <strong>🔬 데이터 엔지니어링:</strong>
              <br />
              • 다변량 절단정규분포 기법으로 실데이터 100개에서 5만개 고품질 합성데이터 생성
              <br />
              • OpenDART API 실시간 데이터 처리: 25개 핵심 재무지표로 표준화 스키마 설계
              <br />• 정성적 데이터를 실제 기업데이터에 추가하는 시스템 구축
            </div>

            <div className='project-details'>
              <strong>🤖 AI 모델 개발:</strong>
              <br />
              • LLaMA 3.1 8B, 3.2 3B, Gemma, Phi 4개 모델 비교 실험
              <br />
              • LoRA 기법으로 LLaMA 3.2 3B 모델 파인튜닝 (Learning Rate 2e-4, LoRA rank 64)
              <br />
              • WandB 실험 추적으로 100+ 실험 기록 및 성능 비교
              <br />• LangGraph Multi-Agent 시스템: 데이터 수집, 신용평가, 보고서 생성, 검증 Agent
            </div>

            <div className='project-details'>
              <strong>⚙️ 시스템 아키텍처:</strong>
              <br />
              • Frontend 프로젝트 설정: Vite + React + TypeScript, Jotai + TanStack Query
              <br />
              • 3-tier 아키텍처: FastAPI AI 서버 + Spring Boot + React SPA
              <br />
              • Database: MySQL 클라우드 + H2 Failover 시스템
              <br />
              • PDF 보고서 생성: jsPDF + html2Canvas로 A4 최적화
              <br />• RunPod GPU 클러스터에 파인튜닝된 LLM 배포
            </div>

            <div className='grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8'>
              <div className='metric-card'>
                <span className='metric-value'>92%</span>
                <span className='metric-label'>신용평가 정확도</span>
              </div>
              <div className='metric-card'>
                <span className='metric-value'>5만개</span>
                <span className='metric-label'>합성데이터 생성</span>
              </div>
              <div className='metric-card'>
                <span className='metric-value'>99%</span>
                <span className='metric-label'>분석시간 단축</span>
              </div>
              <div className='metric-card'>
                <span className='metric-value'>3분</span>
                <span className='metric-label'>vs 기존 3시간</span>
              </div>
            </div>

            <div className='flex flex-wrap gap-2'>
              {[
                'LLaMA 3.2 3B',
                'LoRA Fine-tuning',
                'LangGraph Multi-Agent',
                'FastAPI',
                'React SPA',
                'Spring Boot',
                'ChromaDB',
                'RunPod GPU',
                'MySQL',
                'H2',
                'jsPDF',
                'html2Canvas',
                'Jotai',
                'Tanstack Query',
                'Vite',
              ].map(tech => (
                <span key={tech} className='tech-item'>
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
        {/*<div className='pdf-only  h-[95px]' />*/}
        {/* 다른 프로젝트들도 동일한 구조로 추0가 */}
        {/*// Part 2: 나머지 프로젝트들 + 기술 스킬 섹션 // TSX에 추가할 부분*/}
        {/* Nutrimate 프로젝트 */}
        <div className='project-card'>
          <div className='bg-white p-8 border-b border-slate-200 relative'>
            <span className='absolute top-4 right-4 bg-amber-500 text-white px-3 py-2 rounded-xl text-sm font-semibold'>
              Team leader
            </span>
            <h3 className='text-2xl font-bold text-indigo-600 mb-2'>Nutrimate</h3>
            <p className='text-slate-600 mb-4'>건강관리 보조 서비스</p>
            <div className='flex gap-6 text-slate-500 text-sm flex-wrap'>
              <span>📅 2024.01 - 2024.03 (AI 웹서비스 자바풀스택 과정)</span>
              <span>👥 5명 팀</span>
              <span>⭐ 팀장, Backend/Frontend/DB/Jira/Git 총괄</span>
            </div>
          </div>
          <div className='p-8'>
            <p className='text-slate-600 leading-relaxed mb-8'>
              사용자의 일일 식단을 기록하고 칼로리, 탄수화물, 단백질, 지방 등 영양소를 분석하여
              건강관리를 도와주는 종합 서비스입니다. 팀장으로서 프로젝트 관리 및 의사결정, Backend
              총괄, Frontend 총괄, DB 관리, Jira 관리, Git 총괄을 모두 담당했습니다.
            </p>

            <div className='project-details'>
              <strong>👥 팀 리더십 (팀장):</strong>
              <br />
              • 기획 단계 의견 조율: 팀원들의 서로 다른 이해도를 통일하기 위해 화면설계, 기능상세서
              작성
              <br />
              • 품질 관리: 팀원들의 버그 수정 요청 조율 및 우선순위 결정
              <br />• Jira 관리: 이슈 트래킹 및 작업 할당을 통한 프로젝트 진행 관리
            </div>

            <div className='project-details'>
              <strong>💻 Backend 개발 총괄:</strong>
              <br />
              • Spring Boot + Gradle 환경 초기 세팅: vite.config.js, .eslint.cjs, .prettier 등
              개발환경 구성 (5-6시간 소요)
              <br />
              • log4jdbc 로깅 시스템 구축: Jakarta 버전, JDBC 버전 호환성 문제 해결을 위한
              라이브러리 의존성 관리
              <br />
              • OAuth 인증 시스템: Google, Facebook OAuth 구현 (Facebook 데시보드 이메일 권한 설정
              등 복잡한 이슈 해결)
              <br />• 280줄 규모의 복잡한 SQL 쿼리 작성: 사용자 식단 기록의 칼로리, 영양소 데이터
              종합 분석
            </div>

            <div className='project-details'>
              <strong>🎨 Frontend 개발 총괄:</strong>
              <br />
              • 무한 대댓글 시스템: 재귀함수를 활용한 무한 depth 댓글 구조 구현
              <br />
              • 애니메이션 메뉴 Drawer: 부드러운 애니메이션이 포함된 네비게이션 구현
              <br />
              • 커스텀 캘린더: 적합한 라이브러리 선정부터 프로젝트 요구사항에 맞는 커스터마이징까지
              전담
              <br />• dayjs, moment 등 라이브러리 중복 사용 이슈 관리 및 의존성 최적화
            </div>

            <div className='project-details'>
              <strong>🔧 전체 프로젝트 관리:</strong>
              <br />
              • 버전 관리 및 협업: 코드 충돌 해결, 라이브러리 의존성 관리
              <br />
              • Merge 관리: 모든 PR의 merge를 담당하며 충돌 해결 전문성 향상
              <br />• 공용 컴포넌트 수정으로 인한 충돌을 별도 파일 분리로 해결
            </div>

            <div className='grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8'>
              <div className='metric-card'>
                <span className='metric-value'>280줄</span>
                <span className='metric-label'>복합 SQL 쿼리</span>
              </div>
              <div className='metric-card'>
                <span className='metric-value'>무한 대댓글</span>
                <span className='metric-label'>재귀 시스템</span>
              </div>
              <div className='metric-card'>
                <span className='metric-value'>OAuth</span>
                <span className='metric-label'>Google, Facebook</span>
              </div>
              <div className='metric-card'>
                <span className='metric-value'>5명 팀</span>
                <span className='metric-label'>리딩 성공</span>
              </div>
            </div>

            <div className='flex flex-wrap gap-2'>
              {[
                'Spring Boot',
                'React',
                'Oracle DB',
                'OAuth (Google, Facebook)',
                'Material-UI',
                'Styled-Components',
                'Chart.js',
                'Spring Security',
                'MyBatis',
                'log4jdbc',
                'JWT',
                'Jotai',
                'Tanstack Query',
                'Vite',
                'Jira',
                'Git',
              ].map(tech => (
                <span key={tech} className='tech-item'>
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
        {/*<div className='pdf-only  h-[140px]' />*/}
        {/* 여권의 정석 프로젝트 */}
        <div className='project-card'>
          <div className='bg-white p-8 border-b border-slate-200 relative'>
            <span className='absolute top-4 right-4 bg-amber-500 text-white px-3 py-2 rounded-xl text-sm font-semibold'>
              Frontend & AI Integration
            </span>
            <h3 className='text-2xl font-bold text-indigo-600 mb-2'>여권의 정석</h3>
            <p className='text-slate-600 mb-4'>CV 기반 여권사진 적합성 분석 서비스</p>
            <div className='flex gap-6 text-slate-500 text-sm flex-wrap'>
              <span>📅 2025.03 (1주 집중 개발)</span>
              <span>👥 6명 팀</span>
              <span>⭐ Frontend 100% + 배경제거 AI 통합 100%</span>
            </div>
          </div>
          <div className='p-8'>
            <p className='text-slate-600 leading-relaxed mb-8'>
              여권사진 규정 준수를 위한 AI 기반 자동 분석 서비스입니다. 1주라는 짧은 기간 동안
              팀원이 개발한 얼굴 분석 AI 모델을 사용자가 쉽게 이용할 수 있는 웹 인터페이스로
              구현하고, 6개 배경제거 모델을 직접 비교 실험하여 2개 최적 모델을 선정 및 통합한 종합
              여권사진 서비스를 구축했습니다.
            </p>

            <div className='project-details'>
              <strong>💻 Frontend 개발 (100% 담당):</strong>
              <br />
              • React + JavaScript 기반 사용자 인터페이스 구현
              <br />
              • 이미지 업로드 시스템: 드래그앤드롭 + 파일 선택 방식
              <br />
              • 분석 결과 표시: 14개 분석 기준을 직관적 UI로 변환
              <br />
              • 실시간 피드백: GPT 자연어 피드백을 말풍선 형태로 표시
              <br />• Axios 기반 HTTP 통신으로 FastAPI 백엔드와 RESTful API 연동
            </div>

            <div className='project-details'>
              <strong>🤖 6개 AI 모델 성능 비교 및 최적화 (100% 담당):</strong>
              <br />
              • 실험 대상: U2-Net, DeepLab, RemBG, MODNet, Robust Video MattingV2, RMBG-1.4
              <br />
              • 실험 결과: U2-Net/DeepLab/RemBG는 경계선 부정확, RVM2는 실시간 처리 어려움
              <br />
              • 최종 선정: MODNet(전반적 성능 양호)과 RMBG-1.4(머리카락 구분 우수) 듀얼 옵션
              <br />• 성능뿐 아니라 상용화 시 라이선스까지 종합적으로 고려한 기술적 판단
            </div>

            <div className='project-details'>
              <strong>🔧 선정된 모델 통합 구현:</strong>
              <br />
              • 배경 제거 API 구현: 이미지 전처리 → AI 모델 추론 → 결과 처리 파이프라인
              <br />
              • 모델 선택 시스템: 사용자 용도에 따라 MODNet/RMBG-1.4 선택 가능
              <br />• 에러 핸들링: 파일 형식/크기 제한, 서버 오류 등 예외 상황 처리
            </div>

            <div className='grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8'>
              <div className='metric-card'>
                <span className='metric-value'>6개</span>
                <span className='metric-label'>AI 모델 비교</span>
              </div>
              <div className='metric-card'>
                <span className='metric-value'>2개</span>
                <span className='metric-label'>최종 선정</span>
              </div>
              <div className='metric-card'>
                <span className='metric-value'>14개</span>
                <span className='metric-label'>분석 기준</span>
              </div>
              <div className='metric-card'>
                <span className='metric-value'>1주</span>
                <span className='metric-label'>완성</span>
              </div>
            </div>

            <div className='flex flex-wrap gap-2'>
              {[
                'React',
                'JavaScript',
                'Axios',
                'MODNet',
                'RMBG-1.4',
                'U2-Net',
                'DeepLab',
                'RemBG',
                'FastAPI',
                'Python',
                'Pillow',
                'HuggingFace',
                'tailwindcss',
                'Vite',
                'Jotai',
                'Tanstack Query',
              ].map(tech => (
                <span key={tech} className='tech-item'>
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
        <div className='pdf-only  h-[230px]' />
        {/* 기술 스킬 섹션 */}
        <section className='bg-white rounded-2xl p-10 shadow-md border border-slate-200'>
          <div className='mb-8'>
            <h2 className='text-4xl font-bold text-indigo-600 mb-2 flex items-center gap-3'>
              🛠️ 사용 기술
            </h2>
            <p className='text-slate-600 text-lg'>
              AI/ML부터 Full-Stack 개발까지 다양한 기술을 실무에서 활용하고 있습니다.
            </p>
          </div>

          <div className='space-y-8'>
            <div className='project-card'>
              <div className='bg-white p-8 border-b border-slate-200 relative'>
                <span className='absolute top-4 right-4 bg-amber-500 text-white px-3 py-2 rounded-xl text-sm font-semibold'>
                  AI/ML
                </span>
                <h3 className='text-2xl font-bold text-indigo-600 mb-2'>AI/Machine Learning</h3>
                <p className='text-slate-600'>LLM 파인튜닝부터 Computer Vision까지</p>
              </div>
              <div className='p-8'>
                <div className='project-details mb-6'>
                  <strong>핵심 경험:</strong>
                  <br />• <strong>LLM 파인튜닝:</strong> LoRA 기법으로 LLaMA 3.2 3B 모델 파인튜닝,
                  92% 정확도 달성
                  <br />• <strong>Multi-Agent 시스템:</strong> LangGraph로 복잡한 워크플로우 구현
                  <br />• <strong>Computer Vision:</strong> 6개 배경제거 모델 비교 실험 및 최적화
                  <br />• <strong>MLOps:</strong> WandB로 100+ 실험 추적, RunPod GPU 클러스터 배포
                </div>

                <div className='flex flex-wrap gap-2'>
                  {[
                    'LLaMA 3.2',
                    'LoRA Fine-tuning',
                    'LangGraph',
                    'MediaPipe',
                    'DeepFace',
                    'MODNet',
                    'RMBG-1.4',
                    'YOLOv8',
                    'WandB',
                    'RunPod',
                  ].map(tech => (
                    <span key={tech} className='tech-item'>
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className='project-card'>
              <div className='bg-white p-8 border-b border-slate-200 relative'>
                <span className='absolute top-4 right-4 bg-amber-500 text-white px-3 py-2 rounded-xl text-sm font-semibold'>
                  Backend
                </span>
                <h3 className='text-2xl font-bold text-indigo-600 mb-2'>Backend Development</h3>
                <p className='text-slate-600'>API 서버부터 데이터베이스까지</p>
              </div>
              <div className='p-8'>
                <div className='project-details mb-6'>
                  <strong>핵심 경험:</strong>
                  <br />• <strong>AI 서버:</strong> FastAPI로 LLM 서빙 및 Multi-Agent 시스템 구축
                  <br />• <strong>웹 서비스:</strong> Spring Boot 기반 Full-Stack 애플리케이션 개발
                  <br />• <strong>Database:</strong> MySQL, Oracle DB 설계 및 복잡한 SQL 쿼리 작성
                  <br />• <strong>인증/보안:</strong> OAuth, JWT 구현 및 보안 시스템 구축
                </div>

                <div className='flex flex-wrap gap-2'>
                  {[
                    'FastAPI',
                    'Spring Boot',
                    'Flask',
                    'MySQL',
                    'H2',
                    'Oracle DB',
                    'ChromaDB',
                    'OAuth',
                    'JWT',
                    'OpenDART API',
                  ].map(tech => (
                    <span key={tech} className='tech-item'>
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className='project-card'>
              <div className='bg-white p-8 border-b border-slate-200 relative'>
                <span className='absolute top-4 right-4 bg-amber-500 text-white px-3 py-2 rounded-xl text-sm font-semibold'>
                  Frontend
                </span>
                <h3 className='text-2xl font-bold text-indigo-600 mb-2'>Frontend Development</h3>
                <p className='text-slate-600'>React 기반 모던 웹 애플리케이션</p>
              </div>
              <div className='p-8'>
                <div className='project-details mb-6'>
                  <strong>핵심 경험:</strong>
                  <br />• <strong>React SPA:</strong> TypeScript 기반 현대적 웹 애플리케이션 개발
                  <br />• <strong>상태 관리:</strong> Jotai, TanStack Query로 복잡한 상태 관리
                  <br />• <strong>복잡한 UI:</strong> 무한 댓글, 애니메이션 메뉴, 커스텀 캘린더 구현
                  <br />• <strong>AI 연동:</strong> AI 모델과의 실시간 연동 및 결과 시각화
                </div>

                <div className='flex flex-wrap gap-2'>
                  {[
                    'React',
                    'TypeScript',
                    'JavaScript',
                    'Vite',
                    'Tailwind CSS',
                    'Jotai',
                    'TanStack Query',
                    'Material-UI',
                    'jsPDF',
                    'html2Canvas',
                  ].map(tech => (
                    <span key={tech} className='tech-item'>
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className='project-card'>
              <div className='bg-white p-8 border-b border-slate-200 relative'>
                <span className='absolute top-4 right-4 bg-amber-500 text-white px-3 py-2 rounded-xl text-sm font-semibold'>
                  Data Science
                </span>
                <h3 className='text-2xl font-bold text-indigo-600 mb-2'>
                  Data Science & Analytics
                </h3>
                <p className='text-slate-600'>데이터 분석부터 합성데이터 생성까지</p>
              </div>
              <div className='p-8'>
                <div className='project-details mb-6'>
                  <strong>핵심 경험:</strong>
                  <br />• <strong>고급 통계:</strong> 다변량 절단정규분포 기법으로 고품질 합성데이터
                  생성
                  <br />• <strong>데이터 검증:</strong> t-SNE 시각화로 원본 데이터와 95% 분포 일치도
                  확인
                  <br />• <strong>데이터 처리:</strong> 대용량 재무데이터 전처리 및 정규화
                  <br />• <strong>시각화:</strong> 복잡한 데이터를 직관적인 그래프로 변환
                </div>

                <div className='flex flex-wrap gap-2'>
                  {[
                    'Python',
                    'NumPy',
                    'Pandas',
                    't-SNE',
                    '다변량 절단정규분포',
                    'Matplotlib',
                    'Seaborn',
                  ].map(tech => (
                    <span key={tech} className='tech-item'>
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </section>
  );
};

export default ProjectSection;
