"use client";

import * as React from "react";
import { useState } from "react";
import { Check, ChevronDown } from "lucide-react";
import { cn } from "@/Lib/utils";

import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from "@/app/components/ui/command";

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/app/components/ui/popover";

import type { ButtonHTMLAttributes, HTMLAttributes, ReactNode } from "react";


interface SelectProps {
  value?: string;
  onValueChange?: (value: string) => void;
  placeholder?: string;
  children: ReactNode;
}

const SelectContext = React.createContext<{
  selected: string;
  setSelected: (value: string) => void;
} | null>(null);


const Select = ({ value = "", onValueChange, placeholder, children }: SelectProps) => {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState(value);

  const handleSelect = (val: string) => {
    setSelected(val);
    onValueChange?.(val);
    setOpen(false);
  };

  return (
    <SelectContext.Provider value={{ selected, setSelected: handleSelect }}>
      <Popover open={open} onOpenChange={setOpen}>
        {children}
      </Popover>
    </SelectContext.Provider>
  );
};


interface SelectTriggerProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
}

const SelectTrigger = React.forwardRef<HTMLButtonElement, SelectTriggerProps>(
  ({ children, className, ...props }, ref) => (
    <PopoverTrigger asChild>
      <button
        ref={ref}
        className={cn(
          "flex h-10 w-full items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
          className
        )}
        {...props}
      >
        {children}
        <ChevronDown className="ml-2 h-4 w-4 opacity-50" />
      </button>
    </PopoverTrigger>
  )
);
SelectTrigger.displayName = "SelectTrigger";

// ========== SelectContent ==========
const SelectContent = React.forwardRef<
  HTMLDivElement,
  HTMLAttributes<HTMLDivElement>
>(({ children, className, ...props }, ref) => (
  <PopoverContent
    ref={ref}
    className={cn("w-full p-0", className)}
    align="start"
    {...props}
  >
    <Command>
      <CommandInput placeholder="Search..." />
      <CommandEmpty>No item found.</CommandEmpty>
      <CommandGroup>{children}</CommandGroup>
    </Command>
  </PopoverContent>
));
SelectContent.displayName = "SelectContent";

// ========== SelectItem ==========
interface SelectItemProps extends HTMLAttributes<HTMLDivElement> {
  value: string;
  children: ReactNode;
}

const SelectItem = React.forwardRef<HTMLDivElement, SelectItemProps>(
  ({ value, children, className, ...props }, ref) => {
    const ctx = React.useContext(SelectContext);
    if (!ctx) throw new Error("SelectItem must be used within Select");

    const isSelected = ctx.selected === value;

    return (
      <CommandItem
        ref={ref}
        className={cn("cursor-pointer", className)}
        onSelect={() => ctx.setSelected(value)}
        {...props}
      >
        <Check className={cn("mr-2 h-4 w-4", isSelected ? "opacity-100" : "opacity-0")} />
        {children}
      </CommandItem>
    );
  }
);
SelectItem.displayName = "SelectItem";


const SelectGroup = React.forwardRef<
  HTMLDivElement,
  HTMLAttributes<HTMLDivElement>
>(({ children, className, ...props }, ref) => (
  <div ref={ref} className={cn("p-2", className)} {...props}>
    {children}
  </div>
));
SelectGroup.displayName = "SelectGroup";

// ========== SelectLabel ==========
const SelectLabel = React.forwardRef<
  HTMLDivElement,
  HTMLAttributes<HTMLDivElement>
>(({ children, className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "px-2 py-1 text-xs font-semibold text-gray-500 uppercase",
      className
    )}
    {...props}
  >
    {children}
  </div>
));
SelectLabel.displayName = "SelectLabel";

// ========== SelectValue ==========
interface SelectValueProps {
  placeholder?: string;
}

const SelectValue = ({ placeholder }: SelectValueProps) => {
  const ctx = React.useContext(SelectContext);
  if (!ctx) throw new Error("SelectValue must be used within Select");

  return (
    <span className={ctx.selected ? "" : "text-gray-400"}>
      {ctx.selected || placeholder}
    </span>
  );
};
SelectValue.displayName = "SelectValue";

// ========== Export ==========

export {
  Select,
  SelectTrigger,
  SelectContent,
  SelectItem,
  SelectGroup,
  SelectLabel,
  SelectValue,
};
