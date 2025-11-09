'use client';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  Zap,
  Shield,
  Smartphone,
  Globe,
  BarChart3,
  Palette,
  Code2,
  Headphones,
  Lock,
} from 'lucide-react';
import { useSmartNavigation } from '@/hooks/useSmartNavigation';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Image from 'next/image';

const DEFAULT_FEATURES = {
  badge: 'Robotic Solutions',
  mainTitle: 'Advanced Robotics Technology',
  mainTitleHighlight: 'Built for the Future',
  mainDescription:
    'Transform your operations with cutting-edge robotic solutions designed for manufacturing, logistics, and automation industries.',
  feature1Title: 'AI-Powered Automation',
  feature1Description:
    'Intelligent robots that learn and adapt to optimize workflows with machine learning algorithms.',
  feature1Badge: 'AI',
  feature1Image:
    'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?q=80&w=400&auto=format&fit=crop',
  feature2Title: 'Industrial Grade Security',
  feature2Description:
    'Military-grade encryption and secure communication protocols for industrial environments.',
  feature2Badge: 'Security',
  feature2Image:
    'https://images.unsplash.com/photo-1518709268805-4e9042af2176?q=80&w=400&auto=format&fit=crop',
  feature3Title: 'Mobile Control Interface',
  feature3Description:
    'Control and monitor your robotic fleet from anywhere with our advanced mobile application.',
  feature3Badge: 'Mobile',
  feature3Image:
    'https://images.unsplash.com/photo-1559827260-dc66d52bef19?q=80&w=400&auto=format&fit=crop',
  feature4Title: 'Multi-Robot Coordination',
  feature4Description:
    'Seamlessly coordinate multiple robots across different locations and production lines.',
  feature4Badge: 'Coordination',
  feature4Image:
    'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=400&auto=format&fit=crop',
  feature5Title: 'Real-Time Analytics',
  feature5Description:
    'Monitor performance, efficiency, and predictive maintenance with advanced analytics dashboard.',
  feature5Badge: 'Analytics',
  feature5Image:
    'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=400&auto=format&fit=crop',
  feature6Title: 'Custom Programming',
  feature6Description:
    'Program custom behaviors and workflows to match your specific operational requirements.',
  feature6Badge: 'Programming',
  feature6Image:
    'https://images.unsplash.com/photo-1518709268805-4e9042af2176?q=80&w=400&auto=format&fit=crop',
  feature7Title: 'System Integration',
  feature7Description:
    'Seamlessly integrate with existing ERP, MES, and industrial control systems.',
  feature7Badge: 'Integration',
  feature7Image:
    'https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?q=80&w=400&auto=format&fit=crop',
  feature8Title: '24/7 Technical Support',
  feature8Description:
    'Round-the-clock technical support from robotics engineers and automation specialists.',
  feature8Badge: 'Support',
  feature8Image:
    'https://images.unsplash.com/photo-1559136555-9303baea8ebd?q=80&w=400&auto=format&fit=crop',
  feature9Title: 'Data Protection',
  feature9Description:
    'Enterprise-grade data protection with encrypted storage and secure cloud backup.',
  feature9Badge: 'Privacy',
  feature9Image:
    'https://images.unsplash.com/photo-1563206767-5b18f218e8de?q=80&w=400&auto=format&fit=crop',
  ctaQuestion: 'Ready to revolutionize your operations with robotics?',
  primaryCTA: 'Start Free Consultation',
  primaryCTAHref: '/',
  secondaryCTA: 'View Demo',
  secondaryCTAHref: '/',
} as const;

type FeaturesProps = Partial<typeof DEFAULT_FEATURES>;

export default function Features(props: FeaturesProps) {
  const config = { ...DEFAULT_FEATURES, ...props };
  const navigate = useSmartNavigation();

  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  };

  const features = [
    {
      icon: Zap,
      title: config.feature1Title,
      description: config.feature1Description,
      badge: config.feature1Badge,
      image: config.feature1Image,
    },
    {
      icon: Shield,
      title: config.feature2Title,
      description: config.feature2Description,
      badge: config.feature2Badge,
      image: config.feature2Image,
    },
    {
      icon: Smartphone,
      title: config.feature3Title,
      description: config.feature3Description,
      badge: config.feature3Badge,
      image: config.feature3Image,
    },
    {
      icon: Globe,
      title: config.feature4Title,
      description: config.feature4Description,
      badge: config.feature4Badge,
      image: config.feature4Image,
    },
    {
      icon: BarChart3,
      title: config.feature5Title,
      description: config.feature5Description,
      badge: config.feature5Badge,
      image: config.feature5Image,
    },
    {
      icon: Palette,
      title: config.feature6Title,
      description: config.feature6Description,
      badge: config.feature6Badge,
      image: config.feature6Image,
    },
    {
      icon: Code2,
      title: config.feature7Title,
      description: config.feature7Description,
      badge: config.feature7Badge,
      image: config.feature7Image,
    },
    {
      icon: Headphones,
      title: config.feature8Title,
      description: config.feature8Description,
      badge: config.feature8Badge,
      image: config.feature8Image,
    },
    {
      icon: Lock,
      title: config.feature9Title,
      description: config.feature9Description,
      badge: config.feature9Badge,
      image: config.feature9Image,
    },
  ];

  return (
    <section
      id="features"
      className="py-24 bg-gradient-to-b from-background to-muted/20"
      data-editable="features"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        {/* Header */}
        <motion.div
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
        >
          <Badge variant="outline" className="mb-4 px-4 py-2">
            <span data-editable="badge">{config.badge}</span>
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            <span data-editable="mainTitle">{config.mainTitle}</span>
            <span className="block bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
              <span data-editable="mainTitleHighlight">{config.mainTitleHighlight}</span>
            </span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            <span data-editable="mainDescription">{config.mainDescription}</span>
          </p>
        </motion.div>

        {/* Features Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div key={index} variants={cardVariants}>
                <Card className="group relative overflow-hidden border-border/50 hover:border-primary/20 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5 h-full">
                  {/* Background Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

                  {/* Feature Image */}
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={feature.image}
                      alt={feature.title}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                      data-editable-src={`feature${index + 1}Image`}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                    <Badge
                      variant="secondary"
                      className="absolute top-3 right-3 text-xs bg-background/90 backdrop-blur-sm"
                    >
                      <span data-editable={`feature${index + 1}Badge`}>{feature.badge}</span>
                    </Badge>
                  </div>

                  <CardHeader className="relative">
                    <div className="flex items-center gap-4 mb-2">
                      <div className="size-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                        <Icon className="size-6 text-primary" />
                      </div>
                    </div>
                    <CardTitle className="text-xl group-hover:text-primary transition-colors duration-300">
                      <span data-editable={`feature${index + 1}Title`}>{feature.title}</span>
                    </CardTitle>
                  </CardHeader>

                  <CardContent className="relative">
                    <CardDescription className="text-base leading-relaxed">
                      <span data-editable={`feature${index + 1}Description`}>
                        {feature.description}
                      </span>
                    </CardDescription>
                  </CardContent>

                  {/* Hover Effect Border */}
                  <div className="absolute inset-0 rounded-lg border border-transparent group-hover:border-primary/20 transition-colors duration-300 pointer-events-none" />
                </Card>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <p className="text-muted-foreground mb-4">
            <span data-editable="ctaQuestion">{config.ctaQuestion}</span>
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: 'spring', stiffness: 400, damping: 17 }}
            >
              <Button
                className="px-6 py-3"
                onClick={() => navigate(config.primaryCTAHref)}
                data-editable-href="primaryCTAHref"
                data-href={config.primaryCTAHref}
              >
                <span data-editable="primaryCTA">{config.primaryCTA}</span>
              </Button>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: 'spring', stiffness: 400, damping: 17 }}
            >
              <Button
                variant="outline"
                className="px-6 py-3"
                onClick={() => navigate(config.secondaryCTAHref)}
                data-editable-href="secondaryCTAHref"
                data-href={config.secondaryCTAHref}
              >
                <span data-editable="secondaryCTA">{config.secondaryCTA}</span>
              </Button>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
