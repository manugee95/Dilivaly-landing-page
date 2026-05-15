import { useEffect, useRef, useState } from 'react';
import { motion } from 'motion/react';

interface StatProps {
  value: string;
  label: string;
  delay: number;
}

function StatItem({ value, label, delay }: StatProps) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  return (
    <motion.div
      ref={ref}
      className="flex flex-col items-center justify-center py-8 px-6"
      initial={{ opacity: 0, y: 20 }}
      animate={isVisible ? { opacity: 1, y: 0 } : {}}
      transition={{ delay, duration: 0.6 }}
    >
      <div className="font-display text-4xl md:text-5xl font-bold text-[#00C805] mb-2">{value}</div>
      <div className="font-body text-white/65 text-sm uppercase tracking-wider text-center">{label}</div>
    </motion.div>
  );
}

export function StatsBar() {
  return (
    <section className="py-16 bg-[#0D1F11]">
      <div className="max-w-[1280px] mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 divide-x-0 md:divide-x divide-y md:divide-y-0 divide-[#00C805]/20">
          <StatItem value="1,000+" label="Active Agents" delay={0.1} />
          <StatItem value="18,000+" label="Deliveries Completed" delay={0.2} />
          <StatItem value="2,500+" label="Vendors Onboarded" delay={0.3} />
          <StatItem value="₦120M+" label="Escrow Transactions" delay={0.4} />
        </div>
      </div>
    </section>
  );
}
