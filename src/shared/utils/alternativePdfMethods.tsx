// utils/alternativePdfMethods.ts - UI 완전 유지하는 PDF 생성 대안들

// 방법 1: Playwright를 사용한 브라우저 PDF 생성 (가장 추천)
// 방법 4: React-PDF를 사용한 순수 PDF 생성

import jsPDF from 'jspdf';

export const generatePDFWithPlaywright = async () => {
  // 이 방법은 서버에서 실행되어야 함
  // Next.js API route나 별도 서버에서 구현
  const response = await fetch('/api/generate-pdf', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      url: window.location.href,
      selector: '.resume-container',
    }),
  });

  if (response.ok) {
    const blob = await response.blob();
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = '이재학_이력서.pdf';
    a.click();
    window.URL.revokeObjectURL(url);
  }
};

// 방법 2: Puppeteer HTML to PDF (서버 필요)
export const generatePDFWithPuppeteer = async () => {
  const html = document.documentElement.outerHTML;

  const response = await fetch('/api/html-to-pdf', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      html,
      options: {
        format: 'A4',
        printBackground: true,
        margin: {
          top: '20mm',
          right: '20mm',
          bottom: '20mm',
          left: '20mm',
        },
      },
    }),
  });

  if (response.ok) {
    const blob = await response.blob();
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = '이재학_이력서.pdf';
    a.click();
    window.URL.revokeObjectURL(url);
  }
};

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

// 방법 5: jsPDF + DOM 직접 파싱 (oklch 회피)
export const generatePDFWithDirectDOM = async () => {
  const pdf = new jsPDF({
    orientation: 'portrait',
    unit: 'mm',
    format: 'a4',
  });

  // DOM에서 직접 텍스트와 스타일 추출
  const container = document.querySelector('.resume-container') as HTMLElement;
  if (!container) {
    return;
  }

  let yPosition = 20;
  const lineHeight = 7;
  const pageHeight = 297; // A4 height in mm

  // 재귀적으로 DOM 요소들을 순회하면서 PDF에 추가
  const parseElement = (element: Element, level: number = 0) => {
    const computedStyle = window.getComputedStyle(element);
    const text = element.textContent?.trim();

    if (text && element.tagName !== 'SCRIPT' && element.tagName !== 'STYLE') {
      // 페이지 넘김 확인
      if (yPosition > pageHeight - 20) {
        pdf.addPage();
        yPosition = 20;
      }

      // 폰트 크기와 스타일 결정
      let fontSize = 10;
      let fontStyle = 'normal';

      if (element.tagName === 'H1') {
        fontSize = 20;
      } else if (element.tagName === 'H2') {
        fontSize = 16;
      } else if (element.tagName === 'H3') {
        fontSize = 14;
      } else if (computedStyle.fontWeight === 'bold' || computedStyle.fontWeight === '700') {
        fontStyle = 'bold';
      }

      pdf.setFontSize(fontSize);
      pdf.setFont('helvetica', fontStyle);

      // 들여쓰기 적용
      const xPosition = 20 + level * 5;

      // 텍스트 추가
      const textLines = pdf.splitTextToSize(text, 170 - level * 5);
      pdf.text(textLines, xPosition, yPosition);
      yPosition += textLines.length * lineHeight + 3;
    }

    // 자식 요소들 순회
    Array.from(element.children).forEach(child => {
      parseElement(child, level + 1);
    });
  };

  parseElement(container);

  // PDF 다운로드
  pdf.save('이재학_이력서.pdf');
};

// 추천 사용법에 따른 export
export const usePDFExport = () => {
  const exportPDF = async (method: 'browser' | 'playwright' | 'puppeteer' | 'dom' = 'browser') => {
    try {
      switch (method) {
        case 'browser':
          generatePDFWithBrowserPrint();
          break;
        case 'playwright':
          await generatePDFWithPlaywright();
          break;
        case 'puppeteer':
          await generatePDFWithPuppeteer();
          break;
        case 'dom':
          await generatePDFWithDirectDOM();
          break;
        default:
          generatePDFWithBrowserPrint();
      }
    } catch (error) {
      console.error('PDF 생성 오류:', error);
      // 실패시 브라우저 기본 프린트로 폴백
      generatePDFWithBrowserPrint();
    }
  };

  return { exportPDF };
};
