
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ExternalLink, Github } from "lucide-react";

const ProjectsSection = () => {
  const projects = [
    {
      title: "E-Commerce Platform",
      description: "Modern shopping experience with React, Node.js, and Stripe integration",
      tech: ["React", "Node.js", "MongoDB", "Stripe"],
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=500&h=300&fit=crop"
    },
    {
      title: "Restaurant Management System",
      description: "Full-stack solution for restaurant operations and customer management",
      tech: ["Vue.js", "Laravel", "MySQL", "Tailwind CSS"],
      image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=500&h=300&fit=crop"
    },
    {
      title: "Portfolio Website",
      description: "Creative portfolio showcasing modern design and smooth animations",
      tech: ["React", "Framer Motion", "Tailwind CSS"],
      image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=500&h=300&fit=crop"
    },
    {
      title: "Task Management App",
      description: "Collaborative workspace for teams with real-time updates",
      tech: ["Next.js", "Socket.io", "PostgreSQL"],
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=500&h=300&fit=crop"
    },
    {
      title: "Weather Dashboard",
      description: "Beautiful weather app with interactive maps and forecasts",
      tech: ["React", "API Integration", "Chart.js"],
      image: "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=500&h=300&fit=crop"
    },
    {
      title: "Fitness Tracker",
      description: "Personal fitness companion with workout plans and progress tracking",
      tech: ["React Native", "Firebase", "Redux"],
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=500&h=300&fit=crop"
    }
  ];

  return (
    <section className="py-20 bg-matte-black">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-on-scroll">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-creme-brulee mb-4">
            Code That Speaks for Itself
          </h2>
          <p className="text-muted-taupe text-xl max-w-2xl mx-auto">
            Each project represents a unique challenge solved with creativity, 
            technical expertise, and attention to detail.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card 
              key={project.title} 
              className="bg-dark-chocolate border-espresso-martini group hover:border-mocha-latte transition-all duration-300 hover:shadow-2xl hover:shadow-mocha-latte/20 animate-on-scroll overflow-hidden"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark-chocolate/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              
              <CardContent className="p-6">
                <h3 className="font-serif text-xl font-semibold text-creme-brulee mb-3">
                  {project.title}
                </h3>
                <p className="text-muted-taupe mb-4 text-sm leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech) => (
                    <span 
                      key={tech}
                      className="px-3 py-1 bg-espresso-martini text-creme-brulee text-xs rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex gap-3">
                  <Button 
                    size="sm" 
                    className="bg-creme-brulee text-dark-chocolate hover:bg-mocha-latte hover:text-white transition-colors duration-300 flex items-center gap-2"
                  >
                    <ExternalLink size={16} />
                    Live Demo
                  </Button>
                  <Button 
                    size="sm" 
                    variant="outline" 
                    className="border-mocha-latte text-mocha-latte hover:bg-mocha-latte hover:text-white transition-colors duration-300 flex items-center gap-2"
                  >
                    <Github size={16} />
                    Code
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
