'use client';
import { Button } from '@/components/ui/Button';
import React from 'react';

const SimulateErrorButton = () => {
  const simulateError = () => {
    throw Error('This is an intentioanl error!');
  };
  return (
    <Button
      size="lg"
      onClick={() => simulateError()}
      className="bg-error-red-700 hover:bg-error-red-900 block"
    >
      Trigger Sentry Error!
    </Button>
  );
};

export default SimulateErrorButton;
