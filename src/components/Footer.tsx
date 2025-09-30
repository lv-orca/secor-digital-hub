import { Separator } from "@/components/ui/separator";

const Footer = () => {
  return (
    <footer className="bg-tech-gray text-primary-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <div className="h-8 w-8 bg-gradient-to-br from-tech-blue to-tech-blue-dark rounded-lg flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-sm">S</span>
              </div>
              <h3 className="text-xl font-bold">Secor Enterprises</h3>
            </div>
            <p className="text-primary-foreground/80 text-sm leading-relaxed">
              Your trusted partner for comprehensive IT solutions and digital transformation services.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-sm text-primary-foreground/80">
              <li><a href="#" className="hover:text-tech-blue transition-colors">Cybersecurity</a></li>
              <li><a href="#" className="hover:text-tech-blue transition-colors">Cloud Migration</a></li>
              <li><a href="#" className="hover:text-tech-blue transition-colors">IT Consulting</a></li>
              <li><a href="#" className="hover:text-tech-blue transition-colors">Infrastructure</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-sm text-primary-foreground/80">
              <li><a href="#about" className="hover:text-tech-blue transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-tech-blue transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-tech-blue transition-colors">News</a></li>
              <li><a href="#contact" className="hover:text-tech-blue transition-colors">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Contact Info</h4>
            <ul className="space-y-2 text-sm text-primary-foreground/80">
              <li>+27 78 936 1866</li>
              <li>info@secor.co.za</li>
              <li>78 6th Ave Postdene<br />Postmasburg, 8420 ZAF</li>
            </ul>
          </div>
        </div>
        
        <Separator className="bg-primary-foreground/20 mb-8" />
        
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="text-sm text-primary-foreground/80">
            © 2024 Secor Enterprises Pty Ltd. All rights reserved.
          </div>
          <div className="flex space-x-6 text-sm">
            <a href="#" className="text-primary-foreground/80 hover:text-tech-blue transition-colors">Privacy Policy</a>
            <a href="#" className="text-primary-foreground/80 hover:text-tech-blue transition-colors">Terms of Service</a>
            <a href="#" className="text-primary-foreground/80 hover:text-tech-blue transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
