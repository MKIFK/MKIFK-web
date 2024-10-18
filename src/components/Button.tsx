import React from 'react';
import { Link } from 'react-router-dom';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary';
  linkTo?: string;
  onClick?: () => void;
  className?: string;
  external?: boolean;
}

const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary', 
  linkTo, 
  onClick,
  className = '',
  external = false
}) => {
  const baseClass = 'button';
  const variantClass = `${baseClass}--${variant}`;
  const combinedClassName = `${baseClass} ${variantClass} ${className}`.trim();

  if (linkTo) {
    if (external) {
      return (
        <a href={linkTo} className={combinedClassName} target="_blank" rel="noopener noreferrer">
          {children}
        </a>
      );
    }
    return (
      <Link to={linkTo} className={combinedClassName}>
        {children}
      </Link>
    );
  }

  return (
    <button className={combinedClassName} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;