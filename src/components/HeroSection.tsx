import { motion } from 'motion/react';
import { Button } from './ui/button';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface HeroSectionProps {
  onNavigate: (page: string) => void;
}

export function HeroSection({ onNavigate }: HeroSectionProps) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6 },
    },
  };

  const floatingAnimation = {
    y: [-10, 10, -10],
    transition: {
      duration: 6,
      repeat: Infinity,
      ease: "easeInOut",
    },
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-background via-background to-secondary/20">
      {/* Background tech elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-32 h-32 border-2 border-primary rounded-full" />
        <div className="absolute top-40 right-32 w-16 h-16 border border-primary rotate-45" />
        <div className="absolute bottom-32 left-40 w-24 h-24 border border-primary" />
        <div className="absolute bottom-20 right-20 w-20 h-20 border-2 border-primary rounded-full" />
      </div>

      <motion.div
        className="max-w-6xl mx-auto px-6 py-20 flex flex-col lg:flex-row items-center gap-12"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Text content */}
        <div className="flex-1 text-center lg:text-left">
          <motion.div variants={itemVariants} className="mb-6">
            <h1 className="text-5xl lg:text-7xl font-bold text-primary mb-4">
              Alloys
            </h1>
            <div className="w-24 h-1 bg-primary mx-auto lg:mx-0 mb-4" />
          </motion.div>

          <motion.p
            variants={itemVariants}
            className="text-xl lg:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto lg:mx-0"
          >
            Web Developer & Designer
          </motion.p>

          <motion.p
            variants={itemVariants}
            className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto lg:mx-0 leading-relaxed"
          >
            Crafting beautiful, functional, and user-centered digital experiences 
            with modern technologies and clean design principles.
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
          >
            <Button
              size="lg"
              className="px-8 py-6 text-lg"
              onClick={() => {
                // Simulate CV download
                const link = document.createElement('a');
                link.href = '#';
                link.download = 'Alloys_CV.pdf';
                link.click();
              }}
            >
              Download CV
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="px-8 py-6 text-lg"
              onClick={() => onNavigate('projects')}
            >
              View Projects
            </Button>
          </motion.div>
        </div>

        {/* Hero image with floating animation */}
        <motion.div
          className="flex-1 max-w-lg"
          variants={itemVariants}
          animate={floatingAnimation}
        >
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-2xl transform rotate-6 scale-105" />
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1719400471588-575b23e27bd7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBkZXZlbG9wZXIlMjB3b3Jrc3BhY2UlMjBzZXR1cHxlbnwxfHx8fDE3NTY4NDE3Mzh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Professional developer workspace"
              className="relative z-10 w-full h-auto rounded-2xl shadow-2xl"
            />
          </div>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-6 h-10 border-2 border-muted-foreground rounded-full flex justify-center">
          <div className="w-1 h-3 bg-muted-foreground rounded-full mt-2 animate-pulse" />
        </div>
      </motion.div>
    </section>
  );
}