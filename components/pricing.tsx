import React from 'react';
import BounceInText from './texts/bounce-in-text';
import { Dot } from 'lucide-react';
import PingButton from './buttons/ping-button';
import StackbitsLogo from './ui/stackbits-logo';
import { cn } from '@/lib/utils';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';

const pricingPlans = [
  {
    title: 'Open Source',
    price: '$0',
    features: [
      'Comprehensive library of animated components',
      'Production-ready React/Next.js code with TypeScript',
      'Community support and documentation',
      'Regular updates and new components',
      'MIT License for commercial use'
    ],
    cta: 'Browse Library',
    href: '/docs/components'
  },
  {
    title: 'Custom Development',
    price: '$50',
    unit: '/component',
    features: [
      'All Open Source features included',
      'Personalized component development',
      '30-day unlimited revision period',
      '100% satisfaction guarantee',
      'Multi-framework support (React, Next.js, TypeScript, JavaScript, HTML, CSS, Tailwind)',
      'Priority support response',
      'Direct communication channel'
    ],
    cta: 'Get in Touch',
    special: true,
    href: 'https://x.com/stackbitss'
  },
  {
    title: 'Enterprise Solutions',
    price: 'Custom Quote',
    features: [
      'All Custom Development features',
      'Bulk component development',
      'Dedicated project management',
      'Ongoing maintenance and support'
    ],
    cta: 'Contact Us',
    href: 'https://x.com/stackbitss'
  }
];

const Pricing = () => {
  const router = useRouter();

  return (
    <div className="w-full flex flex-col items-center justify-center px-4 sm:px-6 md:px-8 mt-4 gap-6">
      <BounceInText
        className="text-white text-2xl sm:text-4xl md:text-7xl font-semibold mt-6 sm:mt-8"
        text="Choose Your Plan"
        letterClassName="tracking-tight"
      />
      <div className="max-w-6xl grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 w-full px-6">
        {pricingPlans.map((plan, index) => {
          return (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: plan.special ? 0.1 : 0.5 }}
              key={`pricing-plan-${index}`}
              className="w-full border border-white/10 rounded-3xl flex flex-col justify-between p-4 lg:p-5 relative overflow-hidden"
            >
              {plan.special ? (
                <>
                  <span
                    className={cn(
                      'h-full w-full bg-gradient-to-b from-orange-400 to-white flex items-center justify-center overflow-hidden absolute top-0 left-0'
                    )}
                  />
                  <span
                    style={{
                      background:
                        'radial-gradient(circle at bottom right, #0000ff57 40%, transparent)'
                    }}
                    className={cn(
                      'h-full w-full flex items-center justify-center overflow-hidden absolute top-0 left-0'
                    )}
                  />
                </>
              ) : (
                <>
                  <span
                    style={{
                      background:
                        'radial-gradient(circle at bottom right, #A7A5FC21 40%, transparent)'
                    }}
                    className={cn(
                      'h-full w-full flex items-center justify-center overflow-hidden absolute top-0 left-0'
                    )}
                  />
                </>
              )}
              <div className="flex flex-col gap-2 z-10">
                <p className={cn(plan.special ? 'text-black' : 'text-white/80')}>{plan.title}</p>
                <p
                  className={cn(
                    plan.special ? 'text-black' : 'text-white',
                    'text-3xl font-semibold'
                  )}
                >
                  {plan.price}
                  {plan.unit}
                </p>
                <div className="flex flex-col gap-2 w-full overflow-hidden mt-6">
                  {plan.features.map((feature, index) => {
                    return (
                      <p
                        key={`pricing-plan-feature-${index}`}
                        className={cn(
                          'text-sm flex items-start font-medium',
                          plan.special ? 'text-black' : 'text-white/90'
                        )}
                      >
                        <Dot size={24} strokeWidth={4} className="shrink-0 pb-1" /> {feature}
                      </p>
                    );
                  })}
                </div>
              </div>
              <div className="mt-20 w-full z-10">
                <PingButton
                  onClick={() => router.push(plan.href)}
                  ping={<StackbitsLogo className="h-full w-full" />}
                  className={cn('w-full', plan.special && 'bg-white hover:bg-zinc-100 text-black')}
                >
                  {plan.cta}
                </PingButton>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default Pricing;
