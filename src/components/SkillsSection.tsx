import { motion } from 'motion/react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Progress } from './ui/progress';
import { 
  RadarChart, 
  PolarGrid, 
  PolarAngleAxis, 
  PolarRadiusAxis, 
  Radar, 
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Legend
} from 'recharts';

export function SkillsSection() {
  const frontendSkills = [
    { name: 'React/Next.js', level: 95, color: '#61dafb' },
    { name: 'TypeScript', level: 90, color: '#3178c6' },
    { name: 'HTML/CSS', level: 95, color: '#e34f26' },
    { name: 'Tailwind CSS', level: 88, color: '#06b6d4' },
    { name: 'JavaScript', level: 92, color: '#f7df1e' },
  ];

  const backendSkills = [
    { name: 'Node.js', level: 85, color: '#339933' },
    { name: 'Express.js', level: 80, color: '#000000' },
    { name: 'MongoDB', level: 75, color: '#47a248' },
    { name: 'PostgreSQL', level: 70, color: '#336791' },
    { name: 'REST APIs', level: 88, color: '#ff6b6b' },
  ];

  const toolsSkills = [
    { name: 'Git/GitHub', level: 90, color: '#f05032' },
    { name: 'VS Code', level: 95, color: '#007acc' },
    { name: 'Webpack/Vite', level: 75, color: '#8dd6f9' },
    { name: 'Docker', level: 65, color: '#2496ed' },
    { name: 'AWS', level: 70, color: '#ff9900' },
  ];

  const radarData = [
    { skill: 'Frontend', A: 95 },
    { skill: 'Backend', A: 80 },
    { skill: 'DevOps', A: 70 },
    { skill: 'Design', A: 85 },
    { skill: 'Problem Solving', A: 92 },
    { skill: 'Communication', A: 88 },
  ];

  const experienceData = [
    { name: 'Frontend Development', value: 40, fill: 'var(--chart-1)' },
    { name: 'Backend Development', value: 30, fill: 'var(--chart-2)' },
    { name: 'DevOps & Tools', value: 15, fill: 'var(--chart-3)' },
    { name: 'Design & UX', value: 15, fill: 'var(--chart-4)' },
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
    <section className="min-h-screen py-20 px-6 bg-gradient-to-br from-background to-accent/10">
      <motion.div
        className="max-w-7xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div variants={itemVariants} className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-primary mb-4">Skills & Expertise</h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-6" />
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A comprehensive overview of my technical skills, certifications, and areas of expertise
          </p>
        </motion.div>

        {/* Education and Certification Badges */}
        <motion.div variants={itemVariants} className="flex flex-wrap justify-center gap-4 mb-12">
          <Badge variant="outline" className="px-6 py-3 text-lg border-primary text-primary">
            🎓 Computer Science Graduate - Egerton University
          </Badge>
          <Badge variant="outline" className="px-6 py-3 text-lg border-chart-1 text-chart-1">
            ☁️ Certified AWS Cloud Practitioner
          </Badge>
        </motion.div>

        {/* Charts Section */}
        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          <motion.div variants={itemVariants}>
            <Card className="h-full">
              <CardHeader>
                <CardTitle className="text-center">Skill Proficiency Overview</CardTitle>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <RadarChart data={radarData}>
                    <PolarGrid />
                    <PolarAngleAxis dataKey="skill" />
                    <PolarRadiusAxis angle={90} domain={[0, 100]} />
                    <Radar
                      name="Proficiency"
                      dataKey="A"
                      stroke="hsl(var(--primary))"
                      fill="hsl(var(--primary))"
                      fillOpacity={0.3}
                    />
                  </RadarChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div variants={itemVariants}>
            <Card className="h-full">
              <CardHeader>
                <CardTitle className="text-center">Experience Distribution</CardTitle>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <PieChart>
                    <Pie
                      data={experienceData}
                      cx="50%"
                      cy="50%"
                      labelLine={false}
                      outerRadius={80}
                      fill="#8884d8"
                      dataKey="value"
                      label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                    >
                      {experienceData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.fill} />
                      ))}
                    </Pie>
                    <Tooltip />
                    <Legend />
                  </PieChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* Detailed Skills */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <motion.div variants={itemVariants}>
            <Card className="h-full">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <span className="text-2xl">⚛️</span>
                  Frontend Development
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {frontendSkills.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    className="space-y-2"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <div className="flex justify-between items-center">
                      <span className="font-medium">{skill.name}</span>
                      <span className="text-sm text-muted-foreground">{skill.level}%</span>
                    </div>
                    <Progress value={skill.level} className="h-2" />
                  </motion.div>
                ))}
              </CardContent>
            </Card>
          </motion.div>

          <motion.div variants={itemVariants}>
            <Card className="h-full">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <span className="text-2xl">🔧</span>
                  Backend Development
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {backendSkills.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    className="space-y-2"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <div className="flex justify-between items-center">
                      <span className="font-medium">{skill.name}</span>
                      <span className="text-sm text-muted-foreground">{skill.level}%</span>
                    </div>
                    <Progress value={skill.level} className="h-2" />
                  </motion.div>
                ))}
              </CardContent>
            </Card>
          </motion.div>

          <motion.div variants={itemVariants}>
            <Card className="h-full">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <span className="text-2xl">🛠️</span>
                  Tools & DevOps
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {toolsSkills.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    className="space-y-2"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <div className="flex justify-between items-center">
                      <span className="font-medium">{skill.name}</span>
                      <span className="text-sm text-muted-foreground">{skill.level}%</span>
                    </div>
                    <Progress value={skill.level} className="h-2" />
                  </motion.div>
                ))}
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}