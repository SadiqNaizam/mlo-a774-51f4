"use client"

import * as React from "react"
import { addDays, format, subDays, startOfMonth, endOfMonth, startOfYesterday, endOfYesterday } from "date-fns"
import { Calendar as CalendarIcon } from "lucide-react"
import { DateRange } from "react-day-picker"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"

interface DateRangePickerProps extends React.HTMLAttributes<HTMLDivElement> {
  onDateChange?: (range: DateRange | undefined) => void;
  initialDate?: DateRange;
}

export function DateRangePicker({
  className,
  onDateChange,
  initialDate
}: DateRangePickerProps) {
  console.log('DateRangePicker loaded');
  const [date, setDate] = React.useState<DateRange | undefined>(initialDate || {
    from: subDays(new Date(), 29),
    to: new Date(),
  });
  const [isOpen, setIsOpen] = React.useState(false);

  React.useEffect(() => {
    if (onDateChange) {
      onDateChange(date);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [date]);

  const handlePresetClick = (range: DateRange) => {
    setDate(range);
    setIsOpen(false);
  };

  const presets = [
    { label: 'Today', range: { from: new Date(), to: new Date() } },
    { label: 'Yesterday', range: { from: startOfYesterday(), to: endOfYesterday() } },
    { label: 'Last 7 Days', range: { from: subDays(new Date(), 6), to: new Date() } },
    { label: 'Last 30 Days', range: { from: subDays(new Date(), 29), to: new Date() } },
    { label: 'This Month', range: { from: startOfMonth(new Date()), to: endOfMonth(new Date()) } },
  ];

  return (
    <div className={cn("grid gap-2", className)}>
      <Popover open={isOpen} onOpenChange={setIsOpen}>
        <PopoverTrigger asChild>
          <Button
            id="date"
            variant={"outline"}
            className={cn(
              "w-[260px] justify-start text-left font-normal",
              !date && "text-muted-foreground"
            )}
          >
            <CalendarIcon className="mr-2 h-4 w-4" />
            {date?.from ? (
              date.to ? (
                <>
                  {format(date.from, "LLL dd, y")} -{" "}
                  {format(date.to, "LLL dd, y")}
                </>
              ) : (
                format(date.from, "LLL dd, y")
              )
            ) : (
              <span>Pick a date</span>
            )}
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-auto p-0 flex" align="start">
          <div className="flex flex-col space-y-1 p-2 border-r border-gray-200">
            <div className="px-2 py-1.5 text-sm font-semibold">Presets</div>
            {presets.map(({ label, range }) => (
                <Button
                  key={label}
                  onClick={() => handlePresetClick(range)}
                  variant="ghost"
                  className="justify-start font-normal"
                >
                  {label}
                </Button>
            ))}
          </div>
          <Calendar
            initialFocus
            mode="range"
            defaultMonth={date?.from}
            selected={date}
            onSelect={(newDate) => {
              setDate(newDate);
              // Close popover after a range is selected
              if(newDate?.from && newDate?.to) {
                setIsOpen(false);
              }
            }}
            numberOfMonths={2}
          />
        </PopoverContent>
      </Popover>
    </div>
  )
}

export default DateRangePicker;