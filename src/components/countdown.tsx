"use client";

import React, { useEffect, useState } from "react";

const eventStartDate = new Date("2025-08-05T10:00:00-03:00").getTime();
const eventEndDate = new Date("2025-08-07T22:00:00-03:00").getTime();

export function Countdown() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  const [eventStatus, setEventStatus] = useState("before");

  useEffect(() => {
    const calculateTimeLeft = () => {
      const now = new Date().getTime();

      if (now >= eventEndDate) {
        setEventStatus("ended");
        return { days: 0, hours: 0, minutes: 0, seconds: 0 };
      } else if (now >= eventStartDate) {
        setEventStatus("ongoing");
        return { days: 0, hours: 0, minutes: 0, seconds: 0 };
      }

      const difference = eventStartDate - now;
      return {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((difference % (1000 * 60)) / 1000),
      };
    };

    setTimeLeft(calculateTimeLeft());

    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const splitDigits = (num: number) => {
    return String(num)
      .padStart(2, "0")
      .split("")
      .map((digit, index) => (
        <span className="bg-default text-brand flex h-8 w-6 items-center justify-center rounded-lg text-base" key={index}>
          {digit}
        </span>
      ));
  };

  if (eventStatus === "ongoing") {
    return <p>O evento está acontecendo agora!</p>;
  }

  if (eventStatus === "ended") {
    return <p>O evento encerrou!</p>;
  }

  return (
    <div className="flex items-baseline justify-center space-x-2 rounded-lg text-white">
      <div className="flex flex-col items-center gap-1">
        <div className="flex space-x-1">{splitDigits(timeLeft.days)}</div>
        <p className="text-sm">dias</p>
      </div>
      <span>:</span>
      <div className="flex flex-col items-center gap-1">
        <div className="flex space-x-1">{splitDigits(timeLeft.hours)}</div>
        <p className="text-sm">horas</p>
      </div>
      <span>:</span>
      <div className="flex flex-col items-center gap-1">
        <div className="flex space-x-1">{splitDigits(timeLeft.minutes)}</div>
        <p className="text-sm">min.</p>
      </div>
      <span>:</span>
      <div className="flex flex-col items-center gap-1">
        <div className="flex space-x-1">{splitDigits(timeLeft.seconds)}</div>
        <p className="text-sm">seg.</p>
      </div>
    </div>
  );
}
