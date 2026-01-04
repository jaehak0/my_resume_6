import type { Experience } from '@/types/experience';

export const CAREER_EXPERIENCE: Experience[] = [
  {
    company: '새움소프트 (SaeumSoft)',
    role: 'Developer Intern',
    period: '2024.08 - 2024.11',
    type: '인턴',
    description: 'Vue 3 기반 2D 평면도 에디터 및 AI 테스트 플랫폼 개발',
    projects: [
      {
        title: '2D 평면도 에디터 + 3D 렌더링 시스템',
        description: '가구 배치 도면을 그리고 AI로 3D 렌더링하는 시스템 프론트엔드',
        highlights: [
          'Vue 3 Composition API + TypeScript로 1,432줄 Pinia 스토어 설계',
          'html2canvas, modern-screenshot으로 멀티 서페이스 캡처 구현',
          'Three.js 통합으로 3D 프레임 미리보기 기능 구현',
          'Dirty Flag 캐싱으로 성능 최적화 (IndexedDB 활용)',
          'Tailwind CSS 4 기반 반응형 UI 구현'
        ],
        techStack: [
          'Vue 3',
          'TypeScript',
          'Pinia',
          'Three.js',
          'Tailwind CSS 4',
          'html2canvas',
          'modern-screenshot'
        ],
        badge: 'Drawing Components 담당'
      },
      {
        title: 'AI 테스트 플랫폼 (Full-Stack Solo)',
        description: 'Google Gemini/Veo API 테스트를 위한 프롬프트 버전 관리 플랫폼',
        highlights: [
          'Python 3.13 + FastAPI로 백엔드 API 전체 설계 및 구현',
          'PostgreSQL 프롬프트 버전 관리 스키마 설계',
          'WebSocket으로 실시간 동영상 생성 진행률 스트리밍',
          'Google Gemini 2.5 Flash, Veo 3.1 API 통합',
          'Vue 3 프론트엔드 UI 개발',
          '2일 만에 DB-백엔드-프론트엔드 전체 Solo 개발 완료'
        ],
        techStack: [
          'Python 3.13',
          'FastAPI',
          'WebSocket',
          'PostgreSQL',
          'Google Gemini 2.5',
          'Google Veo 3.1',
          'Vue 3'
        ],
        badge: '2일 Solo 개발'
      }
    ],
    techStack: [
      'Vue 3',
      'TypeScript',
      'Pinia',
      'Tailwind CSS 4',
      'Three.js',
      'Python 3.13',
      'FastAPI',
      'WebSocket',
      'PostgreSQL',
      'Google Gemini 2.5',
      'Google Veo 3.1'
    ]
  }
];
