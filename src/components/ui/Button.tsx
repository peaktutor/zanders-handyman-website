import React from 'react'
import Link from 'next/link'
import { cn } from '@/lib/utils'

// Flexible button props interface
interface ButtonProps {
  children?: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  disabled?: boolean;
  loading?: boolean;
  onClick?: () => void;
  href?: string;
  target?: string;
  className?: string;
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
  type?: 'button' | 'submit' | 'reset';
}

const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  disabled = false,
  loading = false,
  onClick,
  href,
  target,
  className,
  icon,
  iconPosition = 'left',
  type = 'button',
}) => {
  // Base styles
  const baseStyles = cn(
    'inline-flex items-center justify-center font-semibold rounded-lg transition-all duration-300',
    'focus:outline-none focus:ring-2 focus:ring-offset-2',
    'disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:transform-none',
    'active:scale-95',
    {
      'cursor-not-allowed': disabled || loading,
    }
  )

  // Variant styles
  const variantStyles = {
    primary: cn(
      'bg-gradient-to-r from-primary-600 to-accent-500 text-white',
      'hover:shadow-glow hover:scale-105 focus:ring-primary-500',
      'disabled:hover:shadow-none disabled:hover:scale-100'
    ),
    secondary: cn(
      'bg-neutral-100 text-neutral-900 border border-neutral-200',
      'hover:bg-neutral-200 hover:border-neutral-300 focus:ring-neutral-500',
      'dark:bg-neutral-800 dark:text-neutral-100 dark:border-neutral-700',
      'dark:hover:bg-neutral-700 dark:hover:border-neutral-600'
    ),
    outline: cn(
      'border-2 border-primary-500 text-primary-500 bg-transparent',
      'hover:bg-primary-50 hover:border-primary-600 focus:ring-primary-500',
      'dark:hover:bg-primary-900/20'
    ),
    ghost: cn(
      'text-neutral-700 bg-transparent hover:bg-neutral-100',
      'focus:ring-neutral-500 dark:text-neutral-300 dark:hover:bg-neutral-800'
    ),
  }

  // Size styles
  const sizeStyles = {
    sm: 'px-3 py-2 text-sm',
    md: 'px-4 py-2.5 text-base',
    lg: 'px-6 py-3 text-lg',
    xl: 'px-8 py-4 text-xl',
  }

  // Icon styles
  const iconStyles = {
    sm: 'w-4 h-4',
    md: 'w-5 h-5',
    lg: 'w-6 h-6',
    xl: 'w-7 h-7',
  }

  // Combine all styles
  const buttonClassName = cn(
    baseStyles,
    variantStyles[variant],
    sizeStyles[size],
    className
  )

  // Loading spinner component
  const LoadingSpinner = () => (
    <svg
      className={cn('animate-spin', iconStyles[size])}
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
    >
      <circle
        className="opacity-25"
        cx="12"
        cy="12"
        r="10"
        stroke="currentColor"
        strokeWidth="4"
      />
      <path
        className="opacity-75"
        fill="currentColor"
        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
      />
    </svg>
  )

  // Content with icon
  const ButtonContent = () => (
    <>
      {loading && <LoadingSpinner />}
      {!loading && icon && iconPosition === 'left' && (
        <span className={cn(iconStyles[size], children ? 'mr-2' : '')}>
          {icon}
        </span>
      )}
      {children && <span>{children}</span>}
      {!loading && icon && iconPosition === 'right' && (
        <span className={cn(iconStyles[size], children ? 'ml-2' : '')}>
          {icon}
        </span>
      )}
    </>
  )

  // If href is provided, render as Link
  if (href && !disabled && !loading) {
    if (href.startsWith('http') || target === '_blank') {
      return (
        <a
          href={href}
          target={target}
          rel={target === '_blank' ? 'noopener noreferrer' : undefined}
          className={buttonClassName}
        >
          <ButtonContent />
        </a>
      )
    } else {
      return (
        <Link href={href} className={buttonClassName}>
          <ButtonContent />
        </Link>
      )
    }
  }

  // Render as button
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled || loading}
      className={buttonClassName}
    >
      <ButtonContent />
    </button>
  )
}

export default Button

// Export convenience components
export const PrimaryButton: React.FC<Omit<ButtonProps, 'variant'>> = (props) => (
  <Button variant="primary" {...props} />
)

export const SecondaryButton: React.FC<Omit<ButtonProps, 'variant'>> = (props) => (
  <Button variant="secondary" {...props} />
)

export const OutlineButton: React.FC<Omit<ButtonProps, 'variant'>> = (props) => (
  <Button variant="outline" {...props} />
)

export const GhostButton: React.FC<Omit<ButtonProps, 'variant'>> = (props) => (
  <Button variant="ghost" {...props} />
)

// Specialized button components
export const CTAButton: React.FC<Omit<ButtonProps, 'variant' | 'size'>> = (props) => (
  <Button 
    variant="primary" 
    size="lg" 
    className="font-accent text-sm tracking-wide uppercase"
    {...props} 
  />
)

export const FaithButton: React.FC<Omit<ButtonProps, 'variant'>> = ({ className, ...props }) => (
  <Button 
    variant="primary"
    className={cn(
      'bg-gradient-to-r from-success-500 to-primary-600',
      'hover:from-success-600 hover:to-primary-700',
      className
    )}
    {...props} 
  />
)