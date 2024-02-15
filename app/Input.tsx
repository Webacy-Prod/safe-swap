'use client';

import React, { useEffect, useState } from 'react';
import classnames from 'classnames';
import Spinner from './Spinner';

const blueStyles =
  'text-sky-100 border-sky-300 focus:border-sky-300 focus:bg-sky-300 focus:ring-sky-300 placeholder-sky-300/30 border-sky-300';
const redStyles =
  'text-red-200 border-red-400 focus:border-red-300 focus:bg-red-300 focus:ring-red-300 placeholder-red-300/30 border-red-300';
const greenStyles =
  'text-sky-100 border-green-300 focus:border-green-300 focus:bg-green-300 focus:ring-green-300 placeholder-green-300/30 border-green-300';
const yellowStyles =
  'text-yellow-200 border-yellow-200 focus:border-yellow-200 focus:bg-yellow-200 focus:ring-yellow-200 placeholder-yellow-200/30 border-yellow-200';

export default function Input(props: any) {
  const {
    label,
    className,
    disabled,
    loading,
    error,
    icon,
    size,
    shrink,
    color,
    ...rest
  } = props;
  const { value = '' } = rest;
  const [localValue, setValue] = useState(value);
  useEffect(() => {
    console.log('value changed');
    setValue(value);
  }, [value])
  const inputStyles = classnames(
    'transition text-[100%] rounded-lg',
    'bg-transparent',
    'appearance-none',
    'w-full',
    'py-2 px-4',
    'border',
    'border-opacity-40',
    'focus:ring-transparent focus:outline-none focus:bg-opacity-10',
    {
      [blueStyles]: !error && !color,
      [greenStyles]: !error && color === 'green',
      [yellowStyles]: !error && color === 'yellow',
      [redStyles]: error,
      'px-3 py-1': size === 'small',
      'px-3 py-3 text-[1.5rem]': size === 'large',
    }
  );

  return (
    <div className={shrink ? 'inline-block' : 'w-full'}>
      <div className="relative flex items-center justify-end text-[1.25rem] ">
        <input
          type="text"
          className={`${className} ${inputStyles} ${
            disabled ? 'opacity-50' : ''
          }`}
          placeholder={label}
          disabled={disabled}
          {...rest}
          value={localValue}
          onChange={(e) => {
            setValue(e.target.value)
            if (rest.onChange) {
              rest.onChange(e.target.value);
            }
          }}
        />
        {loading && <Spinner className="absolute right-[1em]" />}
        {!loading && icon}
      </div>
      <div className="text-red-400 absolute">{error}</div>
    </div>
  );
}