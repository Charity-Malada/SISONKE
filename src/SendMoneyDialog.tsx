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
  DialogClose,
} from '@/components/ui/dialog';
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/ui/input-otp"
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { ArrowRight, Loader2, Send } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

interface SendMoneyDialogProps {
  onSuccessfulPayment: (amount: number) => void;
}

export function SendMoneyDialog({ onSuccessfulPayment }: SendMoneyDialogProps) {
  const [isOpen, setIsOpen] = React.useState(false);
  const [step, setStep] = React.useState(1);
  const [amount, setAmount] = React.useState('');
  const [phoneNumber, setPhoneNumber] = React.useState('');
  const [isProcessing, setIsProcessing] = React.useState(false);
  const { toast } = useToast();

  const handleContinue = () => {
    if (amount && phoneNumber) {
      setIsProcessing(true);
      setTimeout(() => {
        setStep(2);
        setIsProcessing(false);
      }, 1000);
    }
  };

  const handleConfirm = () => {
    setIsProcessing(true);
    setTimeout(() => {
      toast({
        title: 'Payment Successful!',
        description: `You sent R${amount} to ${phoneNumber}.`,
      });
      onSuccessfulPayment(parseFloat(amount));
      resetState();
    }, 1500);
  };
  
  const resetState = () => {
    setIsOpen(false);
    setStep(1);
    setAmount('');
    setPhoneNumber('');
    setIsProcessing(false);
  }

  return (
    <Dialog open={isOpen} onOpenChange={(open) => {
      if(!open) resetState();
      setIsOpen(open);
    }}>
      <DialogTrigger asChild>
        <Button>
          <Send className="mr-2" /> Send Money
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        {step === 1 && (
          <>
            <DialogHeader>
              <DialogTitle>Send Money</DialogTitle>
              <DialogDescription>
                Enter the recipient's phone number and the amount to send.
              </DialogDescription>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="phone" className="text-right">
                  Phone
                </Label>
                <Input
                  id="phone"
                  type="tel"
                  placeholder="e.g. 082 123 4567"
                  className="col-span-3"
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                  disabled={isProcessing}
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="amount" className="text-right">
                  Amount (R)
                </Label>
                <Input
                  id="amount"
                  type="number"
                  placeholder="e.g. 150.00"
                  className="col-span-3"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                  disabled={isProcessing}
                />
              </div>
            </div>
            <DialogFooter>
              <Button onClick={handleContinue} disabled={!amount || !phoneNumber || isProcessing}>
                {isProcessing ? <Loader2 className="animate-spin" /> : 'Continue'}
                {!isProcessing && <ArrowRight className="ml-2 h-4 w-4" />}
              </Button>
            </DialogFooter>
          </>
        )}
        {step === 2 && (
          <>
            <DialogHeader>
              <DialogTitle>Confirm Payment</DialogTitle>
              <DialogDescription>
                Enter the OTP sent to your phone to confirm the payment of <span className="font-bold">R{amount}</span> to <span className="font-bold">{phoneNumber}</span>.
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
                    {isProcessing ? <Loader2 className="animate-spin" /> : 'Confirm Payment'}
                </Button>
            </DialogFooter>
          </>
        )}
      </DialogContent>
    </Dialog>
  );
}
