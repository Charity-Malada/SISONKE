
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
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/ui/input-otp"
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { ArrowRight, DollarSign, Loader2 } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';

interface AddMoneyDialogProps {
  onAddMoney: (amount: number, method: string) => void;
  userName: string;
  buttonLabel?: string;
}

export function AddMoneyDialog({ onAddMoney, userName, buttonLabel = "Add Money" }: AddMoneyDialogProps) {
  const [isOpen, setIsOpen] = React.useState(false);
  const [step, setStep] = React.useState(1);
  const [amount, setAmount] = React.useState('');
  const [method, setMethod] = React.useState('Voucher');
  const [isProcessing, setIsProcessing] = React.useState(false);
  const { toast } = useToast();

  const handleContinue = () => {
    if (amount) {
        setIsProcessing(true);
        setTimeout(() => {
            setStep(2);
            setIsProcessing(false);
        }, 500);
    }
  }

  const handleConfirm = () => {
    setIsProcessing(true);
    setTimeout(() => {
      toast({
        title: 'Top-up Successful!',
        description: `You added R${amount} to the wallet.`,
      });
      onAddMoney(parseFloat(amount), method);
      resetState();
    }, 1000);
  };
  
  const resetState = () => {
    setIsOpen(false);
    setStep(1);
    setAmount('');
    setMethod('Voucher');
    setIsProcessing(false);
  }

  return (
    <Dialog open={isOpen} onOpenChange={(open) => {
      if(!open) resetState();
      setIsOpen(open);
    }}>
      <DialogTrigger asChild>
        <Button>
          <DollarSign className="mr-2" /> {buttonLabel}
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
          {step === 1 && (
            <>
                <DialogHeader>
                <DialogTitle>Add Money</DialogTitle>
                <DialogDescription>
                    Choose a top-up method and enter the amount.
                </DialogDescription>
                </DialogHeader>
                <div className="grid gap-4 py-4">
                <div className="grid grid-cols-4 items-center gap-4">
                    <Label htmlFor="amount" className="text-right">
                    Amount (R)
                    </Label>
                    <Input
                    id="amount"
                    type="number"
                    placeholder="e.g. 100.00"
                    className="col-span-3"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                    disabled={isProcessing}
                    />
                </div>
                <div className="grid grid-cols-4 items-start gap-4">
                    <Label className="text-right pt-2">
                    Method
                    </Label>
                    <RadioGroup 
                        defaultValue="Voucher" 
                        className="col-span-3"
                        onValueChange={(value) => setMethod(value)}
                        disabled={isProcessing}
                    >
                        <div className="flex items-center space-x-2">
                            <RadioGroupItem value="Voucher" id="r1" />
                            <Label htmlFor="r1">Airtime/Data Voucher</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                            <RadioGroupItem value="Kiosk" id="r2" />
                            <Label htmlFor="r2">Community Kiosk</Label>
                        </div>
                    </RadioGroup>
                </div>
                </div>
                <DialogFooter>
                    <Button onClick={handleContinue} disabled={!amount || isProcessing}>
                        {isProcessing ? <Loader2 className="animate-spin" /> : 'Continue'}
                        {!isProcessing && <ArrowRight className="ml-2 h-4 w-4" />}
                    </Button>
                </DialogFooter>
            </>
          )}
          {step === 2 && (
            <>
                <DialogHeader>
                <DialogTitle>Confirm Top-up</DialogTitle>
                <DialogDescription>
                    Enter the code from your {method} to confirm the top-up of <span className="font-bold">R{amount}</span>.
                </DialogDescription>
                </DialogHeader>
                <div className="flex flex-col items-center gap-4 py-4">
                    <InputOTP maxLength={6}>
                    <InputOTPGroup>
                        <InputOTPSlot index={0} />
                        <InputOTPSlot index={1} />
                        <InputOTPSlot index={2} />
                        <InputOTPSlot index={3} />
                        <InputOTPSlot index={4} />
                        <InputOTPSlot index={5} />
                    </InputOTPGroup>
                    </InputOTP>
                </div>
                <DialogFooter>
                    <Button variant="outline" onClick={() => setStep(1)} disabled={isProcessing}>Back</Button>
                    <Button onClick={handleConfirm} disabled={isProcessing}>
                        {isProcessing ? <Loader2 className="animate-spin" /> : 'Confirm Top-up'}
                    </Button>
                </DialogFooter>
            </>
          )}
      </DialogContent>
    </Dialog>
  );
}
