
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MessageCircle, Phone } from "lucide-react";
import { useState } from "react";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section className="py-20 bg-gradient-to-b from-espresso-martini to-matte-black">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="animate-on-scroll">
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-creme-brulee mb-6">
              Let's Create Something Amazing Together
            </h2>
            <p className="text-muted-taupe text-lg mb-8">
              Ready to bring your vision to life? I'd love to hear about your project 
              and discuss how we can work together to create something extraordinary.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-center">
                <Mail className="w-6 h-6 text-creme-brulee mr-4" />
                <span className="text-white">gloria@codewithmaris.com</span>
              </div>
              <div className="flex items-center">
                <Phone className="w-6 h-6 text-creme-brulee mr-4" />
                <span className="text-white">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center">
                <MessageCircle className="w-6 h-6 text-creme-brulee mr-4" />
                <span className="text-white">WhatsApp Available</span>
              </div>
            </div>
          </div>
          
          <div className="animate-on-scroll">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="floating-label">
                <Input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder=" "
                  className="bg-dark-chocolate border-espresso-martini text-white placeholder-transparent focus:border-creme-brulee"
                  required
                />
                <label>Your Name</label>
              </div>
              
              <div className="floating-label">
                <Input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder=" "
                  className="bg-dark-chocolate border-espresso-martini text-white placeholder-transparent focus:border-creme-brulee"
                  required
                />
                <label>Email Address</label>
              </div>
              
              <div className="floating-label">
                <Textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder=" "
                  rows={5}
                  className="bg-dark-chocolate border-espresso-martini text-white placeholder-transparent focus:border-creme-brulee resize-none"
                  required
                />
                <label>Project Details</label>
              </div>
              
              <Button 
                type="submit"
                className="w-full bg-creme-brulee text-dark-chocolate hover:bg-mocha-latte hover:text-white transition-all duration-300 py-3 text-lg font-semibold animate-glow"
              >
                Send a Message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
