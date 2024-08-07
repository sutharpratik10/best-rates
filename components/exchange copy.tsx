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
import{ Currencylist } from "@/components/currency_list";

export default function Exchange() {
    const [fromCurrency, setFromCurrency] = useState('');
    const [toCurrency, setToCurrency] = useState('');
    const [amount, setAmount] = useState(0);
    const [convertedAmount, setConvertedAmount] = useState(0);
    const [exchangeRate, setExchangeRate] = useState(1);

    useEffect(() => {
        if (fromCurrency && toCurrency) {
            const fetchExchangeRate = async () => {
                try {
                    const response = await fetch(`https://api.exchangerate-api.com/v4/latest/${fromCurrency}`);
                    const data = await response.json();
                    if (data && data.rates && data.rates[toCurrency]) {
                        const rate = data.rates[toCurrency];
                        setExchangeRate(rate);
                        setConvertedAmount(amount * rate);
                    } else {
                        console.error('Invalid response data:', data);
                    }
                } catch (error) {
                    console.error('Error fetching exchange rate:', error);
                }
            };

            fetchExchangeRate();
        }
    }, [fromCurrency, toCurrency, amount]);

    return (
        <Card className="flex flex-col items-center">
            <CardHeader className="w-full text-center">
                <CardTitle>Currency Exchange</CardTitle>
                <CardDescription>Best rates</CardDescription>
            </CardHeader>
            <CardContent className="flex justify-center w-full">
                <Currencylist onSelect={setFromCurrency}/>
                <Input placeholder="From" className="ml-1" value={amount} onChange={(e) => setAmount(parseFloat(e.target.value) || 0)}/>
            </CardContent>
            <CardContent className="flex justify-center w-full">
                <ArrowPathIcon className="h-7"/>
            </CardContent>
            <CardContent className="flex justify-center w-full">
                <Currencylist onSelect={setToCurrency}/>
                <Input placeholder="To" className="ml-1" value={convertedAmount} readOnly/>
            </CardContent>
            <CardFooter className="flex justify-center w-full">
                Exchange Rate: {exchangeRate}
            </CardFooter>
        </Card>
    );
}