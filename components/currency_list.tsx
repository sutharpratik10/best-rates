"use client"

import * as React from "react"
import { CaretSortIcon, CheckIcon } from "@radix-ui/react-icons"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"

interface CurrencylistProps {
  onSelect: (currency: string) => void;
}

export function Currencylist({ onSelect }: CurrencylistProps)  {
    const [open, setOpen] = React.useState(false)
    const [currencies, setCurrencies] = React.useState<{ value: string, label: string }[]>([]);
    const [selectedCurrency, setSelectedCurrency] = React.useState<string | null>(null);
    const [loading, setLoading] = React.useState(true);
    const [error, setError] = React.useState<string | null>(null);

  React.useEffect(() => {
    const fetchCurrencies = async () => {
      try {
        const response = await fetch(`https://v6.exchangerate-api.com/v6/${process.env.NEXT_PUBLIC_EXCHANGE_RATE_API_KEY}/latest/USD`);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        const currencyList = Object.keys(data.conversion_rates).map(key => ({
          value: key,
          label: key,
        }));
        setCurrencies(currencyList);
      } catch (error) {
        setError('Failed to fetch currencies');
      } finally {
        setLoading(false);
      }
    };

    fetchCurrencies();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
          <Button
              variant="outline"
              role="combobox"
              aria-expanded={open}
              className="w-[200px] justify-between"
          >
              {selectedCurrency
                  ? currencies.find((currency) => currency.value === selectedCurrency)?.label
                  : "Select Currency..."}
              <CaretSortIcon className="ml-2 h-4 w-4 shrink-0 opacity-50" />
          </Button>
      </PopoverTrigger>
        <PopoverContent className="w-[200px] p-0">
            <Command>
                <CommandInput placeholder="Search Currency..." className="h-9" />
                <CommandList>
                    <CommandEmpty>No Currency found.</CommandEmpty>
                    <CommandGroup>
                        {currencies.map((currency) => (
                            <CommandItem
                                key={currency.value}
                                value={currency.value}
                                onSelect={(selectedValue) => {
                                    setSelectedCurrency(selectedValue);
                                    onSelect(selectedValue); // Call onSelect to set currency in Exchange
                                    setOpen(false);
                                }}
                            >
                                {currency.label}
                                <CheckIcon
                                    className={cn(
                                        "ml-auto h-4 w-4",
                                        selectedCurrency === currency.value ? "opacity-100" : "opacity-0"
                                    )}
                                />
                            </CommandItem>
                        ))}
                    </CommandGroup>
                </CommandList>
            </Command>
        </PopoverContent>
    </Popover>
  )
}
