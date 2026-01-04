import React from 'react';
import type { SkillCategory } from '@/types/skill';
import type { ContactInfo } from '@/types/contact';
import { SKILL_CATEGORIES } from '@/constants/skills';
import { CONTACT_INFO } from '@/constants/contactInfo';

const skillMapping = (skills: string[]): React.ReactNode[] => {
  return skills.map((skill: string, index: number) => {
    return (
      <span key={index} className='skill-tag'>
        {skill}
      </span>
    );
  });
};

const Sidebar: React.FC = () => {

  return (
    <aside className='sidebar'>
      {/* Contact Info */}
      <div className='sidebar-section' id='contact'>
        <h3 className='sidebar-title'>📞 연락처</h3>
        <div className='flex flex-col gap-4'>
          {CONTACT_INFO.map((contact: ContactInfo, index: number) =>
            contact.link ? (
              <a key={index} href={contact.link} className='contact-item'>
                {contact.icon} {contact.text} {contact.pdfText && <span className='pdf-only'>{contact.pdfText}</span>}
              </a>
            ) : (
              <div key={index} className='contact-item'>
                {contact.icon} {contact.text}
              </div>
            )
          )}
        </div>
      </div>

      {/* Skills Summary */}
      <div className='sidebar-section' id='skills'>
        {SKILL_CATEGORIES.map((category: SkillCategory, index: number) => {
          const desktopSkills = category.skills.slice(0, category.desktopDisplayCount || 4);
          const remainingCount = category.skills.length - desktopSkills.length;

          return (
            <div key={index} className='skill-category'>
              <h4 className='skill-category-title'>
                {category.icon} {category.category}
              </h4>
              {/* 데스크톱용 (축약버전) */}
              <div className='skill-items-desktop'>
                {skillMapping(desktopSkills)}
                <span className='text-xs text-slate-500 self-center ml-2'>
                  외 {remainingCount}개
                </span>
              </div>
              {/* 모바일/태블릿용 (전체버전) */}
              <div className='skill-items-mobile'>{skillMapping(category.skills)}</div>
            </div>
          );
        })}
      </div>
    </aside>
  );
};

export default Sidebar;
