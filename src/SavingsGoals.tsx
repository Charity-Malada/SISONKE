import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Button } from '@/components/ui/button';
import { savingsGoals } from '@/lib/data';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import Link from 'next/link';
import { ArrowRight, PlusCircle } from 'lucide-react';

export function SavingsGoals() {
  return (
    <Card className="h-full flex flex-col">
      <CardHeader>
        <div className="flex items-center justify-between">
            <div>
                <CardTitle>Savings Goals</CardTitle>
                <CardDescription>Your progress towards your goals.</CardDescription>
            </div>
            <Button variant="ghost" size="icon">
                <PlusCircle className="h-5 w-5" />
            </Button>
        </div>
      </CardHeader>
      <CardContent className="flex-1">
        <div className="space-y-6">
          {savingsGoals.slice(0, 2).map((goal) => {
            const progress = (goal.currentAmount / goal.targetAmount) * 100;
            const image = PlaceHolderImages.find(img => img.id === goal.imageId);
            
            return (
              <div key={goal.id} className="flex items-center gap-4">
                {image && (
                  <Image
                    src={image.imageUrl}
                    alt={image.description}
                    data-ai-hint={image.imageHint}
                    width={80}
                    height={80}
                    className="rounded-lg object-cover aspect-square"
                  />
                )}
                <div className="flex-1 space-y-1">
                  <div className="flex justify-between items-baseline">
                    <p className="font-medium">{goal.name}</p>
                    <p className="text-sm text-muted-foreground">{Math.round(progress)}%</p>
                  </div>
                  <Progress value={progress} className="h-2" />
                  <p className="text-xs text-muted-foreground">
                    R{goal.currentAmount.toLocaleString()} / R{goal.targetAmount.toLocaleString()}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </CardContent>
      <CardFooter>
          <Button variant="outline" className="w-full" asChild>
              <Link href="/savings">View All Goals <ArrowRight className="ml-2 h-4 w-4" /></Link>
          </Button>
      </CardFooter>
    </Card>
  );
}
