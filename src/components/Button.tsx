import React from 'react';
import { Link } from 'react-router-dom';
import * as Icons from '@mui/icons-material';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary';
  linkTo?: string;
  onClick?: () => void;
  className?: string;
  external?: boolean;
  icon?: keyof typeof Icons;
}

const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary', 
  linkTo, 
  onClick,
  className = '',
  external = false,
  icon
}) => {
  const baseClass = 'button';
  const variantClass = `${baseClass}--${variant}`;
  const combinedClassName = `${baseClass} ${variantClass} ${className}`.trim();

  const IconComponent = icon ? Icons[icon] : null;

  const buttonContent = (
    <>
      {IconComponent && <IconComponent className="button__icon" />}
      <span className="button__text">{children}</span>
    </>
  );

  if (linkTo) {
    if (external) {
      return (
        <a href={linkTo} className={combinedClassName} target="_blank" rel="noopener noreferrer">
          {buttonContent}
        </a>
      );
    }
    return (
      <Link to={linkTo} className={combinedClassName}>
        {buttonContent}
      </Link>
    );
  }

  return (
    <button className={combinedClassName} onClick={onClick}>
      {buttonContent}
    </button>
  );
};

export default Button;