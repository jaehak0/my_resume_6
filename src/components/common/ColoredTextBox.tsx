import React from 'react';

interface ColoredTextBoxProps {
  variant: 'rose' | 'amber' | 'emerald';
  children: React.ReactNode;
  className?: string;
}

const ColoredTextBox: React.FC<ColoredTextBoxProps> = ({ variant, children, className = '' }) => {
  const baseClass = `${variant}-text-box-soft p-4 leading-relaxed ${className}`;

  return <div className={baseClass}>{children}</div>;
};

export default ColoredTextBox;
