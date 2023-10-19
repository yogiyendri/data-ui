"use client";
import * as React from "react";
import CountUp from "react-countup";

interface CounterProps {
  number: number;
}

const Counter: React.FC<CounterProps> = ({ number }) => {
  return (
    <h2 className="text-5xl font-bold">
      <CountUp end={number} duration={10} />
    </h2>
  );
};

export default Counter;
