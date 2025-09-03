import { motion, AnimatePresence } from 'motion/react';
import { useState } from 'react';
import { X, Menu } from 'lucide-react';

interface NavigationProps {
  currentPage: string;
  onPageChange: (page: string) => void;
}

export function Navigation({ currentPage, onPageChange }: NavigationProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'contact', label: 'Contact' },
  ];

  const handlePageChange = (page: string) => {
    onPageChange(page);
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <motion.div
              className="text-2xl font-bold text-primary cursor-pointer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => handlePageChange('home')}
            >
              Alloys
            </motion.div>
            
            <div className="hidden md:flex space-x-8">
              {navItems.map((item) => (
                <motion.button
                  key={item.id}
                  className={`relative px-3 py-2 transition-colors ${
                    currentPage === item.id
                      ? 'text-primary'
                      : 'text-muted-foreground hover:text-primary'
                  }`}
                  whileHover={{ y: -2 }}
                  whileTap={{ y: 0 }}
                  onClick={() => handlePageChange(item.id)}
                >
                  {item.label}
                  {currentPage === item.id && (
                    <motion.div
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary"
                      layoutId="underline"
                      initial={false}
                      transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    />
                  )}
                </motion.button>
              ))}
            </div>
            
            {/* Mobile menu button */}
            <motion.button
              className="md:hidden p-2 text-muted-foreground hover:text-primary"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              whileTap={{ scale: 0.95 }}
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </motion.button>
          </div>
        </div>
      </nav>

      {/* Mobile menu overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            <motion.div
              className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40 md:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMobileMenuOpen(false)}
            />
            <motion.div
              className="fixed top-20 right-6 bg-background border border-border rounded-lg shadow-lg z-50 md:hidden"
              initial={{ opacity: 0, scale: 0.95, y: -10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: -10 }}
              transition={{ duration: 0.2 }}
            >
              <div className="p-4 space-y-2">
                {navItems.map((item) => (
                  <motion.button
                    key={item.id}
                    className={`block w-full text-left px-4 py-3 rounded-md transition-colors ${
                      currentPage === item.id
                        ? 'bg-primary text-primary-foreground'
                        : 'text-muted-foreground hover:text-primary hover:bg-accent'
                    }`}
                    onClick={() => handlePageChange(item.id)}
                    whileHover={{ x: 4 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    {item.label}
                  </motion.button>
                ))}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}