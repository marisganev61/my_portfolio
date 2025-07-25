
import { Card, CardContent } from "@/components/ui/card";
import { Code, ShoppingCart, Cog, Palette, Database, Globe } from "lucide-react";

const ServicesSection = () => {
  const services = [
    {
      title: "Website Design & Development",
      description: "Custom websites that combine beautiful design with powerful functionality, optimized for all devices and search engines.",
      icon: Code,
      features: ["Responsive Design", "SEO Optimization", "Performance Focused", "Modern Technologies"]
    },
    {
      title: "E-Commerce Websites",
      description: "Complete online stores with secure payment processing, inventory management, and user-friendly shopping experiences.",
      icon: ShoppingCart,
      features: ["Payment Integration", "Inventory Management", "Admin Dashboard", "Customer Analytics"]
    },
    {
      title: "Custom Web Solutions",
      description: "Tailored applications and systems designed specifically for your business needs and workflow requirements.",
      icon: Cog,
      features: ["Custom Features", "Third-party Integrations", "Scalable Architecture", "Ongoing Support"]
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-dark-chocolate to-espresso-martini">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-on-scroll">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-creme-brulee mb-4">
            Let's Build Something That Works
          </h2>
          <p className="text-muted-taupe text-xl max-w-2xl mx-auto">
            From concept to deployment, I deliver comprehensive web solutions 
            that drive results and exceed expectations.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card 
                key={service.title}
                className="bg-matte-black border-espresso-martini group hover:border-creme-brulee hover:bg-dark-chocolate transition-all duration-300 animate-on-scroll"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <CardContent className="p-8 text-center">
                  <div className="mb-6 flex justify-center">
                    <div className="w-16 h-16 bg-gradient-to-br from-creme-brulee to-mocha-latte rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <Icon className="w-8 h-8 text-dark-chocolate" />
                    </div>
                  </div>
                  
                  <h3 className="font-serif text-xl font-semibold text-creme-brulee mb-4">
                    {service.title}
                  </h3>
                  
                  <p className="text-muted-taupe mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  
                  <ul className="space-y-2">
                    {service.features.map((feature) => (
                      <li key={feature} className="text-mocha-latte text-sm flex items-center justify-center">
                        <span className="w-1.5 h-1.5 bg-creme-brulee rounded-full mr-2"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
