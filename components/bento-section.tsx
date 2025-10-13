'use client';

import { SectionHeader } from '@/components/ui/section-header';
import FirstBentoAnimation from '@/components/first-bento-animation';
import SecondBentoAnimation from '@/components/second-bento-animation';
import { ThirdBentoAnimation } from '@/components/third-bento-animation';
export function BentoSection() {
  const bentoItems = [
    {
      id: 1,
      content: <FirstBentoAnimation />,
      title: 'Describe your component',
      description:
        'Describe the React component you need and let AI generate the perfect solution for your project.',
    },
    {
      id: 2,
      content: <SecondBentoAnimation />,
      title: 'Choose your libraries',
      description:
        'Select from popular React libraries, UI frameworks, and tools to enhance your component.',
    },
    {
      id: 3,
      content: <ThirdBentoAnimation />,
      title: 'Generate and customize',
      description:
        'Watch AI create your component with advanced reasoning and customize it to perfection.',
    },
  ];

  return (
    <section
      id="process"
      className="flex flex-col items-center justify-center w-full relative py-16"
      style={{ zIndex: 10, pointerEvents: 'auto' }}
    >
      <div className="relative w-full px-6">
        <div className="max-w-6xl mx-auto border-l border-r border-border/50 backdrop-blur-sm">
          <SectionHeader>
            <h2 className="text-3xl md:text-4xl font-medium tracking-tighter text-center text-balance pb-1 text-foreground">
              Build React Components with AI in 3 Simple Steps
            </h2>
            <p className="text-muted-foreground text-center text-balance font-medium text-foreground/80">
              Build powerful React components with AI assistance tailored to your needs.
            </p>
          </SectionHeader>

          <div className="grid grid-cols-1 md:grid-cols-3 overflow-hidden border-t border-border/50">
          {bentoItems.map((item, index) => (
            <div
              key={item.id}
              className="flex flex-col items-start justify-end min-h-[600px] md:min-h-[500px] p-0.5 relative before:absolute before:-left-0.5 before:top-0 before:z-10 before:h-screen before:w-px before:bg-border/50 before:content-[''] after:absolute after:-top-0.5 after:left-0 after:z-10 after:h-px after:w-screen after:bg-border/50 after:content-[''] group cursor-pointer max-h-[400px] hover:shadow-md hover:shadow-primary/5 transition-all duration-400 hover:scale-[1.008] backdrop-blur-sm bg-background/50 hover:bg-background/65 border border-border/30 hover:border-primary/15"
              style={{
                animationDelay: `${index * 0.2}s`,
              }}
            >
              <div className="relative flex size-full items-center justify-center h-full overflow-hidden">
                {item.content}
              </div>
              <div className="flex-1 flex-col gap-2 p-6 bg-gradient-to-b from-transparent via-background/30 to-background/60 backdrop-blur-sm">
                <h3 className="text-lg tracking-tighter font-semibold text-foreground group-hover:text-foreground transition-colors duration-300">
                  {item.title}
                </h3>
                <p className="text-muted-foreground/90 group-hover:text-muted-foreground transition-colors duration-300 leading-relaxed">{item.description}</p>
              </div>

              {/* Animated border effect */}
              <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-primary/0 via-primary/3 to-primary/0 opacity-0 group-hover:opacity-70 transition-opacity duration-300 pointer-events-none" />

              {/* Floating particles effect */}
              <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-60 transition-opacity duration-300">
                <div className="w-1.5 h-1.5 bg-primary/20 rounded-full animate-pulse" />
              </div>
            </div>
          ))}
          </div>
        </div>
      </div>
    </section>
  );
}