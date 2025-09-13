'use client';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Download, QrCode, Share2 } from 'lucide-react';

interface GenerateQrCodeProps {
  buttonLabel?: string;
}

export function GenerateQrCode({ buttonLabel = "Show My QR Code" }: GenerateQrCodeProps) {
  const qrImage = PlaceHolderImages.find(img => img.id === 'qr-code');

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant={buttonLabel === "Receive" ? "outline" : "default"}>
          <QrCode className="mr-2" /> {buttonLabel}
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Receive Payment</DialogTitle>
          <DialogDescription>
            Show this QR code to the sender to receive money.
          </DialogDescription>
        </DialogHeader>
        <div className="flex items-center justify-center p-4">
          {qrImage && (
            <Image
              src={qrImage.imageUrl}
              alt={qrImage.description}
              data-ai-hint={qrImage.imageHint}
              width={250}
              height={250}
              className="rounded-lg"
            />
          )}
        </div>
        <div className='flex gap-2'>
            <Button variant="outline" className="w-full">
                <Download className="mr-2" /> Download
            </Button>
             <Button className="w-full">
                <Share2 className="mr-2" /> Share
            </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
