"use client";

import React, { useState, useEffect } from 'react';
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { ArrowPathIcon } from '@heroicons/react/24/outline';
import { Currencylist } from "@/components/currency_list";

export default function Exchange() {
    const [fromCurrency, setFromCurrency] = useState('');
    const [toCurrency, setToCurrency] = useState('');
    const [fromAmount, setFromAmount] = useState(0);
    const [toAmount, setToAmount] = useState(0);
    const [exchangeRate, setExchangeRate] = useState(1);
    const [lastEdited, setLastEdited] = useState<'from' | 'to'>('from');

    useEffect(() => {
        const fetchExchangeRate = async () => {
            if (fromCurrency && toCurrency) {
                try {
                    const response = await fetch(`https://api.exchangerate-api.com/v4/latest/${fromCurrency}`);
                    const data = await response.json();
                    if (data && data.rates && data.rates[toCurrency]) {
                        const rate = data.rates[toCurrency];
                        setExchangeRate(rate);
                        if (lastEdited === 'from') {
                            setToAmount(fromAmount * rate);
                        } else {
                            setFromAmount(toAmount / rate);
                        }
                    } else {
                        console.error('Invalid response data:', data);
                    }
                } catch (error) {
                    console.error('Error fetching exchange rate:', error);
                }
            }
        };

        fetchExchangeRate();
    }, [fromCurrency, toCurrency, fromAmount, toAmount, lastEdited]);

    const handleFromAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFromAmount(parseFloat(e.target.value) || 0);
        setLastEdited('from');
    };

    const handleToAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setToAmount(parseFloat(e.target.value) || 0);
        setLastEdited('to');
    };

    return (
        <Card className="flex flex-col items-center">
            <CardHeader className="w-full text-center">
                <CardTitle>Currency Exchange</CardTitle>
                <CardDescription>Best rates</CardDescription>
            </CardHeader>
            <CardContent className="flex justify-center w-full">
                <Currencylist onSelect={setFromCurrency}/>
                <Input
                    placeholder="From"
                    className="ml-1"
                    type="number"
                    value={fromAmount}
                    onChange={handleFromAmountChange}
                />
            </CardContent>
            <CardContent className="flex justify-center w-full">
                <ArrowPathIcon className="h-7"/>
            </CardContent>
            <CardContent className="flex justify-center w-full">
                <Currencylist onSelect={setToCurrency}/>
                <Input
                    placeholder="To"
                    className="ml-1"
                    type="number"
                    value={toAmount}
                    onChange={handleToAmountChange}
                />
            </CardContent>
            <CardFooter className="flex justify-center w-full">
                Exchange Rate: {exchangeRate}
            </CardFooter>
        </Card>
    );
}
