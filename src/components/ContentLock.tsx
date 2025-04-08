
import React, { useState } from 'react';
import { Lock, LockOpen } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';

interface ContentLockProps {
  id: string;
  initialState?: boolean;
}

export function ContentLock({ id, initialState = true }: ContentLockProps) {
  const [isLocked, setIsLocked] = useState(initialState);

  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button 
            variant="ghost" 
            size="icon" 
            className="h-5 w-5 p-0 ml-2 text-muted-foreground hover:text-primary"
            onClick={() => setIsLocked(!isLocked)}
            data-locked={isLocked}
            data-content-id={id}
          >
            {isLocked ? (
              <Lock className="h-3.5 w-3.5" />
            ) : (
              <LockOpen className="h-3.5 w-3.5" />
            )}
          </Button>
        </TooltipTrigger>
        <TooltipContent side="right">
          <p>{isLocked ? 'Content is locked' : 'Content is unlocked'}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}
