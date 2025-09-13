
'use client';

import * as React from 'react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Loader2, UserPlus } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

interface AddChildDialogProps {
  onAddChild: (name: string) => void;
}

export function AddChildDialog({ onAddChild }: AddChildDialogProps) {
  const [isOpen, setIsOpen] = React.useState(false);
  const [name, setName] = React.useState('');
  const [isProcessing, setIsProcessing] = React.useState(false);
  const { toast } = useToast();

  const handleConfirm = () => {
    if (!name) return;
    setIsProcessing(true);
    setTimeout(() => {
      toast({
        title: 'Child Added!',
        description: `You are now monitoring ${name}'s wallet.`,
      });
      onAddChild(name);
      resetState();
    }, 1000);
  };
  
  const resetState = () => {
    setIsOpen(false);
    setName('');
    setIsProcessing(false);
  }

  return (
    <Dialog open={isOpen} onOpenChange={(open) => {
      if(!open) resetState();
      setIsOpen(open);
    }}>
      <DialogTrigger asChild>
        <Button variant="outline">
          <UserPlus className="mr-2" /> Add Child
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
          <>
              <DialogHeader>
              <DialogTitle>Add a Child</DialogTitle>
              <DialogDescription>
                  Enter the name of the child you want to start monitoring.
              </DialogDescription>
              </DialogHeader>
              <div className="grid gap-4 py-4">
              <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="name" className="text-right">
                  Name
                  </Label>
                  <Input
                  id="name"
                  placeholder="e.g. Sipho"
                  className="col-span-3"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  disabled={isProcessing}
                  />
              </div>
              </div>
              <DialogFooter>
                  <Button onClick={handleConfirm} disabled={!name || isProcessing}>
                      {isProcessing ? <Loader2 className="animate-spin" /> : 'Add and Monitor'}
                  </Button>
              </DialogFooter>
          </>
      </DialogContent>
    </Dialog>
  );
}
