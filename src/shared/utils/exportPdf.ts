// utils/fixedImagePDF.ts - 이미지 깨짐 해결

import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import { injectPDFStyles, removePDFStyles } from '@shared/utils/pdfColorFix.ts';

interface ImageFixOptions {
  filename?: string;
  containerSelector?: string;
  scale?: number;
  showLoading?: boolean;
}

export const generatePDFWithImageFix = async (options: ImageFixOptions = {}) => {
  const {
    filename = '이재학_이력서.pdf',
    containerSelector = '.resume-container',
    scale = 2,
    showLoading = true,
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
          📄 PDF 생성 중... (이미지 처리중)
        </div>
      `;
      document.body.appendChild(loadingElement);
    }

    // PDF 호환 스타일 주입
    pdfStyleElement = injectPDFStyles();

    const element = document.querySelector(containerSelector) as HTMLElement;
    if (!element) {
      throw new Error(`컨테이너 요소 '${containerSelector}'를 찾을 수 없습니다.`);
    }

    // 1. 이미지들을 미리 로드하고 Base64로 변환
    await preloadAndConvertImages();

    // 2. 고정 요소들 임시 숨김
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

    // 잠시 대기 (이미지 로딩 완료 대기)
    await new Promise(resolve => setTimeout(resolve, 500));

    // 3. html2canvas 실행 (이미지 처리 최적화)
    const canvas = await html2canvas(element, {
      scale,
      useCORS: true, // CORS 활성화
      allowTaint: true, // Taint 허용
      backgroundColor: '#ffffff',
      width: element.scrollWidth,
      height: element.scrollHeight,
      scrollX: 0,
      scrollY: 0,
      removeContainer: false,
      imageTimeout: 30000, // 이미지 타임아웃 증가
      logging: false, // 로깅 비활성화
      ignoreElements: element => {
        // 문제가 되는 요소들 무시
        return element.classList.contains('fixed') || element.classList.contains('download-btn');
      },
      onclone: clonedDoc => {
        // 클론된 문서에서 이미지 처리
        const clonedImages = clonedDoc.querySelectorAll('img');
        clonedImages.forEach(img => {
          // 이미지 로딩 보장
          img.style.maxWidth = '100%';
          img.style.height = 'auto';
          img.crossOrigin = 'anonymous';
        });

        // 클론된 문서에도 PDF 스타일 주입
        const clonedStyle = clonedDoc.createElement('style');
        clonedStyle.innerHTML = pdfStyleElement?.innerHTML || '';
        clonedDoc.head.appendChild(clonedStyle);

        // 고정 요소들 숨김
        const clonedFixed = clonedDoc.querySelectorAll('.fixed');
        clonedFixed.forEach(el => {
          (el as HTMLElement).style.display = 'none';
        });
      },
    });

    // 4. PDF 생성
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

    // PDF 스타일 제거
    if (pdfStyleElement) {
      removePDFStyles();
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
      removePDFStyles();
    }

    if (loadingElement) {
      document.body.removeChild(loadingElement);
    }

    throw new Error(`PDF 생성 실패: ${error instanceof Error ? error.message : '알 수 없는 오류'}`);
  }
};

// 이미지들을 미리 로드하고 Base64로 변환하는 함수
async function preloadAndConvertImages(): Promise<void> {
  const images = document.querySelectorAll('img') as NodeListOf<HTMLImageElement>;

  const imagePromises = Array.from(images).map(async img => {
    try {
      // 이미지가 이미 로드되어 있으면 스킵
      if (img.complete && img.naturalHeight !== 0) {
        return;
      }

      // 이미지 로딩 대기
      await new Promise<void>((resolve, reject) => {
        const timeout = setTimeout(() => {
          reject(new Error('Image loading timeout'));
        }, 10000);

        img.onload = () => {
          clearTimeout(timeout);
          resolve();
        };

        img.onerror = () => {
          clearTimeout(timeout);
          reject(new Error('Image loading error'));
        };

        // 이미지 src가 없으면 스킵
        if (!img.src) {
          clearTimeout(timeout);
          resolve();
          return;
        }

        // CORS 설정
        img.crossOrigin = 'anonymous';

        // 이미지 다시 로드
        const originalSrc = img.src;
        img.src = '';
        img.src = originalSrc;
      });

      // Base64로 변환해서 다시 설정 (선택사항)
      // const base64 = await convertImageToBase64(img);
      // img.src = base64;
    } catch (error) {
      console.warn('이미지 로딩 실패:', img.src, error);
      // 이미지 로딩 실패해도 계속 진행
    }
  });

  // 모든 이미지 로딩 완료 대기
  await Promise.allSettled(imagePromises);
}

// 이미지를 Base64로 변환하는 함수 (필요시 사용)
// async function convertImageToBase64(img: HTMLImageElement): Promise<string> {
//   return new Promise((resolve, reject) => {
//     const canvas = document.createElement('canvas');
//     const ctx = canvas.getContext('2d');
//
//     if (!ctx) {
//       reject(new Error('Canvas context not available'));
//       return;
//     }
//
//     canvas.width = img.naturalWidth;
//     canvas.height = img.naturalHeight;
//
//     try {
//       ctx.drawImage(img, 0, 0);
//       const base64 = canvas.toDataURL('image/png');
//       resolve(base64);
//     } catch (error) {
//       reject(error);
//     }
//   });
// }

// React Hook으로 사용
export const useImageFixPDF = () => {
  const exportPDF = async (options?: ImageFixOptions) => {
    try {
      await generatePDFWithImageFix(options);
    } catch (error) {
      alert('PDF 생성 중 오류가 발생했습니다. 다시 시도해주세요.');
      console.error('PDF Export Error:', error);
    }
  };

  return { exportPDF };
};
