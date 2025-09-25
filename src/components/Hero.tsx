import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-tech.jpg";

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center bg-gradient-to-br from-background via-secondary to-background">
      <div className="container mx-auto px-4 py-20 mt-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl lg:text-6xl font-bold text-tech-gray leading-tight">
                Advanced IT Solutions for
                <span className="bg-gradient-to-r from-tech-blue to-tech-blue-dark bg-clip-text text-transparent"> Modern Business</span>
              </h1>
              <p className="text-xl text-tech-gray-light leading-relaxed">
                Secor Enterprises delivers cutting-edge technology solutions that empower your business 
                to thrive in the digital age. From infrastructure to security, we've got you covered.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="professional" size="lg" className="text-lg px-8 py-6">
                Get Started Today
              </Button>
              <Button variant="professional-outline" size="lg" className="text-lg px-8 py-6">
                Learn More
              </Button>
            </div>
            
            <div className="flex items-center space-x-8 pt-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-tech-blue">500+</div>
                <div className="text-sm text-tech-gray-light">Projects Completed</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-tech-blue">24/7</div>
                <div className="text-sm text-tech-gray-light">Support Available</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-tech-blue">15+</div>
                <div className="text-sm text-tech-gray-light">Years Experience</div>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-tech-blue/20 to-tech-blue-dark/20 rounded-2xl transform rotate-3"></div>
            <img 
              src={heroImage} 
              alt="Modern IT infrastructure and technology solutions" 
              className="relative rounded-2xl shadow-2xl w-full h-auto object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;