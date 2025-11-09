'use client';

import { Button } from '@/components/ui/button';
import { ArrowRight, CheckCircle2, Play } from 'lucide-react';
import Image from 'next/image';
import { useState } from 'react';
import { useSmartNavigation } from '@/hooks/useSmartNavigation';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const DEFAULT_HERO = {
  badge: 'New: AI-Powered Robotics',
  title: 'Build the future with',
  titleHighlight: 'Advanced Robotics',
  description:
    'Revolutionary robotic solutions for manufacturing, logistics, and automation. Transform your operations with cutting-edge AI-powered robotics technology.',
  features: [
    'AI-Powered Automation',
    'Industrial Grade Design',
    'Real-time Monitoring',
    'Seamless Integration',
  ],
  primaryCTA: 'Start Building',
  secondaryCTA: 'Watch Demo',
  primaryCTAHref: '/signup',
  secondaryCTAHref: '#demo',
  imageUrl:
    'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?q=80&w=1920&auto=format&fit=crop',
  imageAlt: 'Advanced robotic arm in action',
  statsLabel1: 'Efficiency',
  statsValue1: '300% Increase',
  statsLabel2: 'Precision',
  statsValue2: '99.9% Accuracy',
} as const;

type HeroProps = Partial<typeof DEFAULT_HERO>;

export default function Hero(props: HeroProps) {
  const config = { ...DEFAULT_HERO, ...props };
  const navigate = useSmartNavigation();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const badgeVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  };

  const titleVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: 'easeOut',
      },
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: 'easeOut',
      },
    },
  };

  const floatingAnimation = {
    y: [0, -10, 0],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: 'easeInOut',
    },
  };

  return (
    <section id="hero" className="relative overflow-hidden bg-background" data-editable="hero">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/10" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,0,0,0.04)_1px,transparent_1px)] [background-size:24px_24px] opacity-50" />

      <div className="container relative mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        <motion.div
          className="grid items-center gap-12 py-20 sm:py-24 lg:grid-cols-2 lg:gap-20 lg:py-32"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          <div className="flex flex-col justify-center">
            <motion.div
              className="mb-4 inline-flex w-fit items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-3 py-1.5 text-sm font-medium text-primary"
              variants={badgeVariants}
            >
              <span className="inline-block h-2 w-2 rounded-full bg-primary"></span>
              <span data-editable="badge">{config.badge}</span>
            </motion.div>

            <motion.h1
              className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl"
              variants={titleVariants}
            >
              <span data-editable="title">{config.title}</span>
              <motion.span
                className="block bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent"
                data-editable="titleHighlight"
                variants={titleVariants}
                transition={{ delay: 0.2 }}
              >
                {config.titleHighlight}
              </motion.span>
            </motion.h1>

            <motion.p
              className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground"
              data-editable="description"
              variants={titleVariants}
              transition={{ delay: 0.4 }}
            >
              {config.description}
            </motion.p>

            <motion.ul
              className="mt-6 grid gap-3 text-sm text-muted-foreground sm:grid-cols-2"
              variants={titleVariants}
              transition={{ delay: 0.6 }}
            >
              {config.features.map((item, idx) => (
                <li key={idx} className="flex items-center gap-2">
                  <CheckCircle2 className="size-4 text-primary" />
                  <span data-editable={`features[${idx}]`}>{item}</span>
                </li>
              ))}
            </motion.ul>

            <motion.div
              className="mt-8 flex flex-col gap-4 sm:flex-row"
              variants={titleVariants}
              transition={{ delay: 0.8 }}
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: 'spring', stiffness: 400, damping: 17 }}
              >
                <Button
                  size="lg"
                  className="group px-7 text-base"
                  onClick={() => navigate(config.primaryCTAHref)}
                  data-editable-href="primaryCTAHref"
                  data-href={config.primaryCTAHref}
                >
                  <span data-editable="primaryCTA">{config.primaryCTA}</span>
                  <ArrowRight className="ml-2 size-5 transition-transform group-hover:translate-x-1" />
                </Button>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: 'spring', stiffness: 400, damping: 17 }}
              >
                <Button
                  size="lg"
                  variant="outline"
                  className="text-base"
                  onClick={() => navigate(config.secondaryCTAHref)}
                  data-editable-href="secondaryCTAHref"
                  data-href={config.secondaryCTAHref}
                >
                  <Play className="mr-2 size-5" />
                  <span data-editable="secondaryCTA">{config.secondaryCTA}</span>
                </Button>
              </motion.div>
            </motion.div>
          </div>

          <motion.div className="relative" variants={imageVariants}>
            <motion.div
              className="relative overflow-hidden rounded-2xl border bg-card shadow-2xl"
              animate={floatingAnimation}
            >
              <div className="aspect-[16/10] relative">
                <Image
                  src={config.imageUrl}
                  alt={config.imageAlt}
                  fill
                  className="object-cover"
                  priority
                  data-editable-src="imageUrl"
                />
              </div>
              <div className="absolute left-4 top-4 rounded-full bg-background/80 px-3 py-1 text-xs font-medium shadow">
                <span data-editable="imageAlt">{config.imageAlt}</span>
              </div>
            </motion.div>

            <motion.div
              className="absolute -right-6 -top-6 hidden w-36 rounded-xl border bg-background/90 p-3 shadow-xl sm:block"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
              transition={{ delay: 1.2, duration: 0.5 }}
            >
              <p className="text-xs text-muted-foreground" data-editable="statsLabel1">
                {config.statsLabel1}
              </p>
              <p className="text-sm">
                <span className="font-semibold" data-editable="statsValue1">
                  {config.statsValue1}
                </span>
              </p>
            </motion.div>
            <motion.div
              className="absolute -left-6 -bottom-6 hidden w-36 rounded-xl border bg-background/90 p-3 shadow-xl sm:block"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
              transition={{ delay: 1.4, duration: 0.5 }}
            >
              <p className="text-xs text-muted-foreground" data-editable="statsLabel2">
                {config.statsLabel2}
              </p>
              <p className="text-sm">
                <span className="font-semibold" data-editable="statsValue2">
                  {config.statsValue2}
                </span>
              </p>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
