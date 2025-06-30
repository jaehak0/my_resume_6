// === 브라우저 Print 크기 조절 (레이아웃 안전) ===

interface PrintSizeOptions {
  size?: 'compact' | 'normal' | 'large';
  filename?: string;
}

export const generatePDFWithBrowserPrint = (options: PrintSizeOptions = {}) => {
  const { size = 'normal', filename = '이재학_이력서' } = options;

  const originalTitle = document.title;
  document.title = filename;

  // 크기별 설정 (레이아웃 안전)
  const sizeConfig = {
    compact: {
      baseFontSize: '11px',
      heroName: '2rem',
      h2Size: '1.25rem',
      h3Size: '1.1rem',
      textLg: '0.9rem',
      textBase: '0.8rem',
      textSm: '0.75rem',
      padding: '0.75rem',
      margin: '0.5rem',
      gap: '0.5rem',
      sidebarWidth: '240px',
      heroCardWidth: '280px',
      profileImageSize: '80px',
      scale: '0.85',
    },
    normal: {
      baseFontSize: '12px',
      heroName: '2.5rem',
      h2Size: '1.5rem',
      h3Size: '1.25rem',
      textLg: '1rem',
      textBase: '0.875rem',
      textSm: '0.8rem',
      padding: '1rem',
      margin: '0.75rem',
      gap: '0.75rem',
      sidebarWidth: '300px',
      heroCardWidth: '320px',
      profileImageSize: '100px',
      scale: '1',
    },
    large: {
      baseFontSize: '13px',
      heroName: '3rem',
      h2Size: '1.75rem',
      h3Size: '1.5rem',
      textLg: '1.125rem',
      textBase: '1rem',
      textSm: '0.875rem',
      padding: '1.25rem',
      margin: '1rem',
      gap: '1rem',
      sidebarWidth: '350px',
      heroCardWidth: '380px',
      profileImageSize: '120px',
      scale: '1.1',
    },
  };

  const config = sizeConfig[size];

  // 프린트 전용 스타일 적용
  const printStyle = document.createElement('style');
  printStyle.id = 'print-only-styles';
  printStyle.innerHTML = `
    @media print {
      /* 페이지 설정 */
      @page {
        margin: 8mm;
        size: A4;
      }
      
      /* 전체 기본 크기 조정 */
      html {
        font-size: ${config.baseFontSize} !important;
        line-height: 1.4 !important;
      }
      
      body {
        font-size: ${config.baseFontSize} !important;
        line-height: 1.4 !important;
        margin: 0 !important;
        padding: 0 !important;
        transform: scale(${config.scale}) !important;
        transform-origin: top left !important;
        width: ${100 / parseFloat(config.scale)}% !important;
      }
      
      /* 불필요한 요소 숨김 */
      .fixed, .download-btn, nav, .nav, header, button {
        display: none !important;
      }
      
      /* 메인 컨테이너 */
      .resume-container {
        max-width: 100% !important;
        margin: 0 !important;
        padding: 0 !important;
      }
      
      /* Hero 섹션 크기 조정 */
      .hero {
        min-height: auto !important;
        padding: ${config.padding} !important;
        margin-bottom: ${config.margin} !important;
        background: linear-gradient(135deg, #667eea 0%, #764ba2 100%) !important;
        page-break-after: avoid !important;
      }
      
      .hero::before {
        display: none !important;
      }
      
      /* Hero 컨텐츠 레이아웃 */
      .hero-content {
        grid-template-columns: 1fr ${config.heroCardWidth} !important;
        gap: ${config.gap} !important;
        align-items: center !important;
      }
      
      /* 제목 크기 조정 */
      .hero-name, .hero h1 {
        font-size: ${config.heroName} !important;
        margin-bottom: ${config.margin} !important;
        line-height: 1.1 !important;
      }
      
      /* 프로필 이미지 크기 */
      .profile-image,
      .w-56, .h-56, .w-60, .h-60 {
        width: ${config.profileImageSize} !important;
        height: ${config.profileImageSize} !important;
      }
      
      /* 헤딩 크기 조정 */
      .text-4xl, h2 {
        font-size: ${config.h2Size} !important;
        margin-bottom: calc(${config.margin} * 0.75) !important;
      }
      
      .text-3xl, h3 {
        font-size: ${config.h3Size} !important;
        margin-bottom: calc(${config.margin} * 0.5) !important;
      }
      
      .text-2xl {
        font-size: calc(${config.h3Size} * 0.9) !important;
      }
      
      .text-xl {
        font-size: calc(${config.textLg} * 1.1) !important;
      }
      
      .text-lg {
        font-size: ${config.textLg} !important;
      }
      
      .text-base, p, div, span {
        font-size: ${config.textBase} !important;
        line-height: 1.4 !important;
      }
      
      .text-sm {
        font-size: ${config.textSm} !important;
      }
      
      /* 메인 컨텐츠 그리드 */
      .content-grid {
        grid-template-columns: ${config.sidebarWidth} 1fr !important;
        gap: ${config.gap} !important;
        max-width: 100% !important;
      }
      
      /* 패딩과 마진 조정 */
      .p-10, .p-8 {
        padding: ${config.padding} !important;
      }
      
      .p-6, .p-4 {
        padding: calc(${config.padding} * 0.75) !important;
      }
      
      .py-4, .px-4 {
        padding-top: calc(${config.padding} * 0.5) !important;
        padding-bottom: calc(${config.padding} * 0.5) !important;
        padding-left: calc(${config.padding} * 0.5) !important;
        padding-right: calc(${config.padding} * 0.5) !important;
      }
      
      .mb-8, .mb-12, .mb-16 {
        margin-bottom: ${config.margin} !important;
      }
      
      .mb-6, .mb-4 {
        margin-bottom: calc(${config.margin} * 0.75) !important;
      }
      
      .mb-2 {
        margin-bottom: calc(${config.margin} * 0.5) !important;
      }
      
      .gap-16, .gap-12, .gap-8 {
        gap: ${config.gap} !important;
      }
      
      .gap-6, .gap-4 {
        gap: calc(${config.gap} * 0.75) !important;
      }
      
      .gap-2 {
        gap: calc(${config.gap} * 0.5) !important;
      }
      
      /* 사이드바 최적화 */
      .sidebar-section {
        margin-bottom: ${config.margin} !important;
        padding: calc(${config.padding} * 0.8) !important;
      }
      
      .sidebar-title {
        font-size: calc(${config.textBase} * 1.2) !important;
        margin-bottom: calc(${config.margin} * 0.5) !important;
      }
      
      /* 프로젝트 카드 */
      .project-card {
        margin-bottom: ${config.margin} !important;
        page-break-inside: avoid !important;
        break-inside: avoid !important;
      }
      
      .project-card .p-8 {
        padding: calc(${config.padding} * 0.8) !important;
      }
      
      /* 메트릭 카드 그리드 */
      .metric-card {
        padding: calc(${config.padding} * 0.6) !important;
        font-size: ${config.textSm} !important;
      }
      
      .metric-value {
        font-size: calc(${config.textBase} * 1.3) !important;
      }
      
      .metric-label {
        font-size: ${config.textSm} !important;
      }
      
      /* 스킬 태그 */
      .skill-tag, .tech-item {
        padding: 0.2rem 0.4rem !important;
        font-size: ${config.textSm} !important;
        margin: 0.1rem !important;
      }
      
      /* 연락처 아이템 */
      .contact-item {
        padding: calc(${config.padding} * 0.4) !important;
        font-size: ${config.textSm} !important;
      }
      
      /* 페이지 브레이크 최적화 */
      .project-card, .sidebar-section, section {
        break-inside: avoid !important;
        page-break-inside: avoid !important;
      }
      
      /* 색상 최적화 */
      * {
        -webkit-print-color-adjust: exact !important;
        print-color-adjust: exact !important;
      }
      
      /* OKLCH 색상을 강제로 오버라이드 */
      .text-indigo-600, .text-indigo-600 * {
        color: #4f46e5 !important;
      }
      
      .bg-indigo-600, .bg-indigo-600 * {
        background-color: #4f46e5 !important;
      }
      
      .text-indigo-700, .text-indigo-700 * {
        color: #4338ca !important;
      }
      
      .bg-indigo-700, .bg-indigo-700 * {
        background-color: #4338ca !important;
      }
      
      .text-white, .text-white * {
        color: #ffffff !important;
      }
      
      .bg-white, .bg-white * {
        background-color: #ffffff !important;
      }
      
      .text-slate-50, .text-slate-50 * {
        color: #f8fafc !important;
      }
      
      .bg-slate-50, .bg-slate-50 * {
        background-color: #f8fafc !important;
      }
      
      .text-slate-600, .text-slate-600 * {
        color: #475569 !important;
      }
      
      .bg-slate-600, .bg-slate-600 * {
        background-color: #475569 !important;
      }
      
      .text-slate-800, .text-slate-800 * {
        color: #1e293b !important;
      }
      
      .bg-slate-800, .bg-slate-800 * {
        background-color: #1e293b !important;
      }
      
      .border-slate-200, .border-slate-200 * {
        border-color: #e2e8f0 !important;
      }
      
      .border-indigo-600, .border-indigo-600 * {
        border-color: #4f46e5 !important;
      }
      
      /* 그림자 제거 (프린트에서 불필요) */
      .shadow-md, .shadow-lg, .shadow-xl, .shadow-2xl {
        box-shadow: none !important;
      }
      
      /* 애니메이션 제거 */
      *, *::before, *::after {
        animation: none !important;
        transition: none !important;
        transform: none !important;
      }
      
      /* body transform만 유지 */
      body {
        transform: scale(${config.scale}) !important;
        transform-origin: top left !important;
      }
      
      /* 반응형 조정 제거 */
      @media (max-width: 768px) {
        .content-grid {
          grid-template-columns: ${config.sidebarWidth} 1fr !important;
        }
        
        .hero-content {
          grid-template-columns: 1fr ${config.heroCardWidth} !important;
        }
      }
    }
  `;

  document.head.appendChild(printStyle);

  // 프린트 다이얼로그 열기
  window.print();

  // 정리
  setTimeout(() => {
    document.title = originalTitle;
    const styleEl = document.getElementById('print-only-styles');
    if (styleEl) {
      styleEl.remove();
    }
  }, 1000);
};

// 크기별 편의 함수들
export const printCompact = () => generatePDFWithBrowserPrint({ size: 'compact' });
export const printNormal = () => generatePDFWithBrowserPrint({ size: 'normal' });
export const printLarge = () => generatePDFWithBrowserPrint({ size: 'large' });

// React Hook
export const usePDFExport = () => {
  const exportPDF = (size: 'compact' | 'normal' | 'large' = 'normal') => {
    try {
      generatePDFWithBrowserPrint({ size });
    } catch (error) {
      console.error('PDF 생성 오류:', error);
      alert('PDF 생성 중 오류가 발생했습니다.');
    }
  };

  return {
    exportPDF,
    exportCompact: () => exportPDF('compact'),
    exportNormal: () => exportPDF('normal'),
    exportLarge: () => exportPDF('large'),
  };
};
