import React from 'react';
import { Dialog, Button } from '@/components/ui';

interface ShortcutsDialogProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ShortcutsDialog: React.FC<ShortcutsDialogProps> = ({ isOpen, onClose }) => {
  return (
    <Dialog isOpen={isOpen} onClose={onClose} title="Keyboard Shortcuts">
      <div className="space-y-3 font-mono text-xs text-[#222222]">
        <div className="flex justify-between border-b pb-1">
          <span className="font-bold">?</span>
          <span>Toggle this keyboard shortcuts dialog</span>
        </div>
        <div className="flex justify-between border-b pb-1">
          <span className="font-bold">Tab / Shift+Tab</span>
          <span>Navigate through buttons and sliders</span>
        </div>
        <div className="flex justify-between border-b pb-1">
          <span className="font-bold">Enter / Space</span>
          <span>Activate focused button or prime can</span>
        </div>
        <div className="flex justify-between border-b pb-1">
          <span className="font-bold">Esc</span>
          <span>Dismiss active modal or dialog</span>
        </div>
        <div className="flex justify-between pb-1">
          <span className="font-bold">Arrow Keys</span>
          <span>Adjust slider values or carousel slides</span>
        </div>
        <Button onClick={onClose} variant="brutal" size="sm" isFullWidth className="mt-4">
          Close shortcuts
        </Button>
      </div>
    </Dialog>
  );
};
