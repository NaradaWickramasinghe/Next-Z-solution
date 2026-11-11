interface IconProps {
  name: string;
  className?: string;
}

export function Icon({ name, className = '' }: IconProps) {
  return (
    <svg className={`icon ${className}`.trim()} aria-hidden="true">
      <use href={`#${name}`} />
    </svg>
  );
}
