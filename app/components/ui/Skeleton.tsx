'use client'
import classNames from 'classnames';

function Skeleton({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={classNames('animate-pulse bg-gray-300 dark:bg-gray-500', className)} {...props} ></div>;
}

export { Skeleton };
