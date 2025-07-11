// utils/alternativePdfMethods.ts - UI 완전 유지하는 PDF 생성 대안들

// 방법 3: 브라우저 내장 print 기능 활용 (가장 간단)
export const generatePDFWithBrowserPrint = () => {
  // CSS @media print 스타일을 완벽하게 활용
  const originalTitle = document.title;
  document.title = '이재학_이력서';

  // 프린트 전용 스타일 적용
  const printStyle = document.createElement('style');
  printStyle.id = 'print-only-styles';
  printStyle.innerHTML = `
    @media print {
      /* 헤더, 푸터 제거 */
      @page {
        margin: 0;
        margin-top: 0.5cm;
        size: A4;
      }
      
      @page:first{
        margin-top: 0;
      }
      
      html, body {
        zoom: 89% !important;
      }
      
    .hero, .hero * {
      zoom: 100% !important;
    }
      
      .pdf-only {
        display: block !important;
      }
      
      .hero{
        padding-bottom: 1.2cm !important;
      }
      
      
      .hero-name, .hero-name * {
        background: none !important;
        background-image: none !important;
        -webkit-background-clip: border-box !important;
        -webkit-text-fill-color: white !important;
        background-clip: border-box !important;
        color: white !important;
      }
      
      .sidebar {
        margin-top: -1.6cm !important;
      }
      /* 불필요한 요소 숨김 */
      .fixed, .download-btn, nav {
        display: none !important;
      }
      
      /* 페이지 브레이크 최적화 */
      .project-card, .sidebar-section {
        break-inside: avoid;
        page-break-inside: avoid;
      }
      
      /* 강제로 페이지 나누기 */
      .force-page-break {
        page-break-before: always; /* 이 요소 앞에서 페이지 나눔 */
        break-before: page;        /* 최신 표준 */
      }
      
      .trouble-shooting, .leading-section, education-section,
      .skills-section {
        margin-top: -1.2cm;
      }
      
      /* 색상 최적화 */
      * {
        -webkit-print-color-adjust: exact !important;
        print-color-adjust: exact !important;
      }
      
      /* oklch 색상을 강제로 오버라이드 */
      .hero {
        background: linear-gradient(135deg, #667eea 0%, #764ba2 100%) !important;
      }
      
      .text-indigo-600, .text-indigo-600 * {
        color: #4f46e5 !important;
      }
      
      .bg-indigo-600, .bg-indigo-600 * {
        background-color: #4f46e5 !important;
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

// 추천 사용법에 따른 export
export const usePDFExport = () => {
  const exportPDF = async () => {
    generatePDFWithBrowserPrint();
  };
  return { exportPDF };
};
