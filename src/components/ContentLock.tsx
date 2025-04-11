
import React, { useState, useContext, useEffect } from 'react';
import { Lock, LockOpen } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { GlobalLockContext } from '@/App';
import { useToast } from '@/components/ui/use-toast';

interface ContentLockProps {
  id: string;
  initialState?: boolean;
}

export function ContentLock({ id, initialState = true }: ContentLockProps) {
  const [isLocked, setIsLocked] = useState(initialState);
  const globalContext = useContext(GlobalLockContext);
  const { toast } = useToast();
  
  // Sync with global lock state
  useEffect(() => {
    if (globalContext.isLocked) {
      setIsLocked(true);
    }
  }, [globalContext.isLocked]);
  
  const handleToggleLock = () => {
    if (globalContext.isLocked) {
      toast({
        title: "Content is locked",
        description: "Content cannot be modified without specific instruction.",
        variant: "destructive"
      });
      return;
    }
    
    setIsLocked(!isLocked);
  };

  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button 
            variant="ghost" 
            size="icon" 
            className="h-5 w-5 p-0 ml-2 text-muted-foreground hover:text-primary"
            onClick={handleToggleLock}
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
