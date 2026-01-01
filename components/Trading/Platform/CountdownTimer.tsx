"use client";

import React, { useState, useEffect } from "react";

interface CountdownTimerProps {
    endDate: Date;
    prefix?: string;
}

const CountdownTimer: React.FC<CountdownTimerProps> = ({ endDate, prefix = "Close in" }) => {
    const [timeLeft, setTimeLeft] = useState({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
    });
    const [expired, setExpired] = useState(false);

    useEffect(() => {
        const calculateTimeLeft = () => {
            const now = new Date().getTime();
            const end = endDate.getTime();
            const difference = end - now;

            if (difference <= 0) {
                setExpired(true);
                return { days: 0, hours: 0, minutes: 0, seconds: 0 };
            }

            const days = Math.floor(difference / (1000 * 60 * 60 * 24));
            const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((difference % (1000 * 60)) / 1000);

            return { days, hours, minutes, seconds };
        };

        // Calculate immediately
        const initialTime = calculateTimeLeft();
        if (initialTime.days === 0 && initialTime.hours === 0 && initialTime.minutes === 0 && initialTime.seconds === 0) {
            setExpired(true);
        } else {
            setTimeLeft(initialTime);
        }

        // Update every second
        const interval = setInterval(() => {
            const time = calculateTimeLeft();
            if (time.days === 0 && time.hours === 0 && time.minutes === 0 && time.seconds === 0) {
                setExpired(true);
                clearInterval(interval);
            } else {
                setTimeLeft(time);
            }
        }, 1000);

        return () => clearInterval(interval);
    }, [endDate]);

    if (expired) {
        return <span>Expired</span>;
    }

    const formatTime = (value: number) => {
        return value.toString().padStart(2, "0");
    };

    return (
        <span>
            {prefix} {formatTime(timeLeft.days)}:{formatTime(timeLeft.hours)}:{formatTime(timeLeft.minutes)}:{formatTime(timeLeft.seconds)}
        </span>
    );
};

export default CountdownTimer;

