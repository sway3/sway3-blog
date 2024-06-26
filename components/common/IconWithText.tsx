import React from 'react';

interface IconWithTextProps {
  Icon: (props: React.ComponentProps<'svg'>) => JSX.Element;
  iconSize: number;
  text: React.ReactNode;
  className?: string;
}

export default function IconWithText({ Icon, iconSize, text, className }: IconWithTextProps) {
  return (
    <div className={`flex items-center gap-1 ${className ?? 'text-xs'}`}>
      <span>
        <Icon width={iconSize} height={iconSize} />
      </span>
      <span>{text}</span>
    </div>
  );
}
