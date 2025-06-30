/**
 * 개발 환경에서만 콘솔 로그를 출력하는 유틸리티 함수들
 */

/**
 * 개발 환경에서만 console.log를 실행하는 함수
 * @param args - 콘솔에 출력할 인자들
 */
export const devLog = (...args: any[]): void => {
  // vite.config.ts에 정의된 __DEV__ 변수를 사용
  if (typeof __DEV__ !== 'undefined' && __DEV__) {
    console.log(...args);
  }
};

/**
 * 개발 환경에서만 console.warn을 실행하는 함수
 * @param args - 콘솔에 출력할 인자들
 */
export const devWarn = (...args: any[]): void => {
  if (typeof __DEV__ !== 'undefined' && __DEV__) {
    console.warn(...args);
  }
};

/**
 * 개발 환경에서만 console.error를 실행하는 함수
 * @param args - 콘솔에 출력할 인자들
 */
export const devError = (...args: any[]): void => {
  if (typeof __DEV__ !== 'undefined' && __DEV__) {
    console.error(...args);
  }
};

/**
 * 개발 환경에서만 console.info를 실행하는 함수
 * @param args - 콘솔에 출력할 인자들
 */
export const devInfo = (...args: any[]): void => {
  if (typeof __DEV__ !== 'undefined' && __DEV__) {
    console.info(...args);
  }
};

/**
 * 개발 환경에서만 console.debug를 실행하는 함수
 * @param args - 콘솔에 출력할 인자들
 */
export const devDebug = (...args: any[]): void => {
  if (typeof __DEV__ !== 'undefined' && __DEV__) {
    console.debug(...args);
  }
};

/**
 * 개발 환경에서만 console.trace를 실행하는 함수
 * @param args - 콘솔에 출력할 인자들
 */
export const devTrace = (...args: any[]): void => {
  if (typeof __DEV__ !== 'undefined' && __DEV__) {
    console.trace(...args);
  }
};

/**
 * 개발 환경에서만 console.time을 실행하는 함수
 * @param label - 타이머 라벨
 */
export const devTime = (label: string): void => {
  if (typeof __DEV__ !== 'undefined' && __DEV__) {
    console.time(label);
  }
};

/**
 * 개발 환경에서만 console.timeEnd를 실행하는 함수
 * @param label - 타이머 라벨
 */
export const devTimeEnd = (label: string): void => {
  if (typeof __DEV__ !== 'undefined' && __DEV__) {
    console.timeEnd(label);
  }
};
