'use client';

import React, { forwardRef } from 'react';
import { cn } from '@/lib/utils';

export interface InputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'> {
  label?: string;
  error?: string;
  helperText?: string;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  variant?: 'default' | 'filled' | 'outline';
  size?: 'sm' | 'md' | 'lg';
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ 
    className, 
    type = 'text', 
    label, 
    error, 
    helperText, 
    leftIcon, 
    rightIcon, 
    variant = 'default',
    size = 'md',
    disabled,
    required,
    ...props 
  }, ref) => {
    const baseStyles = 'w-full rounded-lg border transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-primary-500/20 focus:border-primary-500';
    
    const variants = {
      default: 'border-neutral-300 bg-white hover:border-neutral-400 focus:bg-white',
      filled: 'border-transparent bg-neutral-100 hover:bg-neutral-200 focus:bg-white focus:border-primary-500',
      outline: 'border-2 border-neutral-300 bg-transparent hover:border-primary-400 focus:border-primary-500'
    };

    const sizes = {
      sm: 'px-3 py-2 text-sm',
      md: 'px-4 py-3 text-base',
      lg: 'px-5 py-4 text-lg'
    };

    const disabledStyles = disabled ? 'opacity-50 cursor-not-allowed bg-neutral-50' : '';
    const errorStyles = error ? 'border-red-500 focus:border-red-500 focus:ring-red-500/20' : '';

    return (
      <div className="space-y-2">
        {label && (
          <label className="block text-sm font-medium text-neutral-700">
            {label}
            {required && <span className="text-red-500 ml-1">*</span>}
          </label>
        )}
        
        <div className="relative">
          {leftIcon && (
            <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-neutral-400">
              {leftIcon}
            </div>
          )}
          
          <input
            type={type}
            className={cn(
              baseStyles,
              variants[variant],
              sizes[size],
              leftIcon && 'pl-10',
              rightIcon && 'pr-10',
              disabledStyles,
              errorStyles,
              className
            )}
            ref={ref}
            disabled={disabled}
            {...props}
          />
          
          {rightIcon && (
            <div className="absolute right-3 top-1/2 transform -translate-y-1/2 text-neutral-400">
              {rightIcon}
            </div>
          )}
        </div>
        
        {error && (
          <p className="text-sm text-red-600 flex items-center gap-1">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
            </svg>
            {error}
          </p>
        )}
        
        {helperText && !error && (
          <p className="text-sm text-neutral-500">{helperText}</p>
        )}
      </div>
    );
  }
);

Input.displayName = 'Input';

export { Input };