import React, { ButtonHTMLAttributes, Fragment } from 'react';
import classnames from 'classnames';
import Spinner from './Spinner';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  label?: string;
  shrink?: boolean;
  children: React.ReactNode;
  secondary?: boolean;
  inverted?: boolean;
  dark?: boolean;
  grimmie?: boolean;
  loadingText?: string;
  disabled?: boolean;
  loading?: boolean;
  className?: string;
  size?: 'small' | 'large';
  rounded?: boolean;
  noRadius?: boolean;
  color?: string;
  noHover?: boolean;
  transparent?: boolean;
  justifyLeft?: boolean;
  justifyBetween?: boolean;
  value?: string;
  onClick?: (any: any) => void;
}
export default function Button({
  label,
  shrink,
  children,
  secondary,
  inverted,
  dark,
  grimmie,
  loadingText,
  disabled,
  loading = false,
  className = '',
  size,
  rounded,
  noRadius,
  color,
  noHover,
  transparent,
  justifyLeft,
  justifyBetween,
  value = '',
  ...rest
}: ButtonProps) {
  const isPrimary = !transparent && !secondary && !color;

  return (
    <Fragment>
      <button
        className={classnames(
          'button flex items-center font-sans font-medium capitalize',
          'no-underline hover:no-underline border text',
          'user-select-none',
          {
            'bg-transparent text-sky-300 hover:text-sky-600 hover:border-white border-sky-300':
              secondary === true && !color,
            'bg-transparent text-sky-300 hover:text-sky-600 hover:border-white border-none':
              transparent === true,
            'bg-sky-300 text-sky-900 border-sky-300': isPrimary,
            'rounded-full px-6': rounded,
            'button-inverted': inverted,
            'button-dark': dark,
            'button-grimmie': grimmie,
            'w-auto inline-flex': shrink,
            'w-full': !shrink,
            'rounded-lg': !noRadius,
            'justify-center': !justifyLeft && !justifyBetween,
            'justify-between': justifyBetween,
            'hover:bg-white hover:border-white hover:text-sky-600':
              !disabled && !secondary,
            'px-3 py-2 text-[1.25rem]': !size,
            'px-3 py-1 text-[1.1rem]': size === 'small',
            'px-3 py-3 text-[1.5rem]': size === 'large',
            'hover:text-white': secondary && !color,
            'bg-green-300 border-green-300 text-green-700 hover:text-green-700':
              color === 'green',
            'bg-teal-300 border-teal-300 text-teal-700 hover:text-teal-700':
              color === 'teal',
            'bg-amber-200 border-amber-300 text-amber-700 hover:text-amber-700':
              color === 'amber',
            'bg-yellow-200 border-yellow-300 text-yellow-700 hover:text-yellow-700':
              color === 'yellow',
            'border-red-400 text-red-400 hover:bg-red-500 hover:text-red-100':
              color === 'red' && secondary,
            'border-white/50 text-white hover:text-sky-600 hover:bg-white':
              color === 'white' && secondary && !disabled,
            'bg-red-500 text-white border-red-500':
              color === 'red' && !secondary,
            'pointer-events-none': noHover,
            'cursor-not-allowed opacity-30': disabled,
          },
          className
        )}
        disabled={disabled || loading}
        {...rest}
        value={value}
      >
        {loading && loadingText ? loadingText : children}
        {loading && (
          <Spinner className="ml-3 -mr-1 h-6" color={color ? color : 'sky'} />
        )}
      </button>
    </Fragment>
  );
}