'use client';

import * as React from 'react';
import { cn } from '@/Lib/utils';

const Command = React.forwardRef(({ className, ...props }: any, ref: any) => (
  <div ref={ref} className={cn('flex flex-col gap-1 p-2', className)} {...props} />
));
Command.displayName = 'Command';

const CommandInput = React.forwardRef(({ className, ...props }: any, ref: any) => (
  <input
    ref={ref}
    className={cn(
      'w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none',
      className
    )}
    {...props}
  />
));
CommandInput.displayName = 'CommandInput';

const CommandEmpty = ({ children }: any) => (
  <div className="p-2 text-sm text-gray-500">{children}</div>
);
CommandEmpty.displayName = 'CommandEmpty';

const CommandGroup = ({ children }: any) => (
  <div className="p-1">{children}</div>
);
CommandGroup.displayName = 'CommandGroup';

const CommandItem = React.forwardRef(({ children, className, ...props }: any, ref: any) => (
  <div
    ref={ref}
    className={cn(
      'cursor-pointer px-3 py-2 rounded-md hover:bg-gray-100 aria-selected:bg-gray-200',
      className
    )}
    {...props}
  >
    {children}
  </div>
));
CommandItem.displayName = 'CommandItem';

export {
  Command,
  CommandInput,
  CommandEmpty,
  CommandGroup,
  CommandItem,
};
