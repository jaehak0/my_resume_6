import React from 'react';
import SectionHeader from '@components/common/SectionHeader';
import ProjectCard from '@components/common/ProjectCard';
import ProjectDetails from '@components/common/ProjectDetails';
import TechTagList from '@components/common/TechTagList';

const SkillsSection: React.FC = () => {
  return (
    <section className='skills-section force-page-break bg-white rounded-2xl p-10 shadow-md border border-slate-200'>
      <SectionHeader
        icon='🛠️'
        title='사용 기술'
        description='AI/ML부터 Full-Stack 개발까지 다양한 기술을 실무에서 활용하고 있습니다.'
      />

      <div className='flex flex-col gap-8'>
        <ProjectCard
          header={
            <>
              <h3 className='text-2xl font-bold text-indigo-600 mb-2'>AI/Machine Learning</h3>
              <p className='text-slate-600'>LLM 파인튜닝부터 Computer Vision까지</p>
            </>
          }
        >
          <ProjectDetails
            details={[
              {
                category: '핵심 경험:',
                items: [
                  '<strong>LLM 파인튜닝:</strong> LoRA 기법으로 LLaMA 3.2 3B 모델 파인튜닝, 92% 정확도 달성',
                  '<strong>Multi-Agent 시스템:</strong> LangGraph로 복잡한 워크플로우 구현',
                  '<strong>Computer Vision:</strong> 6개 배경제거 모델 비교 실험 및 최적화',
                  '<strong>MLOps:</strong> WandB로 100+ 실험 추적, RunPod GPU 클러스터 배포',
                ],
              },
            ]}
          />

          <TechTagList
            technologies={[
              'LLaMA 3.2',
              'LoRA Fine-tuning',
              'LangGraph',
              'Unsloth',
              'HuggingFace',
              'WandB',
              'RunPod',
              'OpenAI',
              'Anthropic',
              'YOLOv8',
              'MediaPipe',
              'OpenCV',
            ]}
          />
        </ProjectCard>

        <ProjectCard
          header={
            <>
              <h3 className='text-2xl font-bold text-indigo-600 mb-2'>Backend Development</h3>
              <p className='text-slate-600'>API 서버부터 데이터베이스까지</p>
            </>
          }
        >
          <ProjectDetails
            details={[
              {
                category: '핵심 경험:',
                items: [
                  '<strong>AI 서버:</strong> FastAPI로 LLM 서비스 API 구축 및 SSE 실시간 통신',
                  '<strong>웹 서버:</strong> Spring Boot 기반 확장 가능한 아키텍처 설계',
                  '<strong>인증:</strong> OAuth (Google, Facebook, Naver, Kakao), JWT 토큰 기반 보안',
                  '<strong>데이터베이스:</strong> MySQL + H2 Failover 시스템',
                ],
              },
            ]}
          />

          <TechTagList
            technologies={[
              'FastAPI',
              'Spring Boot',
              'Spring Security',
              'Spring Data JPA',
              'MySQL',
              'ChromaDB',
              'QDrant',
              'OAuth',
              'JWT',
              'SSE',
              'MyBatis',
              'Gradle',
            ]}
          />
        </ProjectCard>

        <ProjectCard
          header={
            <>
              <h3 className='text-2xl font-bold text-indigo-600 mb-2'>Frontend Development</h3>
              <p className='text-slate-600'>React 기반 사용자 인터페이스</p>
            </>
          }
        >
          <ProjectDetails
            details={[
              {
                category: '핵심 경험:',
                items: [
                  '<strong>React 생태계:</strong> React, TypeScript, Next.js로 SPA/SSR 구현',
                  '<strong>상태 관리:</strong> Jotai, TanStack Query, Recoil 실무 활용',
                  '<strong>스타일링:</strong> Tailwind CSS, Styled-Components, Material-UI',
                  '<strong>빌드 도구:</strong> Vite 기반 최신 개발 환경 구축',
                ],
              },
            ]}
          />

          <TechTagList
            technologies={[
              'React',
              'TypeScript',
              'Next.js',
              'Tailwind CSS',
              'Vite',
              'Jotai',
              'TanStack Query',
              'React Router Dom',
              'Axios',
              'Material-UI',
              'Recoil',
              'Recharts',
            ]}
          />
        </ProjectCard>

        <ProjectCard
          header={
            <>
              <h3 className='text-2xl font-bold text-indigo-600 mb-2'>Data Science & Analytics</h3>
              <p className='text-slate-600'>데이터 분석부터 합성데이터 생성까지</p>
            </>
          }
        >
          <ProjectDetails
            details={[
              {
                category: '핵심 경험:',
                items: [
                  '<strong>고급 통계:</strong> 다변량 절단정규분포 기법으로 고품질 합성데이터 생성',
                  '<strong>데이터 검증:</strong> t-SNE 시각화로 원본 데이터와 95% 분포 일치도 확인',
                  '<strong>데이터 처리:</strong> 대용량 재무데이터 전처리 및 정규화',
                  '<strong>시각화:</strong> 복잡한 데이터를 직관적인 그래프로 변환',
                ],
              },
            ]}
          />

          <TechTagList
            technologies={[
              'Python',
              'NumPy',
              'Pandas',
              't-SNE',
              '다변량 절단정규분포',
              'Matplotlib',
              'Seaborn',
            ]}
          />
        </ProjectCard>
      </div>
    </section>
  );
};

export default SkillsSection;
