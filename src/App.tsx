import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Toaster } from 'sonner@2.0.3';
import { Navigation } from './components/Navigation';
import { HeroSection } from './components/HeroSection';
import { AboutSection } from './components/AboutSection';
import { SkillsSection } from './components/SkillsSection';
import { ProjectsSection } from './components/ProjectsSection';
import { ContactSection } from './components/ContactSection';

export default function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [isLoading, setIsLoading] = useState(true);

  // Simulate initial loading
  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  // Page transition variants
  const pageVariants = {
    initial: {
      opacity: 0,
      y: 20,
    },
    in: {
      opacity: 1,
      y: 0,
    },
    out: {
      opacity: 0,
      y: -20,
    },
  };

  const pageTransition = {
    type: 'tween',
    ease: 'anticipate',
    duration: 0.5,
  };

  // Render current page component
  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <HeroSection onNavigate={setCurrentPage} />;
      case 'about':
        return <AboutSection />;
      case 'skills':
        return <SkillsSection />;
      case 'projects':
        return <ProjectsSection />;
      case 'contact':
        return <ContactSection />;
      default:
        return <HeroSection onNavigate={setCurrentPage} />;
    }
  };

  // Loading screen
  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <div className="text-4xl font-bold text-primary mb-4">Alloys</div>
          <div className="text-muted-foreground mb-6">Web Developer & Designer</div>
          <motion.div
            className="w-16 h-1 bg-primary mx-auto"
            initial={{ width: 0 }}
            animate={{ width: 64 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          />
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <Navigation currentPage={currentPage} onPageChange={setCurrentPage} />

      {/* Page Content with Transitions */}
      <main className="pt-16">
        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={currentPage}
            initial="initial"
            animate="in"
            exit="out"
            variants={pageVariants}
            transition={pageTransition}
          >
            {renderPage()}
          </motion.div>
        </AnimatePresence>
      </main>

      {/* Toast Notifications */}
      <Toaster 
        position="bottom-right"
        toastOptions={{
          style: {
            background: 'hsl(var(--background))',
            border: '1px solid hsl(var(--border))',
            color: 'hsl(var(--foreground))',
          },
        }}
      />

      {/* Smooth scroll behavior */}
      <style>{`
        html {
          scroll-behavior: smooth;
        }
        
        /* Custom scrollbar */
        ::-webkit-scrollbar {
          width: 8px;
        }
        
        ::-webkit-scrollbar-track {
          background: hsl(var(--muted));
        }
        
        ::-webkit-scrollbar-thumb {
          background: hsl(var(--primary));
          border-radius: 4px;
        }
        
        ::-webkit-scrollbar-thumb:hover {
          background: hsl(var(--primary) / 0.8);
        }

        /* Prevent flash of unstyled content */
        .line-clamp-3 {
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }

        /* Focus styles for accessibility */
        button:focus-visible,
        a:focus-visible,
        input:focus-visible,
        textarea:focus-visible {
          outline: 2px solid hsl(var(--primary));
          outline-offset: 2px;
        }

        /* Ensure proper contrast ratios */
        .text-muted-foreground {
          color: hsl(var(--muted-foreground));
        }

        /* Mobile responsive adjustments */
        @media (max-width: 768px) {
          .text-5xl {
            font-size: 2.5rem;
          }
          
          .text-7xl {
            font-size: 3rem;
          }
        }

        /* Reduced motion preferences */
        @media (prefers-reduced-motion: reduce) {
          * {
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
            transition-duration: 0.01ms !important;
          }
        }
      `}</style>
    </div>
  );
}