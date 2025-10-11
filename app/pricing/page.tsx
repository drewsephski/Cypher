import { PricingWithChart } from '@/components/ui/pricing-with-chart';
import { cn } from '@/lib/utils';

export default function PricingPage() {
  return (
    <div className="relative flex min-h-screen w-full items-center justify-center bg-background px-4 py-10">
      <PricingWithChart />
      
      {/* Dots background */}
      <div
        aria-hidden="true"
        className={cn(
          'absolute inset-0 -z-10 size-full',
          'bg-[radial-gradient(color-mix(in_oklab,var(--color-foreground/.1)30%,transparent)_2px,transparent_2px)]',
          'bg-[size:12px_12px]',
        )}
      />
    </div>
  );
}
