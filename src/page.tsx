
'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import * as React from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Loader2 } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

export default function SignupPage() {
    const router = useRouter();
    const { toast } = useToast();
    const [isProcessing, setIsProcessing] = React.useState(false);

    const handleSignup = (event: React.FormEvent) => {
        event.preventDefault();
        setIsProcessing(true);
        // Simulate API call
        setTimeout(() => {
            toast({
                title: 'Account Created!',
                description: "Welcome to Sisonke! Please log in.",
            });
            router.push('/login');
            setIsProcessing(false);
        }, 1500);
    };

    return (
        <Card className="w-full max-w-md">
            <CardHeader>
            <CardTitle className="text-center text-2xl">Create an Account</CardTitle>
            <CardDescription className="text-center">
                Get started with Sisonke today.
            </CardDescription>
            </CardHeader>
            <form onSubmit={handleSignup}>
                <CardContent className="space-y-4">
                    <div className="space-y-2">
                        <Label htmlFor="name">Full Name</Label>
                        <Input id="name" type="text" placeholder="Your Name" required disabled={isProcessing} />
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="phone">Phone Number</Label>
                        <Input id="phone" type="tel" placeholder="e.g. 082 123 4567" required disabled={isProcessing} />
                    </div>
                     <div className="space-y-2">
                        <Label htmlFor="password">Password</Label>
                        <Input id="password" type="password" required disabled={isProcessing} />
                    </div>
                </CardContent>
                <CardFooter className="flex flex-col gap-4">
                    <Button type="submit" className="w-full" disabled={isProcessing}>
                        {isProcessing ? <Loader2 className="animate-spin" /> : 'Create Account'}
                    </Button>
                    <p className="text-sm text-center text-muted-foreground">
                        Already have an account?{' '}
                        <Link href="/login" className="font-semibold text-primary hover:underline">
                            Log In
                        </Link>
                    </p>
                </CardFooter>
            </form>
        </Card>
    );
}
