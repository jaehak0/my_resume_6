// PDF 변환용 완벽한 스타일 CSS
export const pdfCompatibleCSS = `
<style id="pdf-color-fix">
/* === 🎨 완벽한 Tailwind CSS 색상 팔레트 HEX 변환 === */
/* ===== 고급 효과 비활성화 ===== */
* {
  backdrop-filter: none !important;
  -webkit-backdrop-filter: none !important;
}

/* ===== 프로젝트별 커스텀 클래스 - Resume.css에서 사용되는 것들 ===== */

/* Hero 카드 백그라운드 */
.hero-card, .hero-card * {
  background: rgba(255, 255, 255, 0.1) !important;
  border: 1px solid rgba(255, 255, 255, 0.2) !important;
}

/* Hero 배지 */
.hero-badge, .hero-badge * {
  background: rgba(255, 255, 255, 0.2) !important;
  border: 1px solid rgba(255, 255, 255, 0.1) !important;
}

/* Stat Box */
.stat-box, .stat-box * {
  background: rgba(255, 255, 255, 0.1) !important;
  border: 1px solid rgba(255, 255, 255, 0.1) !important;
}

/* Card Avatar */
.card-avatar, .card-avatar * {
  background: rgba(255, 255, 255, 0.2) !important;
  border: 3px solid rgba(255, 255, 255, 0.3) !important;
}

.card-avatar-icon, .card-avatar-icon * {
  background: rgba(255, 255, 255, 0.2) !important;
  border: 3px solid rgba(255, 255, 255, 0.3) !important;
}

/* 프로젝트 카드 */
.project-card, .project-card * {
  background-color: #f8fafc !important;
  border// utils/pdfColorFix.ts - 완벽한 Tailwind CSS → HEX 변환
}


/* ===== BASIC COLORS ===== */
.bg-white { background-color: #ffffff !important; }
.bg-black { background-color: #000000 !important; }
.bg-transparent { background-color: transparent !important; }
.bg-current { background-color: currentColor !important; }
.bg-inherit { background-color: inherit !important; }

.text-white { color: #ffffff !important; }
.text-black { color: #000000 !important; }
.text-transparent { color: transparent !important; }
.text-current { color: currentColor !important; }
.text-inherit { color: inherit !important; }

.border-white { border-color: #ffffff !important; }
.border-black { border-color: #000000 !important; }
.border-transparent { border-color: transparent !important; }
.border-current { border-color: currentColor !important; }
.border-inherit { border-color: inherit !important; }

/* ===== SLATE 팔레트 (완전) ===== */
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

/* ===== GRAY 팔레트 (완전) ===== */
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

/* ===== ZINC 팔레트 (완전) ===== */
.bg-zinc-50 { background-color: #fafafa !important; }
.bg-zinc-100 { background-color: #f4f4f5 !important; }
.bg-zinc-200 { background-color: #e4e4e7 !important; }
.bg-zinc-300 { background-color: #d4d4d8 !important; }
.bg-zinc-400 { background-color: #a1a1aa !important; }
.bg-zinc-500 { background-color: #71717a !important; }
.bg-zinc-600 { background-color: #52525b !important; }
.bg-zinc-700 { background-color: #3f3f46 !important; }
.bg-zinc-800 { background-color: #27272a !important; }
.bg-zinc-900 { background-color: #18181b !important; }
.bg-zinc-950 { background-color: #09090b !important; }

.text-zinc-50 { color: #fafafa !important; }
.text-zinc-100 { color: #f4f4f5 !important; }
.text-zinc-200 { color: #e4e4e7 !important; }
.text-zinc-300 { color: #d4d4d8 !important; }
.text-zinc-400 { color: #a1a1aa !important; }
.text-zinc-500 { color: #71717a !important; }
.text-zinc-600 { color: #52525b !important; }
.text-zinc-700 { color: #3f3f46 !important; }
.text-zinc-800 { color: #27272a !important; }
.text-zinc-900 { color: #18181b !important; }
.text-zinc-950 { color: #09090b !important; }

.border-zinc-50 { border-color: #fafafa !important; }
.border-zinc-100 { border-color: #f4f4f5 !important; }
.border-zinc-200 { border-color: #e4e4e7 !important; }
.border-zinc-300 { border-color: #d4d4d8 !important; }
.border-zinc-400 { border-color: #a1a1aa !important; }
.border-zinc-500 { border-color: #71717a !important; }
.border-zinc-600 { border-color: #52525b !important; }
.border-zinc-700 { border-color: #3f3f46 !important; }
.border-zinc-800 { border-color: #27272a !important; }
.border-zinc-900 { border-color: #18181b !important; }
.border-zinc-950 { border-color: #09090b !important; }

/* ===== NEUTRAL 팔레트 (완전) ===== */
.bg-neutral-50 { background-color: #fafafa !important; }
.bg-neutral-100 { background-color: #f5f5f5 !important; }
.bg-neutral-200 { background-color: #e5e5e5 !important; }
.bg-neutral-300 { background-color: #d4d4d4 !important; }
.bg-neutral-400 { background-color: #a3a3a3 !important; }
.bg-neutral-500 { background-color: #737373 !important; }
.bg-neutral-600 { background-color: #525252 !important; }
.bg-neutral-700 { background-color: #404040 !important; }
.bg-neutral-800 { background-color: #262626 !important; }
.bg-neutral-900 { background-color: #171717 !important; }
.bg-neutral-950 { background-color: #0a0a0a !important; }

.text-neutral-50 { color: #fafafa !important; }
.text-neutral-100 { color: #f5f5f5 !important; }
.text-neutral-200 { color: #e5e5e5 !important; }
.text-neutral-300 { color: #d4d4d4 !important; }
.text-neutral-400 { color: #a3a3a3 !important; }
.text-neutral-500 { color: #737373 !important; }
.text-neutral-600 { color: #525252 !important; }
.text-neutral-700 { color: #404040 !important; }
.text-neutral-800 { color: #262626 !important; }
.text-neutral-900 { color: #171717 !important; }
.text-neutral-950 { color: #0a0a0a !important; }

.border-neutral-50 { border-color: #fafafa !important; }
.border-neutral-100 { border-color: #f5f5f5 !important; }
.border-neutral-200 { border-color: #e5e5e5 !important; }
.border-neutral-300 { border-color: #d4d4d4 !important; }
.border-neutral-400 { border-color: #a3a3a3 !important; }
.border-neutral-500 { border-color: #737373 !important; }
.border-neutral-600 { border-color: #525252 !important; }
.border-neutral-700 { border-color: #404040 !important; }
.border-neutral-800 { border-color: #262626 !important; }
.border-neutral-900 { border-color: #171717 !important; }
.border-neutral-950 { border-color: #0a0a0a !important; }

/* ===== STONE 팔레트 (완전) ===== */
.bg-stone-50 { background-color: #fafaf9 !important; }
.bg-stone-100 { background-color: #f5f5f4 !important; }
.bg-stone-200 { background-color: #e7e5e4 !important; }
.bg-stone-300 { background-color: #d6d3d1 !important; }
.bg-stone-400 { background-color: #a8a29e !important; }
.bg-stone-500 { background-color: #78716c !important; }
.bg-stone-600 { background-color: #57534e !important; }
.bg-stone-700 { background-color: #44403c !important; }
.bg-stone-800 { background-color: #292524 !important; }
.bg-stone-900 { background-color: #1c1917 !important; }
.bg-stone-950 { background-color: #0c0a09 !important; }

.text-stone-50 { color: #fafaf9 !important; }
.text-stone-100 { color: #f5f5f4 !important; }
.text-stone-200 { color: #e7e5e4 !important; }
.text-stone-300 { color: #d6d3d1 !important; }
.text-stone-400 { color: #a8a29e !important; }
.text-stone-500 { color: #78716c !important; }
.text-stone-600 { color: #57534e !important; }
.text-stone-700 { color: #44403c !important; }
.text-stone-800 { color: #292524 !important; }
.text-stone-900 { color: #1c1917 !important; }
.text-stone-950 { color: #0c0a09 !important; }

.border-stone-50 { border-color: #fafaf9 !important; }
.border-stone-100 { border-color: #f5f5f4 !important; }
.border-stone-200 { border-color: #e7e5e4 !important; }
.border-stone-300 { border-color: #d6d3d1 !important; }
.border-stone-400 { border-color: #a8a29e !important; }
.border-stone-500 { border-color: #78716c !important; }
.border-stone-600 { border-color: #57534e !important; }
.border-stone-700 { border-color: #44403c !important; }
.border-stone-800 { border-color: #292524 !important; }
.border-stone-900 { border-color: #1c1917 !important; }
.border-stone-950 { border-color: #0c0a09 !important; }

/* ===== RED 팔레트 (완전) ===== */
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
.bg-red-950 { background-color: #450a0a !important; }

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
.text-red-950 { color: #450a0a !important; }

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
.border-red-950 { border-color: #450a0a !important; }

/* ===== ORANGE 팔레트 (완전) ===== */
.bg-orange-50 { background-color: #fff7ed !important; }
.bg-orange-100 { background-color: #ffedd5 !important; }
.bg-orange-200 { background-color: #fed7aa !important; }
.bg-orange-300 { background-color: #fdba74 !important; }
.bg-orange-400 { background-color: #fb923c !important; }
.bg-orange-500 { background-color: #f97316 !important; }
.bg-orange-600 { background-color: #ea580c !important; }
.bg-orange-700 { background-color: #c2410c !important; }
.bg-orange-800 { background-color: #9a3412 !important; }
.bg-orange-900 { background-color: #7c2d12 !important; }
.bg-orange-950 { background-color: #431407 !important; }

.text-orange-50 { color: #fff7ed !important; }
.text-orange-100 { color: #ffedd5 !important; }
.text-orange-200 { color: #fed7aa !important; }
.text-orange-300 { color: #fdba74 !important; }
.text-orange-400 { color: #fb923c !important; }
.text-orange-500 { color: #f97316 !important; }
.text-orange-600 { color: #ea580c !important; }
.text-orange-700 { color: #c2410c !important; }
.text-orange-800 { color: #9a3412 !important; }
.text-orange-900 { color: #7c2d12 !important; }
.text-orange-950 { color: #431407 !important; }

.border-orange-50 { border-color: #fff7ed !important; }
.border-orange-100 { border-color: #ffedd5 !important; }
.border-orange-200 { border-color: #fed7aa !important; }
.border-orange-300 { border-color: #fdba74 !important; }
.border-orange-400 { border-color: #fb923c !important; }
.border-orange-500 { border-color: #f97316 !important; }
.border-orange-600 { border-color: #ea580c !important; }
.border-orange-700 { border-color: #c2410c !important; }
.border-orange-800 { border-color: #9a3412 !important; }
.border-orange-900 { border-color: #7c2d12 !important; }
.border-orange-950 { border-color: #431407 !important; }

/* ===== AMBER 팔레트 (완전) ===== */
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
.bg-amber-950 { background-color: #451a03 !important; }

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
.text-amber-950 { color: #451a03 !important; }

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
.border-amber-950 { border-color: #451a03 !important; }

/* ===== YELLOW 팔레트 (완전) ===== */
.bg-yellow-50 { background-color: #fefce8 !important; }
.bg-yellow-100 { background-color: #fef3c7 !important; }
.bg-yellow-200 { background-color: #fef08a !important; }
.bg-yellow-300 { background-color: #fde047 !important; }
.bg-yellow-400 { background-color: #facc15 !important; }
.bg-yellow-500 { background-color: #eab308 !important; }
.bg-yellow-600 { background-color: #ca8a04 !important; }
.bg-yellow-700 { background-color: #a16207 !important; }
.bg-yellow-800 { background-color: #854d0e !important; }
.bg-yellow-900 { background-color: #713f12 !important; }
.bg-yellow-950 { background-color: #422006 !important; }

.text-yellow-50 { color: #fefce8 !important; }
.text-yellow-100 { color: #fef3c7 !important; }
.text-yellow-200 { color: #fef08a !important; }
.text-yellow-300 { color: #fde047 !important; }
.text-yellow-400 { color: #facc15 !important; }
.text-yellow-500 { color: #eab308 !important; }
.text-yellow-600 { color: #ca8a04 !important; }
.text-yellow-700 { color: #a16207 !important; }
.text-yellow-800 { color: #854d0e !important; }
.text-yellow-900 { color: #713f12 !important; }
.text-yellow-950 { color: #422006 !important; }

.border-yellow-50 { border-color: #fefce8 !important; }
.border-yellow-100 { border-color: #fef3c7 !important; }
.border-yellow-200 { border-color: #fef08a !important; }
.border-yellow-300 { border-color: #fde047 !important; }
.border-yellow-400 { border-color: #facc15 !important; }
.border-yellow-500 { border-color: #eab308 !important; }
.border-yellow-600 { border-color: #ca8a04 !important; }
.border-yellow-700 { border-color: #a16207 !important; }
.border-yellow-800 { border-color: #854d0e !important; }
.border-yellow-900 { border-color: #713f12 !important; }
.border-yellow-950 { border-color: #422006 !important; }

/* ===== LIME 팔레트 (완전) ===== */
.bg-lime-50 { background-color: #f7fee7 !important; }
.bg-lime-100 { background-color: #ecfccb !important; }
.bg-lime-200 { background-color: #d9f99d !important; }
.bg-lime-300 { background-color: #bef264 !important; }
.bg-lime-400 { background-color: #a3e635 !important; }
.bg-lime-500 { background-color: #84cc16 !important; }
.bg-lime-600 { background-color: #65a30d !important; }
.bg-lime-700 { background-color: #4d7c0f !important; }
.bg-lime-800 { background-color: #365314 !important; }
.bg-lime-900 { background-color: #1a2e05 !important; }
.bg-lime-950 { background-color: #0a0a02 !important; }

.text-lime-50 { color: #f7fee7 !important; }
.text-lime-100 { color: #ecfccb !important; }
.text-lime-200 { color: #d9f99d !important; }
.text-lime-300 { color: #bef264 !important; }
.text-lime-400 { color: #a3e635 !important; }
.text-lime-500 { color: #84cc16 !important; }
.text-lime-600 { color: #65a30d !important; }
.text-lime-700 { color: #4d7c0f !important; }
.text-lime-800 { color: #365314 !important; }
.text-lime-900 { color: #1a2e05 !important; }
.text-lime-950 { color: #0a0a02 !important; }

.border-lime-50 { border-color: #f7fee7 !important; }
.border-lime-100 { border-color: #ecfccb !important; }
.border-lime-200 { border-color: #d9f99d !important; }
.border-lime-300 { border-color: #bef264 !important; }
.border-lime-400 { border-color: #a3e635 !important; }
.border-lime-500 { border-color: #84cc16 !important; }
.border-lime-600 { border-color: #65a30d !important; }
.border-lime-700 { border-color: #4d7c0f !important; }
.border-lime-800 { border-color: #365314 !important; }
.border-lime-900 { border-color: #1a2e05 !important; }
.border-lime-950 { border-color: #0a0a02 !important; }

/* ===== GREEN 팔레트 (완전) ===== */
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
.bg-green-950 { background-color: #052e16 !important; }

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
.text-green-950 { color: #052e16 !important; }

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
.border-green-950 { border-color: #052e16 !important; }

/* ===== EMERALD 팔레트 (완전) ===== */
.bg-emerald-50 { background-color: #ecfdf5 !important; }
.bg-emerald-100 { background-color: #d1fae5 !important; }
.bg-emerald-200 { background-color: #a7f3d0 !important; }
.bg-emerald-300 { background-color: #6ee7b7 !important; }
.bg-emerald-400 { background-color: #34d399 !important; }
.bg-emerald-500 { background-color: #10b981 !important; }
.bg-emerald-600 { background-color: #059669 !important; }
.bg-emerald-700 { background-color: #047857 !important; }
.bg-emerald-800 { background-color: #065f46 !important; }
.bg-emerald-900 { background-color: #064e3b !important; }
.bg-emerald-950 { background-color: #022c22 !important; }

.text-emerald-50 { color: #ecfdf5 !important; }
.text-emerald-100 { color: #d1fae5 !important; }
.text-emerald-200 { color: #a7f3d0 !important; }
.text-emerald-300 { color: #6ee7b7 !important; }
.text-emerald-400 { color: #34d399 !important; }
.text-emerald-500 { color: #10b981 !important; }
.text-emerald-600 { color: #059669 !important; }
.text-emerald-700 { color: #047857 !important; }
.text-emerald-800 { color: #065f46 !important; }
.text-emerald-900 { color: #064e3b !important; }
.text-emerald-950 { color: #022c22 !important; }

.border-emerald-50 { border-color: #ecfdf5 !important; }
.border-emerald-100 { border-color: #d1fae5 !important; }
.border-emerald-200 { border-color: #a7f3d0 !important; }
.border-emerald-300 { border-color: #6ee7b7 !important; }
.border-emerald-400 { border-color: #34d399 !important; }
.border-emerald-500 { border-color: #10b981 !important; }
.border-emerald-600 { border-color: #059669 !important; }
.border-emerald-700 { border-color: #047857 !important; }
.border-emerald-800 { border-color: #065f46 !important; }
.border-emerald-900 { border-color: #064e3b !important; }
.border-emerald-950 { border-color: #022c22 !important; }

/* ===== TEAL 팔레트 (완전) ===== */
.bg-teal-50 { background-color: #f0fdfa !important; }
.bg-teal-100 { background-color: #ccfbf1 !important; }
.bg-teal-200 { background-color: #99f6e4 !important; }
.bg-teal-300 { background-color: #5eead4 !important; }
.bg-teal-400 { background-color: #2dd4bf !important; }
.bg-teal-500 { background-color: #14b8a6 !important; }
.bg-teal-600 { background-color: #0d9488 !important; }
.bg-teal-700 { background-color: #0f766e !important; }
.bg-teal-800 { background-color: #115e59 !important; }
.bg-teal-900 { background-color: #134e4a !important; }
.bg-teal-950 { background-color: #042f2e !important; }

.text-teal-50 { color: #f0fdfa !important; }
.text-teal-100 { color: #ccfbf1 !important; }
.text-teal-200 { color: #99f6e4 !important; }
.text-teal-300 { color: #5eead4 !important; }
.text-teal-400 { color: #2dd4bf !important; }
.text-teal-500 { color: #14b8a6 !important; }
.text-teal-600 { color: #0d9488 !important; }
.text-teal-700 { color: #0f766e !important; }
.text-teal-800 { color: #115e59 !important; }
.text-teal-900 { color: #134e4a !important; }
.text-teal-950 { color: #042f2e !important; }

.border-teal-50 { border-color: #f0fdfa !important; }
.border-teal-100 { border-color: #ccfbf1 !important; }
.border-teal-200 { border-color: #99f6e4 !important; }
.border-teal-300 { border-color: #5eead4 !important; }
.border-teal-400 { border-color: #2dd4bf !important; }
.border-teal-500 { border-color: #14b8a6 !important; }
.border-teal-600 { border-color: #0d9488 !important; }
.border-teal-700 { border-color: #0f766e !important; }
.border-teal-800 { border-color: #115e59 !important; }
.border-teal-900 { border-color: #134e4a !important; }
.border-teal-950 { border-color: #042f2e !important; }

/* ===== CYAN 팔레트 (완전) ===== */
.bg-cyan-50 { background-color: #ecfeff !important; }
.bg-cyan-100 { background-color: #cffafe !important; }
.bg-cyan-200 { background-color: #a5f3fc !important; }
.bg-cyan-300 { background-color: #67e8f9 !important; }
.bg-cyan-400 { background-color: #22d3ee !important; }
.bg-cyan-500 { background-color: #06b6d4 !important; }
.bg-cyan-600 { background-color: #0891b2 !important; }
.bg-cyan-700 { background-color: #0e7490 !important; }
.bg-cyan-800 { background-color: #155e75 !important; }
.bg-cyan-900 { background-color: #164e63 !important; }
.bg-cyan-950 { background-color: #083344 !important; }

.text-cyan-50 { color: #ecfeff !important; }
.text-cyan-100 { color: #cffafe !important; }
.text-cyan-200 { color: #a5f3fc !important; }
.text-cyan-300 { color: #67e8f9 !important; }
.text-cyan-400 { color: #22d3ee !important; }
.text-cyan-500 { color: #06b6d4 !important; }
.text-cyan-600 { color: #0891b2 !important; }
.text-cyan-700 { color: #0e7490 !important; }
.text-cyan-800 { color: #155e75 !important; }
.text-cyan-900 { color: #164e63 !important; }
.text-cyan-950 { color: #083344 !important; }

.border-cyan-50 { border-color: #ecfeff !important; }
.border-cyan-100 { border-color: #cffafe !important; }
.border-cyan-200 { border-color: #a5f3fc !important; }
.border-cyan-300 { border-color: #67e8f9 !important; }
.border-cyan-400 { border-color: #22d3ee !important; }
.border-cyan-500 { border-color: #06b6d4 !important; }
.border-cyan-600 { border-color: #0891b2 !important; }
.border-cyan-700 { border-color: #0e7490 !important; }
.border-cyan-800 { border-color: #155e75 !important; }
.border-cyan-900 { border-color: #164e63 !important; }
.border-cyan-950 { border-color: #083344 !important; }

/* ===== SKY 팔레트 (완전) ===== */
.bg-sky-50 { background-color: #f0f9ff !important; }
.bg-sky-100 { background-color: #e0f2fe !important; }
.bg-sky-200 { background-color: #bae6fd !important; }
.bg-sky-300 { background-color: #7dd3fc !important; }
.bg-sky-400 { background-color: #38bdf8 !important; }
.bg-sky-500 { background-color: #0ea5e9 !important; }
.bg-sky-600 { background-color: #0284c7 !important; }
.bg-sky-700 { background-color: #0369a1 !important; }
.bg-sky-800 { background-color: #075985 !important; }
.bg-sky-900 { background-color: #0c4a6e !important; }
.bg-sky-950 { background-color: #082f49 !important; }

.text-sky-50 { color: #f0f9ff !important; }
.text-sky-100 { color: #e0f2fe !important; }
.text-sky-200 { color: #bae6fd !important; }
.text-sky-300 { color: #7dd3fc !important; }
.text-sky-400 { color: #38bdf8 !important; }
.text-sky-500 { color: #0ea5e9 !important; }
.text-sky-600 { color: #0284c7 !important; }
.text-sky-700 { color: #0369a1 !important; }
.text-sky-800 { color: #075985 !important; }
.text-sky-900 { color: #0c4a6e !important; }
.text-sky-950 { color: #082f49 !important; }

.border-sky-50 { border-color: #f0f9ff !important; }
.border-sky-100 { border-color: #e0f2fe !important; }
.border-sky-200 { border-color: #bae6fd !important; }
.border-sky-300 { border-color: #7dd3fc !important; }
.border-sky-400 { border-color: #38bdf8 !important; }
.border-sky-500 { border-color: #0ea5e9 !important; }
.border-sky-600 { border-color: #0284c7 !important; }
.border-sky-700 { border-color: #0369a1 !important; }
.border-sky-800 { border-color: #075985 !important; }
.border-sky-900 { border-color: #0c4a6e !important; }
.border-sky-950 { border-color: #082f49 !important; }

/* ===== BLUE 팔레트 (완전) ===== */
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
.bg-blue-950 { background-color: #172554 !important; }

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
.text-blue-950 { color: #172554 !important; }

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
.border-blue-950 { border-color: #172554 !important; }

/* ===== INDIGO 팔레트 (완전) ===== */
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

/* ===== VIOLET 팔레트 (완전) ===== */
.bg-violet-50 { background-color: #f5f3ff !important; }
.bg-violet-100 { background-color: #ede9fe !important; }
.bg-violet-200 { background-color: #ddd6fe !important; }
.bg-violet-300 { background-color: #c4b5fd !important; }
.bg-violet-400 { background-color: #a78bfa !important; }
.bg-violet-500 { background-color: #8b5cf6 !important; }
.bg-violet-600 { background-color: #7c3aed !important; }
.bg-violet-700 { background-color: #6d28d9 !important; }
.bg-violet-800 { background-color: #5b21b6 !important; }
.bg-violet-900 { background-color: #4c1d95 !important; }
.bg-violet-950 { background-color: #2e1065 !important; }

.text-violet-50 { color: #f5f3ff !important; }
.text-violet-100 { color: #ede9fe !important; }
.text-violet-200 { color: #ddd6fe !important; }
.text-violet-300 { color: #c4b5fd !important; }
.text-violet-400 { color: #a78bfa !important; }
.text-violet-500 { color: #8b5cf6 !important; }
.text-violet-600 { color: #7c3aed !important; }
.text-violet-700 { color: #6d28d9 !important; }
.text-violet-800 { color: #5b21b6 !important; }
.text-violet-900 { color: #4c1d95 !important; }
.text-violet-950 { color: #2e1065 !important; }

.border-violet-50 { border-color: #f5f3ff !important; }
.border-violet-100 { border-color: #ede9fe !important; }
.border-violet-200 { border-color: #ddd6fe !important; }
.border-violet-300 { border-color: #c4b5fd !important; }
.border-violet-400 { border-color: #a78bfa !important; }
.border-violet-500 { border-color: #8b5cf6 !important; }
.border-violet-600 { border-color: #7c3aed !important; }
.border-violet-700 { border-color: #6d28d9 !important; }
.border-violet-800 { border-color: #5b21b6 !important; }
.border-violet-900 { border-color: #4c1d95 !important; }
.border-violet-950 { border-color: #2e1065 !important; }

/* ===== PURPLE 팔레트 (완전) ===== */
.bg-purple-50 { background-color: #faf5ff !important; }
.bg-purple-100 { background-color: #f3e8ff !important; }
.bg-purple-200 { background-color: #e9d5ff !important; }
.bg-purple-300 { background-color: #d8b4fe !important; }
.bg-purple-400 { background-color: #c084fc !important; }
.bg-purple-500 { background-color: #a855f7 !important; }
.bg-purple-600 { background-color: #9333ea !important; }
.bg-purple-700 { background-color: #7c3aed !important; }
.bg-purple-800 { background-color: #6b21a8 !important; }
.bg-purple-900 { background-color: #581c87 !important; }
.bg-purple-950 { background-color: #3b0764 !important; }

.text-purple-50 { color: #faf5ff !important; }
.text-purple-100 { color: #f3e8ff !important; }
.text-purple-200 { color: #e9d5ff !important; }
.text-purple-300 { color: #d8b4fe !important; }
.text-purple-400 { color: #c084fc !important; }
.text-purple-500 { color: #a855f7 !important; }
.text-purple-600 { color: #9333ea !important; }
.text-purple-700 { color: #7c3aed !important; }
.text-purple-800 { color: #6b21a8 !important; }
.text-purple-900 { color: #581c87 !important; }
.text-purple-950 { color: #3b0764 !important; }

.border-purple-50 { border-color: #faf5ff !important; }
.border-purple-100 { border-color: #f3e8ff !important; }
.border-purple-200 { border-color: #e9d5ff !important; }
.border-purple-300 { border-color: #d8b4fe !important; }
.border-purple-400 { border-color: #c084fc !important; }
.border-purple-500 { border-color: #a855f7 !important; }
.border-purple-600 { border-color: #9333ea !important; }
.border-purple-700 { border-color: #7c3aed !important; }
.border-purple-800 { border-color: #6b21a8 !important; }
.border-purple-900 { border-color: #581c87 !important; }
.border-purple-950 { border-color: #3b0764 !important; }

/* ===== FUCHSIA 팔레트 (완전) ===== */
.bg-fuchsia-50 { background-color: #fdf4ff !important; }
.bg-fuchsia-100 { background-color: #fae8ff !important; }
.bg-fuchsia-200 { background-color: #f5d0fe !important; }
.bg-fuchsia-300 { background-color: #f0abfc !important; }
.bg-fuchsia-400 { background-color: #e879f9 !important; }
.bg-fuchsia-500 { background-color: #d946ef !important; }
.bg-fuchsia-600 { background-color: #c026d3 !important; }
.bg-fuchsia-700 { background-color: #a21caf !important; }
.bg-fuchsia-800 { background-color: #86198f !important; }
.bg-fuchsia-900 { background-color: #701a75 !important; }
.bg-fuchsia-950 { background-color: #4a044e !important; }

.text-fuchsia-50 { color: #fdf4ff !important; }
.text-fuchsia-100 { color: #fae8ff !important; }
.text-fuchsia-200 { color: #f5d0fe !important; }
.text-fuchsia-300 { color: #f0abfc !important; }
.text-fuchsia-400 { color: #e879f9 !important; }
.text-fuchsia-500 { color: #d946ef !important; }
.text-fuchsia-600 { color: #c026d3 !important; }
.text-fuchsia-700 { color: #a21caf !important; }
.text-fuchsia-800 { color: #86198f !important; }
.text-fuchsia-900 { color: #701a75 !important; }
.text-fuchsia-950 { color: #4a044e !important; }

.border-fuchsia-50 { border-color: #fdf4ff !important; }
.border-fuchsia-100 { border-color: #fae8ff !important; }
.border-fuchsia-200 { border-color: #f5d0fe !important; }
.border-fuchsia-300 { border-color: #f0abfc !important; }
.border-fuchsia-400 { border-color: #e879f9 !important; }
.border-fuchsia-500 { border-color: #d946ef !important; }
.border-fuchsia-600 { border-color: #c026d3 !important; }
.border-fuchsia-700 { border-color: #a21caf !important; }
.border-fuchsia-800 { border-color: #86198f !important; }
.border-fuchsia-900 { border-color: #701a75 !important; }
.border-fuchsia-950 { border-color: #4a044e !important; }

/* ===== PINK 팔레트 (완전) ===== */
.bg-pink-50 { background-color: #fdf2f8 !important; }
.bg-pink-100 { background-color: #fce7f3 !important; }
.bg-pink-200 { background-color: #fbcfe8 !important; }
.bg-pink-300 { background-color: #f9a8d4 !important; }
.bg-pink-400 { background-color: #f472b6 !important; }
.bg-pink-500 { background-color: #ec4899 !important; }
.bg-pink-600 { background-color: #db2777 !important; }
.bg-pink-700 { background-color: #be185d !important; }
.bg-pink-800 { background-color: #9d174d !important; }
.bg-pink-900 { background-color: #831843 !important; }
.bg-pink-950 { background-color: #500724 !important; }

.text-pink-50 { color: #fdf2f8 !important; }
.text-pink-100 { color: #fce7f3 !important; }
.text-pink-200 { color: #fbcfe8 !important; }
.text-pink-300 { color: #f9a8d4 !important; }
.text-pink-400 { color: #f472b6 !important; }
.text-pink-500 { color: #ec4899 !important; }
.text-pink-600 { color: #db2777 !important; }
.text-pink-700 { color: #be185d !important; }
.text-pink-800 { color: #9d174d !important; }
.text-pink-900 { color: #831843 !important; }
.text-pink-950 { color: #500724 !important; }

.border-pink-50 { border-color: #fdf2f8 !important; }
.border-pink-100 { border-color: #fce7f3 !important; }
.border-pink-200 { border-color: #fbcfe8 !important; }
.border-pink-300 { border-color: #f9a8d4 !important; }
.border-pink-400 { border-color: #f472b6 !important; }
.border-pink-500 { border-color: #ec4899 !important; }
.border-pink-600 { border-color: #db2777 !important; }
.border-pink-700 { border-color: #be185d !important; }
.border-pink-800 { border-color: #9d174d !important; }
.border-pink-900 { border-color: #831843 !important; }

/* 기본 유틸리티 - 더 완전하게 */
.bg-transparent { background-color: transparent !important; }
.bg-current { background-color: currentColor !important; }
.bg-inherit { background-color: inherit !important; }

.text-transparent { color: transparent !important; }
.text-current { color: currentColor !important; }
.text-inherit { color: inherit !important; }

.border-transparent { border-color: transparent !important; }
.border-current { border-color: currentColor !important; }
.border-inherit { border-color: inherit !important; }

/* === 그라데이션 관련 (CSS 변수 사용하는 것들) === */
.from-white { --tw-gradient-from: #ffffff !important; --tw-gradient-to: rgba(255, 255, 255, 0) !important; --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to) !important; }
.from-indigo-600 { --tw-gradient-from: #4f46e5 !important; --tw-gradient-to: rgba(79, 70, 229, 0) !important; --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to) !important; }
.to-indigo-700 { --tw-gradient-to: #4338ca !important; }
.to-indigo-800 { --tw-gradient-to: #3730a3 !important; }

.bg-gradient-to-r { background-image: linear-gradient(to right, var(--tw-gradient-stops)) !important; }
.bg-gradient-to-br { background-image: linear-gradient(to bottom right, var(--tw-gradient-stops)) !important; }
.bg-gradient-to-b { background-image: linear-gradient(to bottom, var(--tw-gradient-stops)) !important; }

/* === 그림자 스타일 === */
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
.shadow-inner {
  box-shadow: inset 0 2px 4px 0 rgba(0, 0, 0, 0.05) !important;
}
.shadow-none {
  box-shadow: 0 0 #0000 !important;
}

/* === Ring 스타일 === */
.ring-0 {
  box-shadow: 0 0 0 0px transparent !important;
}
.ring-1 {
  box-shadow: 0 0 0 1px rgba(59, 130, 246, 0.5) !important;
}
.ring-2 {
  box-shadow: 0 0 0 2px rgba(59, 130, 246, 0.5) !important;
}
.ring {
  box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.5) !important;
}
.ring-4 {
  box-shadow: 0 0 0 4px rgba(59, 130, 246, 0.5) !important;
}
.ring-8 {
  box-shadow: 0 0 0 8px rgba(59, 130, 246, 0.5) !important;
}

.ring-white {
  box-shadow: 0 0 0 3px #ffffff !important;
}
.ring-white\/20 {
  box-shadow: 0 0 0 3px rgba(255, 255, 255, 0.2) !important;
}
.ring-white\/30 {
  box-shadow: 0 0 0 3px rgba(255, 255, 255, 0.3) !important;
}
.ring-white\/40 {
  box-shadow: 0 0 0 3px rgba(255, 255, 255, 0.4) !important;
}
.ring-white\/50 {
  box-shadow: 0 0 0 3px rgba(255, 255, 255, 0.5) !important;
}

.ring-indigo-500 {
  box-shadow: 0 0 0 3px #6366f1 !important;
}
.ring-indigo-600 {
  box-shadow: 0 0 0 3px #4f46e5 !important;
}

/* === 고급 효과 비활성화 === */
* {
  backdrop-filter: none !important;
  -webkit-backdrop-filter: none !important;
}

/* === 프로젝트별 커스텀 클래스 - Resume.css에서 사용되는 것들 === */
.hero {
  background: linear-gradient(to right, #667eea 0%, #764ba2 100%) !important;
  background-image: linear-gradient(to right, #667eea 0%, #764ba2 100%) !important;
}

.hero-card {
  background: rgba(255, 255, 255, 0.1) !important;
  border: 1px solid rgba(255, 255, 255, 0.2) !important;
}

.stat-box {
  background: rgba(255, 255, 255, 0.1) !important;
  border: 1px solid rgba(255, 255, 255, 0.1) !important;
}

.project-card {
  background-color: #f8fafc !important;
  border-color: #e2e8f0 !important;
}

.metric-card {
  background-color: #ffffff !important;
  border-color: #e2e8f0 !important;
}

.project-details {
  background-color: #f8fafc !important;
}

.sidebar-section {
  background-color: #ffffff !important;
  border-color: #e2e8f0 !important;
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
}

.btn-outline {
  background-color: transparent !important;
  color: #ffffff !important;
  border: 2px solid rgba(255, 255, 255, 0.3) !important;
}

.download-btn {
  background-color: #4f46e5 !important;
  color: #ffffff !important;
}

/* === CSS 변수 오버라이드 - Tailwind 내부에서 사용하는 것들 === */
:root {
  --tw-bg-opacity: 1 !important;
  --tw-text-opacity: 1 !important;
  --tw-border-opacity: 1 !important;
  --tw-ring-offset-width: 0px !important;
  --tw-ring-offset-color: #fff !important;
  --tw-ring-color: rgba(59, 130, 246, 0.5) !important;
  --tw-ring-offset-shadow: 0 0 #0000 !important;
  --tw-ring-shadow: 0 0 #0000 !important;
  --tw-shadow: 0 0 #0000 !important;
  --tw-shadow-colored: 0 0 #0000 !important;
}

/* === 추가 안전장치 - 모든 요소에 대한 기본 색상 강제 === */
*, *::before, *::after {
  /* 모든 CSS 변수를 기본값으로 재설정 */
  --tw-gradient-from: transparent !important;
  --tw-gradient-to: transparent !important;
  --tw-gradient-stops: transparent !important;
}

/* === 강제로 모든 oklch 관련 속성 제거 === */
* {
  background: inherit !important;
  color: inherit !important;
  border-color: inherit !important;
}

/* 기본 색상 강제 적용 */
body {
  background-color: #ffffff !important;
  color: #1e293b !important;
}

      
    /* oklch나 최신 색상 함수 강제 오버라이드 */
     [style*="oklch"],
     [style*="lab("],
     [style*="lch("],
     [style*="color(display-p3"] {
      background: #ffffff !important;
      background-image: none !important;
      color: #000000 !important;
      border-color: #e5e7eb !important;
    }

</style>
`;

// PDF 변환시 임시 스타일 주입
export const injectPDFStyles = (): HTMLStyleElement => {
  const styleElement = document.createElement('style');
  styleElement.id = 'pdf-color-fix';
  styleElement.innerHTML = pdfCompatibleCSS.replace(/<\/?style[^>]*>/g, '');
  document.head.appendChild(styleElement);
  return styleElement;
};

// PDF 변환 완료 후 임시 스타일 제거
export const removePDFStyles = (): void => {
  const existingStyle = document.getElementById('pdf-color-fix');
  if (existingStyle) {
    existingStyle.remove();
  }
};
