import { motion } from 'motion/react';
import { useState } from 'react';
import { Card, CardContent, CardFooter } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { ExternalLink, Github, Filter } from 'lucide-react';

export function ProjectsSection() {
  const [activeFilter, setActiveFilter] = useState('all');

  const projects = [
    {
      id: 1,
      name: 'EcoShop Platform',
      category: 'fullstack',
      role: 'Full Stack Developer',
      description: 'A sustainable e-commerce platform built with React and Node.js, featuring real-time inventory management and carbon footprint tracking for eco-conscious shoppers.',
      image: 'https://images.unsplash.com/photo-1577333715735-8fcb0359d906?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlY29tbWVyY2UlMjB3ZWJzaXRlJTIwbW9ja3VwfGVufDF8fHx8MTc1Njc5MTQzM3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      technologies: ['React', 'Node.js', 'PostgreSQL', 'Tailwind CSS', 'Stripe'],
      githubUrl: '#',
      liveUrl: '#',
    },
    {
      id: 2,
      name: 'GreenTech Analytics Dashboard',
      category: 'frontend',
      role: 'Frontend Developer',
      description: 'A comprehensive analytics dashboard for environmental data visualization, built with React and D3.js. Features real-time charts and interactive data exploration.',
      image: 'https://images.unsplash.com/photo-1575388902449-6bca946ad549?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXNoYm9hcmQlMjBpbnRlcmZhY2UlMjBkZXNpZ258ZW58MXx8fHwxNzU2ODQ0MTM3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      technologies: ['React', 'TypeScript', 'D3.js', 'Recharts', 'Material-UI'],
      githubUrl: '#',
      liveUrl: '#',
    },
    {
      id: 3,
      name: 'Climate Action Mobile App',
      category: 'mobile',
      role: 'Mobile Developer',
      description: 'A React Native app that helps users track their carbon footprint and discover eco-friendly alternatives. Features gamification and social sharing.',
      image: 'https://images.unsplash.com/photo-1618761714954-0b8cd0026356?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBhcHAlMjBpbnRlcmZhY2UlMjBkZXNpZ258ZW58MXx8fHwxNzU2ODU0Mjg5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      technologies: ['React Native', 'Expo', 'MongoDB', 'Express', 'JWT'],
      githubUrl: '#',
      liveUrl: '#',
    },
    {
      id: 4,
      name: 'Solar Panel Calculator',
      category: 'fullstack',
      role: 'Full Stack Developer',
      description: 'A web application that calculates solar panel requirements and savings based on location and energy consumption. Includes 3D visualization.',
      image: 'https://images.unsplash.com/photo-1565687981296-535f09db714e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjB3ZWIlMjBkZXZlbG9wbWVudCUyMGNvZGluZ3xlbnwxfHx8fDE3NTY4MTA2ODN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      technologies: ['Next.js', 'Three.js', 'Python', 'FastAPI', 'AWS'],
      githubUrl: '#',
      liveUrl: '#',
    },
    {
      id: 5,
      name: 'Smart Home Dashboard',
      category: 'frontend',
      role: 'Frontend Developer',
      description: 'An IoT dashboard for managing smart home devices with energy monitoring and automation features. Built with modern React patterns.',
      image: 'https://images.unsplash.com/photo-1575388902449-6bca946ad549?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXNoYm9hcmQlMjBpbnRlcmZhY2UlMjBkZXNpZ258ZW58MXx8fHwxNzU2ODQ0MTM3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      technologies: ['React', 'Redux', 'WebSocket', 'Chart.js', 'Styled Components'],
      githubUrl: '#',
      liveUrl: '#',
    },
    {
      id: 6,
      name: 'Green Events Platform',
      category: 'fullstack',
      role: 'Lead Developer',
      description: 'An event management platform focused on sustainable events with carbon offset calculations and eco-friendly vendor recommendations.',
      image: 'https://images.unsplash.com/photo-1577333715735-8fcb0359d906?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlY29tbWVyY2UlMjB3ZWJzaXRlJTIwbW9ja3VwfGVufDF8fHx8MTc1Njc5MTQzM3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      technologies: ['Vue.js', 'Laravel', 'MySQL', 'Redis', 'Docker'],
      githubUrl: '#',
      liveUrl: '#',
    },
  ];

  const filters = [
    { id: 'all', label: 'All Projects' },
    { id: 'fullstack', label: 'Full Stack' },
    { id: 'frontend', label: 'Frontend' },
    { id: 'mobile', label: 'Mobile' },
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        staggerChildren: 0.1,
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

  const cardVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: { duration: 0.5 },
    },
    exit: {
      scale: 0.8,
      opacity: 0,
      transition: { duration: 0.3 },
    },
  };

  return (
    <section className="min-h-screen py-20 px-6 bg-gradient-to-br from-background to-muted/20">
      <motion.div
        className="max-w-7xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div variants={itemVariants} className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-primary mb-4">Projects</h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-6" />
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A showcase of my recent work, featuring web applications, mobile apps, and full-stack solutions
          </p>
        </motion.div>

        {/* Filter buttons */}
        <motion.div variants={itemVariants} className="flex flex-wrap justify-center gap-4 mb-12">
          {filters.map((filter) => (
            <Button
              key={filter.id}
              variant={activeFilter === filter.id ? 'default' : 'outline'}
              onClick={() => setActiveFilter(filter.id)}
              className="px-6 py-2"
            >
              <Filter className="w-4 h-4 mr-2" />
              {filter.label}
            </Button>
          ))}
        </motion.div>

        {/* Projects grid */}
        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          layout
        >
          {filteredProjects.map((project) => (
            <motion.div
              key={project.id}
              variants={cardVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              layout
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
            >
              <Card className="h-full overflow-hidden group cursor-pointer">
                <div className="relative overflow-hidden">
                  <ImageWithFallback
                    src={project.image}
                    alt={project.name}
                    className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="flex gap-4">
                      <Button size="sm" variant="secondary" asChild>
                        <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                          <Github className="w-4 h-4 mr-2" />
                          GitHub
                        </a>
                      </Button>
                      <Button size="sm" asChild>
                        <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="w-4 h-4 mr-2" />
                          Live Demo
                        </a>
                      </Button>
                    </div>
                  </div>
                </div>
                
                <CardContent className="p-6">
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="text-xl font-bold text-primary group-hover:text-primary/80 transition-colors">
                      {project.name}
                    </h3>
                    <Badge variant="outline" className="text-xs">
                      {project.role}
                    </Badge>
                  </div>
                  
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4 line-clamp-3">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <Badge key={tech} variant="secondary" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
                
                <CardFooter className="p-6 pt-0">
                  <div className="flex gap-2 w-full">
                    <Button variant="outline" size="sm" className="flex-1" asChild>
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                        <Github className="w-4 h-4 mr-2" />
                        GitHub
                      </a>
                    </Button>
                    <Button size="sm" className="flex-1" asChild>
                      <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Live Demo
                      </a>
                    </Button>
                  </div>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}