"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

interface MetricProps {
  label: string;
  value: string;
  suffix: string;
}

export default function Metrics({ metrics }: { metrics: MetricProps[] }) {
  return (
    <section className="bg-blue-500 py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 divide-x divide-blue-400">
          {metrics.map((metric, index) => (
            <MetricCard key={index} metric={metric} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

function MetricCard({ metric, index }: { metric: MetricProps; index: number }) {
  const [hasMounted, setHasMounted] = useState(false);
  
  useEffect(() => {
    setHasMounted(true);
  }, []);

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="text-center px-4"
    >
      <div className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-2">
        {hasMounted ? (
          <span>{metric.value}<span className="text-blue-200">{metric.suffix}</span></span>
        ) : (
          <span>0<span className="text-blue-200">{metric.suffix}</span></span>
        )}
      </div>
      <p className="text-blue-100 font-semibold text-sm md:text-base uppercase tracking-widest">
        {metric.label}
      </p>
    </motion.div>
  );
}
