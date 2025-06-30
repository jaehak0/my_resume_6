import React from 'react';

const ContactSection: React.FC = () => {
  return (
    <section className='bg-white rounded-2xl p-10 shadow-md border border-slate-200'>
      <div className='text-center mb-8'>
        <h2 className='text-4xl font-bold text-indigo-600 mb-2 flex items-center justify-center gap-3'>
          🚀 함께 일해요!
        </h2>
        <p className='text-slate-600 text-lg'>
          새로운 AI 프로젝트와 혁신적인 아이디어를 함께 실현하고 싶습니다.
        </p>
      </div>

      <div className='bg-slate-50 p-8 rounded-xl mb-8'>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-6 text-center'>
          <div>
            <h4 className='text-indigo-600 font-semibold mb-2'>💼 희망 포지션</h4>
            <p className='text-slate-600 text-sm'>
              AI Engineer (1순위)
              <br />
              Frontend Developer (2순위)
              <br />
              Backend Developer (3순위)
            </p>
          </div>
          <div>
            <h4 className='text-indigo-600 font-semibold mb-2'>🎯 핵심 역량</h4>
            <p className='text-slate-600 text-sm'>
              LLM 파인튜닝
              <br />
              Multi-Agent 시스템
              <br />
              Full-Stack 개발
            </p>
          </div>
          <div>
            <h4 className='text-indigo-600 font-semibold mb-2'>🌟 특별한 점</h4>
            <p className='text-slate-600 text-sm'>
              빠른 학습 능력
              <br />
              실무 문제 해결
              <br />팀 멘토링 경험
            </p>
          </div>
        </div>
      </div>

      <div className='flex justify-center gap-4 flex-wrap mb-8'>
        <a
          href='mailto:jack1087902@gmail.com'
          className='bg-indigo-600 text-white px-8 py-4 rounded-xl font-semibold hover:-translate-y-1 hover:shadow-xl transition-all flex items-center gap-2'
        >
          📧 이메일로 연락하기
        </a>
        <a
          href='https://github.com/jaehak0'
          className='border-2 border-indigo-600 text-indigo-600 px-8 py-4 rounded-xl font-semibold hover:bg-indigo-50 transition-all flex items-center gap-2'
        >
          💻 GitHub에서 더 보기
        </a>
        <a
          href='https://curse-swordtail-eb6.notion.site/91a958c8e09441b2b5297a672b81d0db'
          className='border-2 border-indigo-600 text-indigo-600 px-8 py-4 rounded-xl font-semibold hover:bg-indigo-50 transition-all flex items-center gap-2'
        >
          📝 학습 노트 보기
        </a>
      </div>

      <div className='text-center p-4 bg-gradient-to-r from-indigo-600 to-indigo-700 text-white rounded-xl'>
        <p className='text-lg font-medium'>
          "다변량 절단정규분포로 5만개 데이터를 생성하고, 92% 정확도의 AI 모델을 7주 만에 완성한
          개발자입니다."
        </p>
      </div>
    </section>
  );
};

export default ContactSection;
