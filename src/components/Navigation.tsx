import { Button } from "@/components/ui/button";

const Navigation = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="h-8 w-8 bg-gradient-to-br from-tech-blue to-tech-blue-dark rounded-lg flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-sm">S</span>
            </div>
            <h1 className="text-xl font-bold text-tech-gray">Secor Enterprises</h1>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-tech-gray hover:text-tech-blue transition-colors">Home</a>
            <a href="#services" className="text-tech-gray hover:text-tech-blue transition-colors">Services</a>
            <a href="#about" className="text-tech-gray hover:text-tech-blue transition-colors">About</a>
            <a href="#contact" className="text-tech-gray hover:text-tech-blue transition-colors">Contact</a>
          </div>

          <Button variant="professional" size="sm">
            Get Quote
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;