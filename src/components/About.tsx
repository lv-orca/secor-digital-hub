import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const About = () => {
  const certifications = [
    "Microsoft Certified",
    "Cisco Partner",
    "AWS Solutions",
    "CompTIA Security+",
    "ITIL Foundation",
    "VMware Certified"
  ];

  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="space-y-4">
              <h2 className="text-3xl lg:text-4xl font-bold text-tech-gray">
                About Secor Enterprises
              </h2>
              <p className="text-lg text-tech-gray-light leading-relaxed">
                With over 15 years of experience in the IT industry, Secor Enterprises Pty Ltd 
                has been at the forefront of technological innovation, helping businesses across 
                Australia achieve their digital transformation goals.
              </p>
              <p className="text-lg text-tech-gray-light leading-relaxed">
                Our team of certified professionals brings together deep technical expertise 
                and business acumen to deliver solutions that not only meet today's challenges 
                but also prepare your organization for tomorrow's opportunities.
              </p>
            </div>
            
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-tech-gray">Our Certifications</h3>
              <div className="flex flex-wrap gap-2">
                {certifications.map((cert, index) => (
                  <Badge key={index} variant="secondary" className="bg-tech-blue/10 text-tech-blue border-tech-blue/20">
                    {cert}
                  </Badge>
                ))}
              </div>
            </div>
            
            <Button variant="professional" size="lg" className="mt-8">
              View Our Portfolio
            </Button>
          </div>
          
          <div className="space-y-8">
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-card p-6 rounded-lg border border-border text-center">
                <div className="text-3xl font-bold text-tech-blue mb-2">15+</div>
                <div className="text-sm text-tech-gray-light">Years in Business</div>
              </div>
              <div className="bg-card p-6 rounded-lg border border-border text-center">
                <div className="text-3xl font-bold text-tech-blue mb-2">50+</div>
                <div className="text-sm text-tech-gray-light">Team Members</div>
              </div>
              <div className="bg-card p-6 rounded-lg border border-border text-center">
                <div className="text-3xl font-bold text-tech-blue mb-2">500+</div>
                <div className="text-sm text-tech-gray-light">Happy Clients</div>
              </div>
              <div className="bg-card p-6 rounded-lg border border-border text-center">
                <div className="text-3xl font-bold text-tech-blue mb-2">99.9%</div>
                <div className="text-sm text-tech-gray-light">Uptime SLA</div>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-tech-blue/5 to-tech-blue-dark/5 p-8 rounded-lg border border-tech-blue/20">
              <h3 className="text-lg font-semibold text-tech-gray mb-3">Why Choose Secor?</h3>
              <ul className="space-y-2 text-tech-gray-light">
                <li className="flex items-start space-x-2">
                  <span className="text-tech-blue">•</span>
                  <span>Proven track record with enterprise clients</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-tech-blue">•</span>
                  <span>24/7 support and monitoring services</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-tech-blue">•</span>
                  <span>Cutting-edge security and compliance expertise</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-tech-blue">•</span>
                  <span>Tailored solutions for every business size</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;