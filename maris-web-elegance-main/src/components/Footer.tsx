
import { Heart, Coffee } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-matte-black py-12 border-t border-dark-chocolate">
      <div className="container mx-auto px-6">
        <div className="text-center">
          <h3 className="font-serif text-2xl font-bold text-creme-brulee mb-4">
            CodeWithMaris
          </h3>
          <p className="text-muted-taupe mb-6 flex items-center justify-center gap-2">
            Crafted with <Heart className="w-4 h-4 text-red-500 fill-current" /> 
            and <Coffee className="w-4 h-4 text-mocha-latte" /> by Gloria Maris
          </p>
          <div className="flex justify-center space-x-6 mb-6">
            <a href="#" className="text-mocha-latte hover:text-creme-brulee transition-colors duration-300">
              LinkedIn
            </a>
            <a href="#" className="text-mocha-latte hover:text-creme-brulee transition-colors duration-300">
              GitHub
            </a>
            <a href="#" className="text-mocha-latte hover:text-creme-brulee transition-colors duration-300">
              Twitter
            </a>
          </div>
          <p className="text-muted-taupe text-sm">
            © 2024 Gloria Maris. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
