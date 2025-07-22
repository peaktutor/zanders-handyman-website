import React from 'react'
import { cn } from '@/lib/utils'
import { CardProps } from '@/lib/types'

const Card: React.FC<CardProps> = ({
  children,
  className,
  hover = false,
  padding = 'md',
  background = 'white',
}) => {
  const baseStyles = 'rounded-xl transition-all duration-300'
  
  const backgroundStyles = {
    white: 'bg-white border border-neutral-200',
    gray: 'bg-neutral-50 border border-neutral-200',
    dark: 'bg-neutral-900 border border-neutral-700 text-white',
  }
  
  const paddingStyles = {
    sm: 'p-4',
    md: 'p-6',
    lg: 'p-8',
  }
  
  const hoverStyles = hover ? 'hover:shadow-card-hover hover:-translate-y-1' : ''
  
  return (
    <div
      className={cn(
        baseStyles,
        backgroundStyles[background],
        paddingStyles[padding],
        hoverStyles,
        'shadow-card',
        className
      )}
    >
      {children}
    </div>
  )
}

export default Card

// Specialized card components
export const ServiceCard: React.FC<CardProps & { featured?: boolean }> = ({ 
  featured = false, 
  className, 
  ...props 
}) => (
  <Card
    hover={true}
    className={cn(
      'relative overflow-hidden',
      featured && [
        'ring-2 ring-primary-500',
        'bg-gradient-to-br from-primary-50 to-accent-50',
        'dark:from-primary-900/20 dark:to-accent-900/20'
      ],
      className
    )}
    {...props}
  />
)

export const TestimonialCard: React.FC<CardProps & { compact?: boolean }> = ({ 
  compact = false, 
  className, 
  ...props 
}) => (
  <Card
    hover={true}
    padding={compact ? 'sm' : 'md'}
    className={cn(
      'relative',
      'before:absolute before:top-0 before:left-0 before:w-1 before:h-full',
      'before:bg-gradient-to-b before:from-primary-500 before:to-accent-500',
      'before:rounded-l-xl',
      className
    )}
    {...props}
  />
)

export const PortfolioCard: React.FC<CardProps> = ({ className, ...props }) => (
  <Card
    hover={true}
    padding="sm"
    className={cn(
      'group overflow-hidden',
      'bg-gradient-to-br from-white to-neutral-50',
      className
    )}
    {...props}
  />
)

export const FeatureCard: React.FC<CardProps & { icon?: React.ReactNode }> = ({ 
  icon, 
  children,
  className, 
  ...props 
}) => (
  <Card
    hover={true}
    className={cn(
      'text-center',
      'hover:bg-gradient-to-br hover:from-primary-50 hover:to-accent-50',
      className
    )}
    {...props}
  >
    {icon && (
      <div className="flex justify-center mb-4">
        <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-gradient-to-r from-primary-500 to-accent-500 text-white">
          {icon}
        </div>
      </div>
    )}
    {children}
  </Card>
)

export const PricingCard: React.FC<CardProps & { 
  popular?: boolean 
  color?: 'foundation' | 'growth' | 'enterprise' 
}> = ({ 
  popular = false, 
  color = 'foundation',
  className, 
  ...props 
}) => {
  const colorStyles = {
    foundation: 'border-primary-200',
    growth: 'border-accent-200 ring-2 ring-accent-500',
    enterprise: 'border-success-200',
  }
  
  return (
    <Card
      hover={true}
      className={cn(
        'relative',
        colorStyles[color],
        popular && [
          'scale-105 ring-2 ring-primary-500',
          'bg-gradient-to-br from-primary-50 to-white'
        ],
        className
      )}
      {...props}
    />
  )
}