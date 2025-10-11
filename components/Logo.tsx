import React from 'react';

interface LogoProps extends React.SVGProps<SVGSVGElement> {
  className?: string;
}

export function Logo({ className, ...props }: LogoProps) {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      {...props}
    >
      <rect width="32" height="32" rx="8" fill="currentColor" />
      <path 
        d="M16 8v4m0 12v4M8.93 8.93l2.83 2.83m8.48 8.48 2.83 2.83M8 16h4m12 0h-4M8.93 23.07l2.83-2.83m8.48-8.48 2.83-2.83" 
        stroke="white" 
        strokeWidth="2" 
        strokeLinecap="round" 
        strokeLinejoin="round"
      />
    </svg>
  );
}
