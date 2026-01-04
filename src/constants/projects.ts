import type { Project } from '@/types/project';

/**
 * Project portfolio
 */
export const PROJECTS: Project[] = [
  {
    role: 'Lead AI Developer',
    title: 'SheetAI',
    subtitle: 'LLM 기반 기업 신용평가 및 자동 보고서 생성 시스템',
    period: '2025.05 - 2025.07 (7주 집중 개발)',
    teamSize: '6명 팀',
    highlight: '프로덕션 시스템 구축 완료',
    description:
      '7주라는 짧은 기간 동안 기업 신용평가 데이터 부족 문제를 해결하고, LLM 파인튜닝과 Multi-Agent 시스템을 활용하여 완전히 자동화된 신용평가 및 보고서 생성 서비스를 개발했습니다. 팀 내 AI/ML 분야 핵심 담당자로서 기술적 리더십을 발휘하며 프로젝트 성공을 이끌었습니다.',
    details: [
      {
        category: '🔬 데이터 엔지니어링:',
        items: [
          '다변량 절단정규분포 기법으로 실데이터 100개에서 5만개 고품질 합성데이터 생성',
          'OpenDART API 실시간 데이터 처리: 25개 핵심 재무지표로 표준화 스키마 설계',
          '정성적 데이터를 실제 기업데이터에 추가하는 시스템 구축',
        ],
      },
      {
        category: '🤖 AI 모델 개발:',
        items: [
          'LLaMA 3.1 8B, 3.2 3B, Gemma, Phi 4개 모델 비교 실험',
          'LoRA 기법으로 LLaMA 3.2 3B 모델 파인튜닝 (Learning Rate 2e-4, LoRA rank 64)',
          'WandB 실험 추적으로 100+ 실험 기록 및 성능 비교',
          'LangGraph Multi-Agent 시스템: 데이터 수집, 신용평가, 보고서 생성, 검증 Agent',
        ],
      },
      {
        category: '⚙️ 시스템 아키텍처:',
        items: [
          'Frontend 프로젝트 설정: Vite + React + TypeScript, Jotai + TanStack Query',
          '3-tier 아키텍처: FastAPI AI 서버 + Spring Boot + React SPA',
          'Database: MySQL 클라우드 + H2 Failover 시스템',
          'PDF 보고서 생성: jsPDF + html2Canvas로 A4 최적화',
          'RunPod GPU 클러스터에 파인튜닝된 LLM 배포',
        ],
      },
      {
        category: '🔧 추가 구현 사항:',
        items: [
          '신용평가 정확도 개선: 자본잠식 기업 A+ 문제 해결을 위한 룰베이스 검증 + Agent 기반 2차 검증 시스템 구축',
          '실시간 피드백: Server-Sent Events (SSE) 기반 사용자 피드백 시스템 구현',
        ],
      },
    ],
    metrics: [
      { value: '92%', label: '신용평가 정확도' },
      { value: '5만개', label: '합성데이터 생성' },
      { value: '99%', label: '분석시간 단축' },
      { value: '3분', label: 'vs 기존 몇일' },
    ],
    techStack: [
      'LLaMA 3.2 3B',
      'LoRA Fine-tuning',
      'LangGraph Multi-Agent',
      'FastAPI',
      'React SPA',
      'Spring Boot',
      'Qdrant',
      'RunPod GPU',
      'MySQL',
      'H2',
      'jsPDF',
      'SSE',
      'WandB',
    ],
  },
  {
    role: 'Team Leader',
    title: 'Nutrimate',
    subtitle: '건강관리 보조 서비스',
    period: '2024.01 - 2024.03 (AI 웹서비스 자바풀스택 과정)',
    teamSize: '5명 팀',
    highlight: '팀장, Backend/Frontend/DB/Jira/Git 총괄',
    description:
      '사용자의 일일 식단을 기록하고 칼로리, 탄수화물, 단백질, 지방 등 영양소를 분석하여 건강관리를 도와주는 종합 서비스입니다. 팀장으로서 프로젝트 관리 및 의사결정, Backend 총괄, Frontend 총괄, DB 관리, Jira 관리, Git 총괄을 모두 담당했습니다.',
    details: [
      {
        category: '👥 팀 리더십 (팀장):',
        items: [
          '기획 단계 의견 조율: 팀원들의 서로 다른 이해도를 통일하기 위해 화면설계, 기능상세서 작성',
          '품질 관리: 팀원들의 버그 수정 요청 조율 및 우선순위 결정',
          'Jira 관리: 이슈 트래킹 및 작업 할당을 통한 프로젝트 진행 관리',
        ],
      },
      {
        category: '💻 Backend 개발 총괄:',
        items: [
          'Spring Boot + Gradle 환경에서 log4jdbc 로깅 시스템 구축',
          'Jakarta 버전, JDBC 버전 호환성 문제 해결을 위한 라이브러리 의존성 관리',
          'OAuth 인증 시스템: Google, Facebook OAuth 구현 (Facebook 데시보드 이메일 권한 설정 등 복잡한 이슈 해결)',
          '280줄 규모의 복잡한 SQL 쿼리 작성: 사용자 식단 기록의 칼로리, 영양소 데이터 종합 분석',
        ],
      },
      {
        category: '🎨 Frontend 개발 총괄:',
        items: [
          '무한 대댓글 시스템: 재귀함수를 활용한 무한 depth 댓글 구조 구현',
          '애니메이션 메뉴 Drawer: 부드러운 애니메이션이 포함된 네비게이션 구현',
          '커스텀 캘린더: 라이브러리 기반 캘린더를 프로젝트 요구사항에 맞게 커스터마이징',
        ],
      },
      {
        category: '🔧 전체 프로젝트 관리:',
        items: [
          '버전 관리 및 협업: 코드 충돌 해결, 라이브러리 의존성 관리',
          'Merge 관리: 모든 PR의 merge를 담당하며 충돌 해결 전문성 향상',
          '공용 컴포넌트 수정으로 인한 충돌을 별도 파일 분리로 해결',
        ],
      },
    ],
    metrics: [
      { value: '280줄', label: '복합 SQL 쿼리' },
      { value: '무한 대댓글', label: '재귀 시스템' },
      { value: 'OAuth', label: 'Google, Facebook' },
      { value: '5명 팀', label: '리딩 성공' },
    ],
    techStack: [
      'Spring Boot',
      'React',
      'Oracle DB',
      'OAuth (Google, Facebook, Naver, Kakao)',
      'Material-UI',
      'Styled-Components',
      'Rechart',
      'Spring Security',
      'MyBatis',
      'log4jdbc',
      'JWT',
      'Jotai',
      'Vite',
      'Jira',
      'Git',
    ],
  },
  {
    role: 'Frontend & AI Integration',
    title: '여권의 정석',
    subtitle: 'CV 기반 여권사진 적합성 분석 서비스',
    period: '2025.03 (1주 집중 개발)',
    teamSize: '6명 팀',
    highlight: 'Frontend 100% + 배경제거 AI 통합 100%',
    description:
      '여권사진 규정 준수를 위한 AI 기반 자동 분석 서비스입니다. 1주라는 짧은 기간 동안 팀원이 개발한 얼굴 분석 AI 모델을 사용자가 쉽게 이용할 수 있는 웹 인터페이스로 구현하고, 6개 배경제거 모델을 직접 비교 실험하여 2개 최적 모델을 선정 및 통합한 종합 여권사진 서비스를 구축했습니다.',
    details: [
      {
        category: '💻 Frontend 개발 (100% 담당):',
        items: [
          'React + JavaScript 기반 사용자 인터페이스 구현',
          '이미지 업로드 시스템: 드래그앤드롭 + 파일 선택 방식',
          '분석 결과 표시: 14개 분석 기준을 직관적 UI로 변환',
          '실시간 피드백: GPT 자연어 피드백을 말풍선 형태로 표시',
          'Axios 기반 HTTP 통신으로 FastAPI 백엔드와 RESTful API 연동',
        ],
      },
      {
        category: '🤖 6개 AI 모델 성능 비교 및 최적화 (100% 담당):',
        items: [
          '실험 대상: U2-Net, DeepLab, RemBG, MODNet, Robust Video MattingV2, RMBG-1.4',
          '실험 결과: U2-Net/DeepLab/RemBG는 경계선 부정확, RVM2는 실시간 처리 어려움',
          '최종 선정: MODNet(전반적 성능 양호)과 RMBG-1.4(머리카락 구분 우수) 듀얼 옵션',
          '성능뿐 아니라 상용화 시 라이선스까지 종합적으로 고려한 기술적 판단',
        ],
      },
      {
        category: '🔧 선정된 모델 통합 구현:',
        items: [
          '배경 제거 API 구현: 이미지 전처리 → AI 모델 추론 → 결과 처리 파이프라인',
          '모델 선택 시스템: 사용자 용도에 따라 MODNet/RMBG-1.4 선택 가능',
          '에러 핸들링: 파일 형식/크기 제한, 서버 오류 등 예외 상황 처리',
        ],
      },
    ],
    metrics: [
      { value: '6개', label: 'AI 모델 비교' },
      { value: '2개', label: '최종 선정' },
      { value: '14개', label: '분석 기준' },
      { value: '1주', label: '완성' },
    ],
    techStack: [
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
    ],
  },
];
