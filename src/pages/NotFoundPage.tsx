import React from 'react';
import { CanoMascot } from '@/components/CanoMascot';
import { Button } from '@/components/ui';

export const NotFoundPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#FFF6E5] text-[#111111] flex flex-col items-center justify-center p-6 text-center space-y-6">
      <CanoMascot pose="sleepy" size={130} />
      <div className="space-y-2">
        <h1 className="font-display text-4xl sm:text-6xl text-[#111111]">404: CAN EMPTY</h1>
        <p className="font-body text-base text-[#444444] max-w-md mx-auto">
          The wall or route you are looking for does not exist or has been repainted.
        </p>
      </div>
      <Button onClick={() => (window.location.hash = '#/')} variant="brutal" size="md">
        Return to Home Wall →
      </Button>
    </div>
  );
};
