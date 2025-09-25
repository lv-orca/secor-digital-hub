import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Shield, Server, Cloud, Users, Wrench, Globe } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Shield,
      title: "Cybersecurity Solutions",
      description: "Comprehensive security audits, threat detection, and protection systems to safeguard your business data and infrastructure.",
    },
    {
      icon: Server,
      title: "IT Infrastructure",
      description: "Design, implementation, and management of robust network infrastructure tailored to your business requirements.",
    },
    {
      icon: Cloud,
      title: "Cloud Migration",
      description: "Seamless transition to cloud platforms with ongoing optimization and management for maximum efficiency.",
    },
    {
      icon: Users,
      title: "IT Consulting",
      description: "Strategic technology planning and digital transformation guidance to align IT with your business objectives.",
    },
    {
      icon: Wrench,
      title: "System Maintenance",
      description: "Proactive monitoring, regular updates, and preventive maintenance to ensure optimal system performance.",
    },
    {
      icon: Globe,
      title: "Web Solutions",
      description: "Custom web development, e-commerce platforms, and digital marketing solutions to expand your online presence.",
    },
  ];

  return (
    <section id="services" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-tech-gray mb-4">
            Our IT Services
          </h2>
          <p className="text-xl text-tech-gray-light max-w-3xl mx-auto">
            Comprehensive technology solutions designed to drive your business forward in today's competitive landscape.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300 border-border bg-card">
                <CardHeader>
                  <div className="h-12 w-12 bg-gradient-to-br from-tech-blue to-tech-blue-dark rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Icon className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <CardTitle className="text-tech-gray">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-tech-gray-light">
                    {service.description}
                  </CardDescription>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;