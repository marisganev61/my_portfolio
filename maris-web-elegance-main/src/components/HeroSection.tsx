
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-matte-black via-dark-chocolate to-espresso-martini">
      {/* Ambient shimmer background */}
      <div className="absolute inset-0 bg-gradient-shimmer animate-shimmer opacity-20"></div>
      
      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="animate-fade-in">
          <h1 className="font-serif text-5xl md:text-7xl font-bold text-creme-brulee mb-6 leading-tight">
            Crafting elegant
            <br />
            <span className="text-mocha-latte">web experiences</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-taupe mb-8 max-w-2xl mx-auto">
            Powered by coffee, code, and clean design.
          </p>
          
          <Button 
            className="bg-creme-brulee text-dark-chocolate hover:bg-mocha-latte hover:text-white transition-all duration-300 px-8 py-4 text-lg font-semibold rounded-full animate-glow"
            size="lg"
          >
            Send a Message
          </Button>
        </div>
        
        {/* Floating elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-mocha-latte/20 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-32 h-32 bg-creme-brulee/10 rounded-full blur-2xl animate-pulse delay-700"></div>
      </div>
    </section>
  );
};

export default HeroSection;
