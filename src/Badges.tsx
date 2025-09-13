'use client';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { userBadges } from "@/lib/data";
import { Trophy, Milestone, PiggyBank, TrendingUp } from "lucide-react";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";

const iconMap: { [key: string]: React.ReactNode } = {
    Trophy: <Trophy />,
    Milestone: <Milestone />,
    PiggyBank: <PiggyBank />,
    TrendingUp: <TrendingUp />,
}

export function Badges() {
    const unlockedBadges = userBadges.filter(b => b.unlocked);
    const lockedBadges = userBadges.filter(b => !b.unlocked);

  return (
    <Card>
      <CardHeader>
        <CardTitle>My Badges</CardTitle>
        <CardDescription>Achievements you've unlocked on your journey.</CardDescription>
      </CardHeader>
      <CardContent>
        <TooltipProvider>
            <div className="flex flex-wrap gap-4">
            {unlockedBadges.map(badge => (
                <Tooltip key={badge.id}>
                    <TooltipTrigger>
                        <div className={cn(
                            "flex flex-col items-center justify-center gap-2 p-3 rounded-lg w-24 h-24",
                            "bg-primary/10 border-2 border-primary text-primary"
                        )}>
                            <div className="h-8 w-8">{iconMap[badge.icon]}</div>
                            <span className="text-xs font-semibold text-center">{badge.name}</span>
                        </div>
                    </TooltipTrigger>
                    <TooltipContent>
                        <p>{badge.description}</p>
                    </TooltipContent>
                </Tooltip>
            ))}
            {lockedBadges.map(badge => (
                <Tooltip key={badge.id}>
                    <TooltipTrigger>
                        <div className={cn(
                            "flex flex-col items-center justify-center gap-2 p-3 rounded-lg w-24 h-24",
                            "bg-muted text-muted-foreground opacity-60"
                        )}>
                            <div className="h-8 w-8">{iconMap[badge.icon]}</div>
                            <span className="text-xs font-semibold text-center">{badge.name}</span>
                        </div>
                    </TooltipTrigger>
                    <TooltipContent>
                        <p>{badge.description}</p>
                    </TooltipContent>
                </Tooltip>
            ))}
            </div>
        </TooltipProvider>
      </CardContent>
    </Card>
  );
}
