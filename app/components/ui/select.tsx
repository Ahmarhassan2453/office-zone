'use client';

import * as React from 'react';
import * as SelectPrimitive from '@radix-ui/react-select';
import { Check, ChevronDown } from 'lucide-react';

// Utility function for conditional classNames
function cn(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

export function Select({ onValueChange, children }: any) {
  return <SelectPrimitive.Root onValueChange={onValueChange}>{children}</SelectPrimitive.Root>;
}

export function SelectTrigger({ children, className }: any) {
  return (
    <SelectPrimitive.Trigger
      className={cn(
        "flex h-10 w-full items-center justify-between rounded-md border border-gray-300 bg-white px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500",
        className
      )}
      aria-label="Select an option"
    >
      {children}
      <ChevronDown className="ml-2 h-4 w-4 text-gray-500" />
    </SelectPrimitive.Trigger>
  );
}

export function SelectValue({ placeholder }: { placeholder?: string }) {
  return <SelectPrimitive.Value placeholder={placeholder || "Select an option"} />;
}

export function SelectContent({ children, className }: any) {
  return (
    <SelectPrimitive.Portal>
      <SelectPrimitive.Content
        className={cn(
          "z-50 mt-1 w-full rounded-md border border-gray-200 bg-white shadow-lg focus:outline-none",
          className
        )}
        position="popper"
        sideOffset={5}
      >
        <SelectPrimitive.Viewport className="p-1">
          {children}
        </SelectPrimitive.Viewport>
      </SelectPrimitive.Content>
    </SelectPrimitive.Portal>
  );
}

export function SelectGroup({ children }: any) {
  return <SelectPrimitive.Group>{children}</SelectPrimitive.Group>;
}

export function SelectItem({ value, children }: any) {
  return (
    <SelectPrimitive.Item
      value={value}
      className="relative flex cursor-pointer select-none items-center px-3 py-2 rounded-md text-sm text-gray-700 hover:bg-gray-100 focus:bg-gray-100 focus:outline-none"
    >
      <span className="absolute left-2">
        <SelectPrimitive.ItemIndicator>
          <Check className="h-4 w-4 text-blue-500" />
        </SelectPrimitive.ItemIndicator>
      </span>
      <SelectPrimitive.ItemText className="ml-6">{children}</SelectPrimitive.ItemText>
    </SelectPrimitive.Item>
  );
}
