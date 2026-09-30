import React from 'react';
import Link from 'next/link';

interface ButtonProps {
  children: React.ReactNode;
  href?: string;
  variant?: 'primary' | 'secondary' | 'outline-orange';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
  target?: string;
  rel?: string;
  id?: string;
  style?: React.CSSProperties;
}

export default function Button({
  children,
  href,
  variant = 'primary',
  size = 'md',
  className = '',
  onClick,
  type = 'button',
  disabled = false,
  target,
  rel,
  id,
  style,
}: ButtonProps) {
  const variantClass =
    variant === 'primary'
      ? 'btn-primary'
      : variant === 'secondary'
      ? 'btn-secondary'
      : 'btn-outline-orange';

  const sizeClass = size === 'sm' ? 'btn-sm' : size === 'lg' ? 'btn-lg' : '';
  const combinedClass = `btn ${variantClass} ${sizeClass} ${className}`.trim();

  if (href) {
    if (href.startsWith('http') || href.startsWith('mailto:') || href.startsWith('tel:')) {
      return (
        <a href={href} className={combinedClass} target={target} rel={rel} onClick={onClick} id={id} style={style}>
          {children}
        </a>
      );
    }
    return (
      <Link href={href} className={combinedClass} onClick={onClick} id={id} style={style}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} className={combinedClass} onClick={onClick} disabled={disabled} id={id} style={style}>
      {children}
    </button>
  );
}
