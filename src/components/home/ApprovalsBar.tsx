import { useEffect, useRef } from 'react';

const approvals = [
  { name: 'RGUHS', full: 'Rajiv Gandhi University of Health Sciences' },
  { name: 'KNC', full: 'Karnataka Nursing Council' },
  { name: 'INC', full: 'Indian Nursing Council' },
  { name: 'Govt. of Karnataka', full: 'Government of Karnataka' },
  { name: 'KAHC', full: 'Karnataka Allied Health Council' },
  { name: 'RGUHS', full: 'Rajiv Gandhi University of Health Sciences' },
  { name: 'KNC', full: 'Karnataka Nursing Council' },
  { name: 'INC', full: 'Indian Nursing Council' },
  { name: 'Govt. of Karnataka', full: 'Government of Karnataka' },
  { name: 'KAHC', full: 'Karnataka Allied Health Council' },
];

export function ApprovalsBar() {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    let animationId: number;
    let position = 0;
    const speed = 0.5;

    const animate = () => {
      position -= speed;
      if (position <= -(el.scrollWidth / 2)) {
        position = 0;
      }
      el.style.transform = `translateX(${position}px)`;
      animationId = requestAnimationFrame(animate);
    };

    animationId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationId);
  }, []);

  return (
    <section className="py-6 bg-background border-y border-border overflow-hidden">
      <div 
        ref={scrollRef}
        className="flex items-center gap-12 whitespace-nowrap"
        style={{ width: 'max-content' }}
      >
        {[...approvals, ...approvals].map((approval, index) => (
          <div 
            key={index}
            className="flex flex-col items-center px-6"
          >
            <span className="text-lg md:text-xl font-bold text-primary">{approval.name}</span>
            <span className="text-xs text-muted-foreground">{approval.full}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
