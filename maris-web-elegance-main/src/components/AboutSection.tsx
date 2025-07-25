
import { Code, Database, Globe, Palette } from "lucide-react";

const AboutSection = () => {
  const skills = [
    { name: "Frontend Development", level: 95, icon: Code },
    { name: "Backend Development", level: 90, icon: Database },
    { name: "UI/UX Design", level: 85, icon: Palette },
    { name: "Full-Stack Solutions", level: 92, icon: Globe }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-espresso-martini to-dark-chocolate">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="animate-on-scroll">
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-creme-brulee mb-6">
              Meet Gloria Maris
            </h2>
            <div className="text-muted-taupe text-lg leading-relaxed space-y-4">
              <p>
                Known as <span className="text-creme-brulee font-semibold">CodeWithMaris</span>, 
                I'm a passionate full-stack developer who transforms ideas into elegant digital experiences.
              </p>
              <p>
                With expertise spanning modern web technologies, I craft solutions that are not just 
                functional, but beautiful and user-centric. Every line of code is written with 
                precision, every design element carefully considered.
              </p>
              <p>
                When I'm not coding, you'll find me exploring the latest web technologies, 
                sipping expertly crafted coffee, and continuously learning to stay ahead 
                of the digital curve.
              </p>
            </div>
          </div>
          
          <div className="animate-on-scroll">
            <div className="space-y-6">
              {skills.map((skill, index) => {
                const Icon = skill.icon;
                return (
                  <div key={skill.name} className="group">
                    <div className="flex items-center mb-2">
                      <Icon className="w-5 h-5 text-creme-brulee mr-3" />
                      <span className="text-white font-medium">{skill.name}</span>
                      <span className="ml-auto text-mocha-latte font-semibold">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-muted-taupe/30 rounded-full h-2">
                      <div 
                        className="bg-gradient-to-r from-creme-brulee to-mocha-latte h-2 rounded-full transition-all duration-1000 ease-out"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
