import React from 'react';
import ProfileImage from '@assets/profile-image.jpg';

const HeroSection: React.FC = () => {
  const handleScrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className='hero'>
      <div className='hero-content'>
        <div className='text-white'>
          <span className='hero-badge mb-4 lg:hidden mobile-only'>🚀 Ready to Innovate</span>

          {/* 프로필 사진 + 이재학 섹션 */}
          <div className='flex flex-col lg:flex-row items-center lg:items-end gap-6 lg:gap-8 mb-8'>
            <div className='order-1 lg:order-1 flex-shrink-0'>
              <img
                src={ProfileImage}
                alt='이재학 프로필 사진'
                className='w-56 h-56 lg:w-60 lg:h-60 rounded-2xl object-cover shadow-2xl ring-4 ring-white/20 hover:scale-105 transition-transform duration-300'
              />
            </div>
            <div className='order-2 lg:order-2'>
              <span className='hero-badge desktop-only'>🚀 Ready to Innovate</span>
              <h1 className='hero-name text-center lg:text-left'>이재학</h1>
            </div>
          </div>

          <p className='text-3xl mb-8 opacity-90 font-medium text-center lg:text-left'>
            LLM Engineer & Full-Stack AI Developer
          </p>

          <p className='text-lg leading-relaxed mb-12 opacity-85 max-w-2xl text-center lg:text-left mx-auto lg:mx-0'>
            다변량 절단정규분포 기법으로 실데이터 100개에서 5만개 합성데이터를 생성하고, LoRA
            파인튜닝된 LLaMA 3.2 3B 모델로 92% 정확도를 달성했습니다. LangGraph Multi-Agent
            워크플로우, VectorDB, React SPA, Spring Boot 마이크로서비스를 통합한 3-tier 아키텍처로
            RunPod GPU 환경에서 파인튜닝된 LLaMA 3.2 3B 모델을 서빙하고 FastAPI를 통한 실시간 추론
            API를 구축한 경험을 보유하고 있습니다.
          </p>

          <div className='flex gap-4 flex-wrap justify-center lg:justify-start'>
            <button onClick={() => handleScrollTo('contact')} className='btn-primary'>
              📧 연락하기
            </button>
            <a href='https://github.com/jaehak0' className='btn-outline'>
              💻 GitHub 보기
            </a>
          </div>
        </div>

        {/* 기존 카드는 유지하되 아바타 부분만 조정 */}
        <div className='hero-card'>
          <div className='text-center mb-8'>
            {/* 기존 아바타 대신 작은 로고나 이모지로 변경 */}
            <div className='w-24 h-24 rounded-full flex items-center justify-center text-4xl mx-auto mb-4 bg-white/20 border-4 border-white/30'>
              🚀
            </div>
            <h3 className='text-2xl font-semibold mb-2'>이재학</h3>
            <p className='opacity-80 mb-8'>AI Engineer</p>
          </div>

          <div className='grid grid-cols-2 gap-4'>
            <div className='stat-box'>
              <span className='stat-number'>92%</span>
              <span className='stat-label'>AI 정확도</span>
            </div>
            <div className='stat-box'>
              <span className='stat-number'>5만개</span>
              <span className='stat-label'>합성데이터</span>
            </div>
            <div className='stat-box'>
              <span className='stat-number'>3개</span>
              <span className='stat-label'>주요 프로젝트</span>
            </div>
            <div className='stat-box'>
              <span className='stat-number'>7주</span>
              <span className='stat-label'>최단 개발</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
