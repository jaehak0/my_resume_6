// utils/ultimatePdfFix.ts - 궁극의 PDF 변환 해결책

import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

interface PDFExportOptions {
  filename?: string;
  containerSelector?: string;
  scale?: number;
  showLoading?: boolean;
  loadingText?: string;
}

// Tailwind 클래스를 인라인 스타일로 매핑
const tailwindToInlineStyles: { [key: string]: string } = {
  // Background colors
  'bg-white': 'background-color: #ffffff',
  'bg-black': 'background-color: #000000',
  'bg-slate-50': 'background-color: #f8fafc',
  'bg-slate-100': 'background-color: #f1f5f9',
  'bg-slate-200': 'background-color: #e2e8f0',
  'bg-slate-300': 'background-color: #cbd5e1',
  'bg-slate-600': 'background-color: #475569',
  'bg-slate-700': 'background-color: #334155',
  'bg-slate-800': 'background-color: #1e293b',
  'bg-indigo-50': 'background-color: #eef2ff',
  'bg-indigo-600': 'background-color: #4f46e5',
  'bg-indigo-700': 'background-color: #4338ca',
  'bg-amber-500': 'background-color: #f59e0b',
  'bg-green-500': 'background-color: #22c55e',
  'bg-red-500': 'background-color: #ef4444',
  'bg-transparent': 'background-color: transparent',

  // Text colors
  'text-white': 'color: #ffffff',
  'text-black': 'color: #000000',
  'text-slate-600': 'color: #475569',
  'text-slate-700': 'color: #334155',
  'text-slate-800': 'color: #1e293b',
  'text-indigo-600': 'color: #4f46e5',

  // Border colors
  'border-white': 'border-color: #ffffff',
  'border-slate-200': 'border-color: #e2e8f0',
  'border-slate-300': 'border-color: #cbd5e1',
  'border-indigo-600': 'border-color: #4f46e5',

  // Layout & spacing
  'p-1': 'padding: 0.25rem',
  'p-2': 'padding: 0.5rem',
  'p-3': 'padding: 0.75rem',
  'p-4': 'padding: 1rem',
  'p-6': 'padding: 1.5rem',
  'p-8': 'padding: 2rem',
  'p-10': 'padding: 2.5rem',
  'px-3': 'padding-left: 0.75rem; padding-right: 0.75rem',
  'px-4': 'padding-left: 1rem; padding-right: 1rem',
  'px-6': 'padding-left: 1.5rem; padding-right: 1.5rem',
  'px-8': 'padding-left: 2rem; padding-right: 2rem',
  'py-2': 'padding-top: 0.5rem; padding-bottom: 0.5rem',
  'py-4': 'padding-top: 1rem; padding-bottom: 1rem',

  'm-1': 'margin: 0.25rem',
  'm-2': 'margin: 0.5rem',
  'm-4': 'margin: 1rem',
  'mb-2': 'margin-bottom: 0.5rem',
  'mb-4': 'margin-bottom: 1rem',
  'mb-6': 'margin-bottom: 1.5rem',
  'mb-8': 'margin-bottom: 2rem',
  'mt-4': 'margin-top: 1rem',
  'mt-8': 'margin-top: 2rem',

  // Typography
  'text-sm': 'font-size: 0.875rem; line-height: 1.25rem',
  'text-base': 'font-size: 1rem; line-height: 1.5rem',
  'text-lg': 'font-size: 1.125rem; line-height: 1.75rem',
  'text-xl': 'font-size: 1.25rem; line-height: 1.75rem',
  'text-2xl': 'font-size: 1.5rem; line-height: 2rem',
  'text-3xl': 'font-size: 1.875rem; line-height: 2.25rem',
  'text-4xl': 'font-size: 2.25rem; line-height: 2.5rem',
  'font-medium': 'font-weight: 500',
  'font-semibold': 'font-weight: 600',
  'font-bold': 'font-weight: 700',

  // Borders & radius
  border: 'border-width: 1px',
  'border-2': 'border-width: 2px',
  rounded: 'border-radius: 0.25rem',
  'rounded-lg': 'border-radius: 0.5rem',
  'rounded-xl': 'border-radius: 0.75rem',
  'rounded-2xl': 'border-radius: 1rem',
  'rounded-full': 'border-radius: 9999px',

  // Shadows
  'shadow-sm': 'box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05)',
  shadow: 'box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px -1px rgba(0, 0, 0, 0.1)',
  'shadow-md': 'box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1)',
  'shadow-lg': 'box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -4px rgba(0, 0, 0, 0.1)',
  'shadow-xl':
    'box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1)',
  'shadow-2xl': 'box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25)',

  // Display & layout
  flex: 'display: flex',
  block: 'display: block',
  'inline-block': 'display: inline-block',
  hidden: 'display: none',
  grid: 'display: grid',

  // Positioning
  relative: 'position: relative',
  absolute: 'position: absolute',
  fixed: 'position: fixed',

  // Width & Height
  'w-full': 'width: 100%',
  'h-full': 'height: 100%',
  'min-h-screen': 'min-height: 100vh',

  // Others
  'overflow-hidden': 'overflow: hidden',
  'cursor-pointer': 'cursor: pointer',
  'transition-all': 'transition: all 0.3s ease',
};

// 특별한 색상 조합들
const specialStyles: { [key: string]: string } = {
  'hero-gradient': 'background: linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
  'hero-card-bg':
    'background: rgba(255, 255, 255, 0.1); border: 1px solid rgba(255, 255, 255, 0.2)',
  'stat-box-bg': 'background: rgba(255, 255, 255, 0.1); border: 1px solid rgba(255, 255, 255, 0.1)',
};

// 모든 Tailwind CSS 스타일시트를 임시로 비활성화
const disableTailwindCSS = (): (() => void) => {
  const styleSheets = Array.from(document.styleSheets);
  const tailwindSheets: { sheet: CSSStyleSheet; disabled: boolean }[] = [];

  styleSheets.forEach(sheet => {
    try {
      // Tailwind CSS 관련 스타일시트 찾기
      if (
        sheet.href?.includes('tailwind') ||
        sheet.href?.includes('cdn.tailwindcss.com') ||
        (sheet.ownerNode as HTMLElement)?.getAttribute('data-tailwind') !== null
      ) {
        tailwindSheets.push({
          sheet,
          disabled: sheet.disabled,
        });
        sheet.disabled = true;
      }
    } catch (e) {
      // CORS 에러 무시
    }
  });

  // 복원 함수 반환
  return () => {
    tailwindSheets.forEach(({ sheet, disabled }) => {
      sheet.disabled = disabled;
    });
  };
};

// 요소의 Tailwind 클래스를 인라인 스타일로 변환
const convertTailwindToInlineStyles = (element: HTMLElement): (() => void) => {
  const restorationData: { element: HTMLElement; originalStyle: string }[] = [];

  const processElement = (el: HTMLElement) => {
    const classes = el.className.split(' ');
    const inlineStyles: string[] = [];

    // 기존 인라인 스타일 저장
    restorationData.push({
      element: el,
      originalStyle: el.getAttribute('style') || '',
    });

    // Tailwind 클래스를 인라인 스타일로 변환
    classes.forEach(className => {
      if (tailwindToInlineStyles[className]) {
        inlineStyles.push(tailwindToInlineStyles[className]);
      }
    });

    // 특별한 클래스들 처리
    if (el.classList.contains('hero')) {
      inlineStyles.push(specialStyles['hero-gradient']);
    }
    if (el.classList.contains('hero-card')) {
      inlineStyles.push(specialStyles['hero-card-bg']);
    }
    if (el.classList.contains('stat-box')) {
      inlineStyles.push(specialStyles['stat-box-bg']);
    }

    // 인라인 스타일 적용
    if (inlineStyles.length > 0) {
      const existingStyle = el.getAttribute('style') || '';
      const newStyle = existingStyle + '; ' + inlineStyles.join('; ');
      el.setAttribute('style', newStyle);
    }
  };

  // 모든 하위 요소에 적용
  const allElements = element.querySelectorAll('*');
  processElement(element);
  allElements.forEach(el => processElement(el as HTMLElement));

  // 복원 함수 반환
  return () => {
    restorationData.forEach(({ element, originalStyle }) => {
      if (originalStyle) {
        element.setAttribute('style', originalStyle);
      } else {
        element.removeAttribute('style');
      }
    });
  };
};

export const exportToPDF = async (options: PDFExportOptions = {}) => {
  const {
    filename = '이재학_이력서.pdf',
    containerSelector = '.resume-container',
    scale = 2,
    showLoading = true,
    loadingText = '📄 PDF 생성 중...',
  } = options;

  let loadingElement: HTMLElement | null = null;
  let restoreTailwind: (() => void) | null = null;
  let restoreInlineStyles: (() => void) | null = null;

  try {
    if (showLoading) {
      loadingElement = document.createElement('div');
      loadingElement.innerHTML = `
        <div style="
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(0,0,0,0.8);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 9999;
          color: white;
          font-size: 18px;
        ">
          ${loadingText}
        </div>
      `;
      document.body.appendChild(loadingElement);
    }

    const element = document.querySelector(containerSelector) as HTMLElement;

    if (!element) {
      throw new Error(`컨테이너 요소 '${containerSelector}'를 찾을 수 없습니다.`);
    }

    // 1단계: Tailwind CSS 비활성화
    restoreTailwind = disableTailwindCSS();

    // 2단계: Tailwind 클래스를 인라인 스타일로 변환
    restoreInlineStyles = convertTailwindToInlineStyles(element);

    // 고정 요소들 임시 숨김
    const fixedElements = document.querySelectorAll('.fixed');
    const hiddenElements: { element: HTMLElement; originalDisplay: string }[] = [];

    fixedElements.forEach(el => {
      const htmlEl = el as HTMLElement;
      hiddenElements.push({
        element: htmlEl,
        originalDisplay: htmlEl.style.display,
      });
      htmlEl.style.display = 'none';
    });

    // 네비게이션과 다운로드 버튼 숨김
    const elementsToHide = ['.nav', '.download-btn'];
    elementsToHide.forEach(selector => {
      const el = document.querySelector(selector) as HTMLElement;
      if (el) {
        hiddenElements.push({
          element: el,
          originalDisplay: el.style.display,
        });
        el.style.display = 'none';
      }
    });

    // 잠시 대기 (스타일 적용 시간)
    await new Promise(resolve => setTimeout(resolve, 200));

    // html2canvas 실행
    const canvas = await html2canvas(element, {
      scale,
      useCORS: true,
      allowTaint: true,
      backgroundColor: '#ffffff',
      width: element.scrollWidth,
      height: element.scrollHeight,
      scrollX: 0,
      scrollY: 0,
      removeContainer: false,
      imageTimeout: 30000,
    });

    // PDF 생성
    const imgData = canvas.toDataURL('image/png', 1.0);

    const pdf = new jsPDF({
      orientation: 'portrait',
      unit: 'mm',
      format: 'a4',
    });

    const pdfWidth = pdf.internal.pageSize.getWidth();
    const pdfHeight = pdf.internal.pageSize.getHeight();

    const imgWidth = pdfWidth;
    const imgHeight = (canvas.height * pdfWidth) / canvas.width;

    let heightLeft = imgHeight;
    let position = 0;

    // 첫 페이지 추가
    pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight, '', 'FAST');
    heightLeft -= pdfHeight;

    // 여러 페이지가 필요한 경우 페이지 추가
    while (heightLeft >= 0) {
      position = heightLeft - imgHeight;
      pdf.addPage();
      pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight, '', 'FAST');
      heightLeft -= pdfHeight;
    }

    // PDF 다운로드
    pdf.save(filename);

    // 원래 스타일 복원
    hiddenElements.forEach(({ element, originalDisplay }) => {
      element.style.display = originalDisplay;
    });

    // Tailwind 및 인라인 스타일 복원
    if (restoreInlineStyles) {
      restoreInlineStyles();
    }
    if (restoreTailwind) {
      restoreTailwind();
    }

    // 로딩 제거
    if (loadingElement) {
      document.body.removeChild(loadingElement);
    }

    return { success: true, message: 'PDF가 성공적으로 생성되었습니다.' };
  } catch (error) {
    console.error('PDF 생성 중 오류 발생:', error);

    // 에러 발생시에도 정리
    if (restoreInlineStyles) {
      restoreInlineStyles();
    }
    if (restoreTailwind) {
      restoreTailwind();
    }

    if (loadingElement) {
      document.body.removeChild(loadingElement);
    }

    throw new Error(`PDF 생성 실패: ${error instanceof Error ? error.message : '알 수 없는 오류'}`);
  }
};

// 기본 래퍼 함수들
export const exportResumeToPDF = () => {
  return exportToPDF({
    filename: '이재학_이력서.pdf',
    containerSelector: '.resume-container',
  });
};

export const usePDFExport = () => {
  const exportPDF = async (options?: PDFExportOptions) => {
    try {
      await exportToPDF(options);
    } catch (error) {
      alert('PDF 생성 중 오류가 발생했습니다. 다시 시도해주세요.');
    }
  };

  return { exportPDF };
};
