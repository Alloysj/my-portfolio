import { motion } from "motion/react";
import { Card, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function AboutSection() {
  const achievements = [
    "Led 15+ successful web development projects",
    "Improved application performance by 40% on average",
    "Mentored junior developers and conducted code reviews",
    "Implemented accessible design standards across all projects",
    "Specialized in React ecosystem and modern JavaScript",
  ];

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

  return (
    <section className="min-h-screen py-20 px-6 bg-gradient-to-br from-background to-secondary/10">
      <motion.div
        className="max-w-6xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div
          variants={itemVariants}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-primary mb-4">
            About Me
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-6" />
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Passionate developer with a strong foundation in
            computer science and a commitment to creating
            exceptional digital experiences.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Profile image */}
          <motion.div
            variants={itemVariants}
            className="lg:order-2"
          >
            <div className="relative max-w-md mx-auto lg:max-w-full">
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-2xl"
                animate={{
                  rotate: [0, 5, 0],
                  scale: [1, 1.02, 1],
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1576558656222-ba66febe3dec?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBoZWFkc2hvdCUyMHBvcnRyYWl0fGVufDF8fHx8MTc1Njc5ODg4NHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Alloys - Professional Portrait"
                className="relative z-10 w-full h-auto rounded-2xl shadow-2xl"
              />
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            variants={itemVariants}
            className="lg:order-1 space-y-8"
          >
            <Card className="p-6">
              <CardContent className="p-0">
                <h3 className="text-2xl font-bold text-primary mb-4">
                  Background
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  I'm a Computer Science graduate from{" "}
                  <strong>Egerton University</strong> with
                  <strong>
                    {" "}
                    5 years of industry experience
                  </strong>{" "}
                  building scalable web applications and user
                  interfaces. My journey in tech has been driven
                  by a passion for problem-solving and creating
                  clean, intuitive designs that users love.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Currently working at{" "}
                  <strong>Green Tech Company</strong>, where
                  I've had the opportunity to work on
                  cutting-edge environmental technology
                  solutions, contributing to projects that make
                  a positive impact on sustainability and
                  digital transformation.
                </p>
              </CardContent>
            </Card>

            <Card className="p-6">
              <CardContent className="p-0">
                <h3 className="text-2xl font-bold text-primary mb-4">
                  Philosophy
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  I believe in writing clean, maintainable code
                  and designing with the user at the center of
                  every decision. My approach combines technical
                  expertise with creative problem-solving to
                  deliver solutions that are both functional and
                  beautiful.
                </p>
              </CardContent>
            </Card>

            <Card className="p-6">
              <CardContent className="p-0">
                <h3 className="text-2xl font-bold text-primary mb-4">
                  Key Achievements
                </h3>
                <ul className="space-y-3">
                  {achievements.map((achievement, index) => (
                    <motion.li
                      key={index}
                      className="flex items-start gap-3"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                      <span className="text-muted-foreground">
                        {achievement}
                      </span>
                    </motion.li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <div className="flex flex-wrap gap-3">
              <Badge variant="secondary" className="px-4 py-2">
                Problem Solver
              </Badge>
              <Badge variant="secondary" className="px-4 py-2">
                Clean Code Advocate
              </Badge>
              <Badge variant="secondary" className="px-4 py-2">
                UX Focused
              </Badge>
              <Badge variant="secondary" className="px-4 py-2">
                Team Player
              </Badge>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}