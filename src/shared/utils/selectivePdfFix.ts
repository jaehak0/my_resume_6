import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import { pdfCompatibleCSS } from '@shared/utils/pdfColorFix.ts';

interface PDFExportOptions {
  filename?: string;
  containerSelector?: string;
  scale?: number;
  showLoading?: boolean;
  loadingText?: string;
}

// 더 가벼운 oklch 색상 교체용 CSS - 기존 스타일을 보존
export const lightweightPdfCSS = `
<style id="pdf-oklch-fix">
/* 모든 요소의 box-shadow에서 oklab/oklch 제거 */
*, *::before, *::after {
  box-shadow: none !important;
  text-shadow: none !important;
  backdrop-filter: none !important;
  -webkit-backdrop-filter: none !important;
}

/* 기본적으로 자주 사용되는 그림자 재정의 */
.shadow-sm {
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05) !important;
}
.shadow {
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px -1px rgba(0, 0, 0, 0.1) !important;
}
.shadow-md {
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1) !important;
}
.shadow-lg {
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -4px rgba(0, 0, 0, 0.1) !important;
}
.shadow-xl {
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1) !important;
}
.shadow-2xl {
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25) !important;
}

/* Ring shadows도 재정의 */
.ring-0 { box-shadow: 0 0 0 0px transparent !important; }
.ring-1 { box-shadow: 0 0 0 1px rgba(59, 130, 246, 0.5) !important; }
.ring-2 { box-shadow: 0 0 0 2px rgba(59, 130, 246, 0.5) !important; }
.ring { box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.5) !important; }
.ring-4 { box-shadow: 0 0 0 4px rgba(59, 130, 246, 0.5) !important; }
.ring-8 { box-shadow: 0 0 0 8px rgba(59, 130, 246, 0.5) !important; }

.ring-white { box-shadow: 0 0 0 3px #ffffff !important; }
.ring-white\/20 { box-shadow: 0 0 0 3px rgba(255, 255, 255, 0.2) !important; }
.ring-white\/30 { box-shadow: 0 0 0 3px rgba(255, 255, 255, 0.3) !important; }
.ring-indigo-500 { box-shadow: 0 0 0 3px #6366f1 !important; }
.ring-indigo-600 { box-shadow: 0 0 0 3px #4f46e5 !important; }

/* Tailwind의 기본 oklch 색상들을 hex로 교체 */
.bg-slate-50 { background-color: #f8fafc !important; }
.bg-slate-100 { background-color: #f1f5f9 !important; }
.bg-slate-200 { background-color: #e2e8f0 !important; }
.bg-slate-300 { background-color: #cbd5e1 !important; }
.bg-slate-400 { background-color: #94a3b8 !important; }
.bg-slate-500 { background-color: #64748b !important; }
.bg-slate-600 { background-color: #475569 !important; }
.bg-slate-700 { background-color: #334155 !important; }
.bg-slate-800 { background-color: #1e293b !important; }
.bg-slate-900 { background-color: #0f172a !important; }
.bg-slate-950 { background-color: #020617 !important; }

.text-slate-50 { color: #f8fafc !important; }
.text-slate-100 { color: #f1f5f9 !important; }
.text-slate-200 { color: #e2e8f0 !important; }
.text-slate-300 { color: #cbd5e1 !important; }
.text-slate-400 { color: #94a3b8 !important; }
.text-slate-500 { color: #64748b !important; }
.text-slate-600 { color: #475569 !important; }
.text-slate-700 { color: #334155 !important; }
.text-slate-800 { color: #1e293b !important; }
.text-slate-900 { color: #0f172a !important; }
.text-slate-950 { color: #020617 !important; }

.border-slate-50 { border-color: #f8fafc !important; }
.border-slate-100 { border-color: #f1f5f9 !important; }
.border-slate-200 { border-color: #e2e8f0 !important; }
.border-slate-300 { border-color: #cbd5e1 !important; }
.border-slate-400 { border-color: #94a3b8 !important; }
.border-slate-500 { border-color: #64748b !important; }
.border-slate-600 { border-color: #475569 !important; }
.border-slate-700 { border-color: #334155 !important; }
.border-slate-800 { border-color: #1e293b !important; }
.border-slate-900 { border-color: #0f172a !important; }
.border-slate-950 { border-color: #020617 !important; }

/* Gray 색상들 */
.bg-gray-50 { background-color: #f9fafb !important; }
.bg-gray-100 { background-color: #f3f4f6 !important; }
.bg-gray-200 { background-color: #e5e7eb !important; }
.bg-gray-300 { background-color: #d1d5db !important; }
.bg-gray-400 { background-color: #9ca3af !important; }
.bg-gray-500 { background-color: #6b7280 !important; }
.bg-gray-600 { background-color: #4b5563 !important; }
.bg-gray-700 { background-color: #374151 !important; }
.bg-gray-800 { background-color: #1f2937 !important; }
.bg-gray-900 { background-color: #111827 !important; }
.bg-gray-950 { background-color: #030712 !important; }

.text-gray-50 { color: #f9fafb !important; }
.text-gray-100 { color: #f3f4f6 !important; }
.text-gray-200 { color: #e5e7eb !important; }
.text-gray-300 { color: #d1d5db !important; }
.text-gray-400 { color: #9ca3af !important; }
.text-gray-500 { color: #6b7280 !important; }
.text-gray-600 { color: #4b5563 !important; }
.text-gray-700 { color: #374151 !important; }
.text-gray-800 { color: #1f2937 !important; }
.text-gray-900 { color: #111827 !important; }
.text-gray-950 { color: #030712 !important; }

.border-gray-50 { border-color: #f9fafb !important; }
.border-gray-100 { border-color: #f3f4f6 !important; }
.border-gray-200 { border-color: #e5e7eb !important; }
.border-gray-300 { border-color: #d1d5db !important; }
.border-gray-400 { border-color: #9ca3af !important; }
.border-gray-500 { border-color: #6b7280 !important; }
.border-gray-600 { border-color: #4b5563 !important; }
.border-gray-700 { border-color: #374151 !important; }
.border-gray-800 { border-color: #1f2937 !important; }
.border-gray-900 { border-color: #111827 !important; }
.border-gray-950 { border-color: #030712 !important; }

.bg-indigo-50 { background-color: #eef2ff !important; }
.bg-indigo-100 { background-color: #e0e7ff !important; }
.bg-indigo-200 { background-color: #c7d2fe !important; }
.bg-indigo-300 { background-color: #a5b4fc !important; }
.bg-indigo-400 { background-color: #818cf8 !important; }
.bg-indigo-500 { background-color: #6366f1 !important; }
.bg-indigo-600 { background-color: #4f46e5 !important; }
.bg-indigo-700 { background-color: #4338ca !important; }
.bg-indigo-800 { background-color: #3730a3 !important; }
.bg-indigo-900 { background-color: #312e81 !important; }
.bg-indigo-950 { background-color: #1e1b4b !important; }

.text-indigo-50 { color: #eef2ff !important; }
.text-indigo-100 { color: #e0e7ff !important; }
.text-indigo-200 { color: #c7d2fe !important; }
.text-indigo-300 { color: #a5b4fc !important; }
.text-indigo-400 { color: #818cf8 !important; }
.text-indigo-500 { color: #6366f1 !important; }
.text-indigo-600 { color: #4f46e5 !important; }
.text-indigo-700 { color: #4338ca !important; }
.text-indigo-800 { color: #3730a3 !important; }
.text-indigo-900 { color: #312e81 !important; }
.text-indigo-950 { color: #1e1b4b !important; }

.border-indigo-50 { border-color: #eef2ff !important; }
.border-indigo-100 { border-color: #e0e7ff !important; }
.border-indigo-200 { border-color: #c7d2fe !important; }
.border-indigo-300 { border-color: #a5b4fc !important; }
.border-indigo-400 { border-color: #818cf8 !important; }
.border-indigo-500 { border-color: #6366f1 !important; }
.border-indigo-600 { border-color: #4f46e5 !important; }
.border-indigo-700 { border-color: #4338ca !important; }
.border-indigo-800 { border-color: #3730a3 !important; }
.border-indigo-900 { border-color: #312e81 !important; }
.border-indigo-950 { border-color: #1e1b4b !important; }

.bg-amber-50 { background-color: #fffbeb !important; }
.bg-amber-100 { background-color: #fef3c7 !important; }
.bg-amber-200 { background-color: #fde68a !important; }
.bg-amber-300 { background-color: #fcd34d !important; }
.bg-amber-400 { background-color: #fbbf24 !important; }
.bg-amber-500 { background-color: #f59e0b !important; }
.bg-amber-600 { background-color: #d97706 !important; }
.bg-amber-700 { background-color: #b45309 !important; }
.bg-amber-800 { background-color: #92400e !important; }
.bg-amber-900 { background-color: #78350f !important; }

.text-amber-50 { color: #fffbeb !important; }
.text-amber-100 { color: #fef3c7 !important; }
.text-amber-200 { color: #fde68a !important; }
.text-amber-300 { color: #fcd34d !important; }
.text-amber-400 { color: #fbbf24 !important; }
.text-amber-500 { color: #f59e0b !important; }
.text-amber-600 { color: #d97706 !important; }
.text-amber-700 { color: #b45309 !important; }
.text-amber-800 { color: #92400e !important; }
.text-amber-900 { color: #78350f !important; }

.border-amber-50 { border-color: #fffbeb !important; }
.border-amber-100 { border-color: #fef3c7 !important; }
.border-amber-200 { border-color: #fde68a !important; }
.border-amber-300 { border-color: #fcd34d !important; }
.border-amber-400 { border-color: #fbbf24 !important; }
.border-amber-500 { border-color: #f59e0b !important; }
.border-amber-600 { border-color: #d97706 !important; }
.border-amber-700 { border-color: #b45309 !important; }
.border-amber-800 { border-color: #92400e !important; }
.border-amber-900 { border-color: #78350f !important; }

.bg-green-50 { background-color: #f0fdf4 !important; }
.bg-green-100 { background-color: #dcfce7 !important; }
.bg-green-200 { background-color: #bbf7d0 !important; }
.bg-green-300 { background-color: #86efac !important; }
.bg-green-400 { background-color: #4ade80 !important; }
.bg-green-500 { background-color: #22c55e !important; }
.bg-green-600 { background-color: #16a34a !important; }
.bg-green-700 { background-color: #15803d !important; }
.bg-green-800 { background-color: #166534 !important; }
.bg-green-900 { background-color: #14532d !important; }

.text-green-50 { color: #f0fdf4 !important; }
.text-green-100 { color: #dcfce7 !important; }
.text-green-200 { color: #bbf7d0 !important; }
.text-green-300 { color: #86efac !important; }
.text-green-400 { color: #4ade80 !important; }
.text-green-500 { color: #22c55e !important; }
.text-green-600 { color: #16a34a !important; }
.text-green-700 { color: #15803d !important; }
.text-green-800 { color: #166534 !important; }
.text-green-900 { color: #14532d !important; }

.border-green-50 { border-color: #f0fdf4 !important; }
.border-green-100 { border-color: #dcfce7 !important; }
.border-green-200 { border-color: #bbf7d0 !important; }
.border-green-300 { border-color: #86efac !important; }
.border-green-400 { border-color: #4ade80 !important; }
.border-green-500 { border-color: #22c55e !important; }
.border-green-600 { border-color: #16a34a !important; }
.border-green-700 { border-color: #15803d !important; }
.border-green-800 { border-color: #166534 !important; }
.border-green-900 { border-color: #14532d !important; }

.bg-red-50 { background-color: #fef2f2 !important; }
.bg-red-100 { background-color: #fee2e2 !important; }
.bg-red-200 { background-color: #fecaca !important; }
.bg-red-300 { background-color: #fca5a5 !important; }
.bg-red-400 { background-color: #f87171 !important; }
.bg-red-500 { background-color: #ef4444 !important; }
.bg-red-600 { background-color: #dc2626 !important; }
.bg-red-700 { background-color: #b91c1c !important; }
.bg-red-800 { background-color: #991b1b !important; }
.bg-red-900 { background-color: #7f1d1d !important; }

.text-red-50 { color: #fef2f2 !important; }
.text-red-100 { color: #fee2e2 !important; }
.text-red-200 { color: #fecaca !important; }
.text-red-300 { color: #fca5a5 !important; }
.text-red-400 { color: #f87171 !important; }
.text-red-500 { color: #ef4444 !important; }
.text-red-600 { color: #dc2626 !important; }
.text-red-700 { color: #b91c1c !important; }
.text-red-800 { color: #991b1b !important; }
.text-red-900 { color: #7f1d1d !important; }

.border-red-50 { border-color: #fef2f2 !important; }
.border-red-100 { border-color: #fee2e2 !important; }
.border-red-200 { border-color: #fecaca !important; }
.border-red-300 { border-color: #fca5a5 !important; }
.border-red-400 { border-color: #f87171 !important; }
.border-red-500 { border-color: #ef4444 !important; }
.border-red-600 { border-color: #dc2626 !important; }
.border-red-700 { border-color: #b91c1c !important; }
.border-red-800 { border-color: #991b1b !important; }
.border-red-900 { border-color: #7f1d1d !important; }

/* Blue 색상들 */
.bg-blue-50 { background-color: #eff6ff !important; }
.bg-blue-100 { background-color: #dbeafe !important; }
.bg-blue-200 { background-color: #bfdbfe !important; }
.bg-blue-300 { background-color: #93c5fd !important; }
.bg-blue-400 { background-color: #60a5fa !important; }
.bg-blue-500 { background-color: #3b82f6 !important; }
.bg-blue-600 { background-color: #2563eb !important; }
.bg-blue-700 { background-color: #1d4ed8 !important; }
.bg-blue-800 { background-color: #1e40af !important; }
.bg-blue-900 { background-color: #1e3a8a !important; }

.text-blue-50 { color: #eff6ff !important; }
.text-blue-100 { color: #dbeafe !important; }
.text-blue-200 { color: #bfdbfe !important; }
.text-blue-300 { color: #93c5fd !important; }
.text-blue-400 { color: #60a5fa !important; }
.text-blue-500 { color: #3b82f6 !important; }
.text-blue-600 { color: #2563eb !important; }
.text-blue-700 { color: #1d4ed8 !important; }
.text-blue-800 { color: #1e40af !important; }
.text-blue-900 { color: #1e3a8a !important; }

.border-blue-50 { border-color: #eff6ff !important; }
.border-blue-100 { border-color: #dbeafe !important; }
.border-blue-200 { border-color: #bfdbfe !important; }
.border-blue-300 { border-color: #93c5fd !important; }
.border-blue-400 { border-color: #60a5fa !important; }
.border-blue-500 { border-color: #3b82f6 !important; }
.border-blue-600 { border-color: #2563eb !important; }
.border-blue-700 { border-color: #1d4ed8 !important; }
.border-blue-800 { border-color: #1e40af !important; }
.border-blue-900 { border-color: #1e3a8a !important; }

/* 기본 색상들 */
.bg-white { background-color: #ffffff !important; }
.bg-black { background-color: #000000 !important; }
.bg-transparent { background-color: transparent !important; }
.text-white { color: #ffffff !important; }
.text-black { color: #000000 !important; }
.text-transparent { color: transparent !important; }
.border-white { border-color: #ffffff !important; }
.border-black { border-color: #000000 !important; }
.border-transparent { border-color: transparent !important; }

/* 투명도 색상들 - 자주 사용되는 것들만 */
.bg-white\/95 { background-color: rgba(255, 255, 255, 0.95) !important; }
.bg-white\/90 { background-color: rgba(255, 255, 255, 0.9) !important; }
.bg-white\/20 { background-color: rgba(255, 255, 255, 0.2) !important; }
.bg-white\/10 { background-color: rgba(255, 255, 255, 0.1) !important; }
.bg-black\/80 { background-color: rgba(0, 0, 0, 0.8) !important; }

.border-white\/30 { border-color: rgba(255, 255, 255, 0.3) !important; }
.border-white\/20 { border-color: rgba(255, 255, 255, 0.2) !important; }
.border-white\/10 { border-color: rgba(255, 255, 255, 0.1) !important; }

/* 커스텀 CSS 클래스들은 그대로 유지 */
.hero {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%) !important;
}

/* 프로젝트에서 사용하는 커스텀 클래스들 */
.hero-card {
  background: rgba(255, 255, 255, 0.1) !important;
  border: 1px solid rgba(255, 255, 255, 0.2) !important;
  box-shadow: none !important;
}

.stat-box {
  background: rgba(255, 255, 255, 0.1) !important;
  border: 1px solid rgba(255, 255, 255, 0.1) !important;
  box-shadow: none !important;
}

.project-card {
  background-color: #f8fafc !important;
  border-color: #e2e8f0 !important;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1) !important;
}

.sidebar-section {
  background-color: #ffffff !important;
  border-color: #e2e8f0 !important;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1) !important;
}

.contact-item {
  background-color: #f8fafc !important;
}

.skill-tag {
  background-color: #f8fafc !important;
  color: #1e293b !important;
  border-color: #e2e8f0 !important;
}

.tech-item {
  background-color: #4f46e5 !important;
  color: #ffffff !important;
}

.btn-primary {
  background-color: #ffffff !important;
  color: #4f46e5 !important;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1) !important;
}

.btn-outline {
  background-color: transparent !important;
  color: #ffffff !important;
  border: 2px solid rgba(255, 255, 255, 0.3) !important;
}

.download-btn {
  background-color: #4f46e5 !important;
  color: #ffffff !important;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1) !important;
}
</style>
`;

// 가벼운 스타일 주입
export const injectLightweightPdfStyles = (): HTMLStyleElement => {
  const styleElement = document.createElement('style');
  styleElement.id = 'pdf-oklch-fix';
  styleElement.innerHTML = pdfCompatibleCSS.replace(/<\/?style[^>]*>/g, '');
  document.head.appendChild(styleElement);
  return styleElement;
};

// 가벼운 스타일 제거
export const removeLightweightPdfStyles = (): void => {
  const existingStyle = document.getElementById('pdf-oklch-fix');
  if (existingStyle) {
    existingStyle.remove();
  }
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
  let pdfStyleElement: HTMLStyleElement | null = null;

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

    // 가벼운 PDF 호환 스타일 주입
    pdfStyleElement = injectLightweightPdfStyles();

    const element = document.querySelector(containerSelector) as HTMLElement;

    if (!element) {
      throw new Error(`컨테이너 요소 '${containerSelector}'를 찾을 수 없습니다.`);
    }

    // 고정 요소들만 숨김 (기존 스타일은 보존)
    const elementsToHide = ['.fixed', '.download-btn', 'nav', '.nav'];

    const hiddenElements: { element: HTMLElement; originalDisplay: string }[] = [];

    elementsToHide.forEach(selector => {
      const elements = document.querySelectorAll(selector);
      elements.forEach(el => {
        const htmlEl = el as HTMLElement;
        hiddenElements.push({
          element: htmlEl,
          originalDisplay: htmlEl.style.display,
        });
        htmlEl.style.display = 'none';
      });
    });

    // 짧은 대기 시간
    await new Promise(resolve => setTimeout(resolve, 100));

    // html2canvas 실행 - 더 안전한 옵션들
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
      onclone: clonedDoc => {
        // 클론된 문서에도 가벼운 스타일 적용
        const clonedStyle = clonedDoc.createElement('style');
        clonedStyle.innerHTML = pdfCompatibleCSS.replace(/<\/?style[^>]*>/g, '');
        clonedDoc.head.appendChild(clonedStyle);

        // 클론된 문서에서도 불필요한 요소들 숨김
        const clonedElementsToHide = clonedDoc.querySelectorAll('.fixed, .download-btn, nav, .nav');
        clonedElementsToHide.forEach(el => {
          (el as HTMLElement).style.display = 'none';
        });
      },
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

    // 여러 페이지가 필요한 경우
    while (heightLeft >= 0) {
      position = heightLeft - imgHeight;
      pdf.addPage();
      pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight, '', 'FAST');
      heightLeft -= pdfHeight;
    }

    // PDF 다운로드
    pdf.save(filename);

    // 원래 상태 복원
    hiddenElements.forEach(({ element, originalDisplay }) => {
      element.style.display = originalDisplay;
    });

    // 스타일 제거
    if (pdfStyleElement) {
      removeLightweightPdfStyles();
    }

    // 로딩 제거
    if (loadingElement) {
      document.body.removeChild(loadingElement);
    }

    return { success: true, message: 'PDF가 성공적으로 생성되었습니다.' };
  } catch (error) {
    console.error('PDF 생성 중 오류 발생:', error);

    // 에러 발생시에도 정리
    if (pdfStyleElement) {
      removeLightweightPdfStyles();
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
      console.error('PDF Export Error:', error);
    }
  };

  return { exportPDF };
};
