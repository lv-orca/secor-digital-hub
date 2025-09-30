import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-tech-gray mb-4">
            Get In Touch
          </h2>
          <p className="text-xl text-tech-gray-light max-w-3xl mx-auto">
            Ready to transform your IT infrastructure? Contact us today for a free consultation 
            and discover how we can help your business thrive.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold text-tech-gray mb-6">Contact Information</h3>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="h-12 w-12 bg-gradient-to-br from-tech-blue to-tech-blue-dark rounded-lg flex items-center justify-center">
                    <Phone className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-tech-gray">Phone</h4>
                    <p className="text-tech-gray-light">+27 78 936 1866</p>
                    <p className="text-tech-gray-light">+27 78 936 1866</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="h-12 w-12 bg-gradient-to-br from-tech-blue to-tech-blue-dark rounded-lg flex items-center justify-center">
                    <Mail className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-tech-gray">Email</h4>
                    <p className="text-tech-gray-light">info@secor.co.za</p>
                    <p className="text-tech-gray-light">support@secor.co.za</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="h-12 w-12 bg-gradient-to-br from-tech-blue to-tech-blue-dark rounded-lg flex items-center justify-center">
                    <MapPin className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-tech-gray">Address</h4>
                    <p className="text-tech-gray-light">78 6th Ave Postdene</p>
                    <p className="text-tech-gray-light">Postmasburg, 8420</p>
                    <p className="text-tech-gray-light">South Africa</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="h-12 w-12 bg-gradient-to-br from-tech-blue to-tech-blue-dark rounded-lg flex items-center justify-center">
                    <Clock className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-tech-gray">Business Hours</h4>
                    <p className="text-tech-gray-light">Mon - Fri: 8:00 AM - 6:00 PM</p>
                    <p className="text-tech-gray-light">24/7 Emergency Support Available</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <Card className="bg-card border-border">
            <CardHeader>
              <CardTitle className="text-tech-gray">Send Us a Message</CardTitle>
              <CardDescription className="text-tech-gray-light">
                Fill out the form below and we'll get back to you within 24 hours.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-tech-gray">First Name</label>
                  <Input placeholder="John" className="border-border" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-tech-gray">Last Name</label>
                  <Input placeholder="Doe" className="border-border" />
                </div>
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-medium text-tech-gray">Email</label>
                <Input type="email" placeholder="john.doe@company.com" className="border-border" />
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-medium text-tech-gray">Company</label>
                <Input placeholder="Your Company Name" className="border-border" />
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-medium text-tech-gray">Message</label>
                <Textarea 
                  placeholder="Tell us about your IT requirements..." 
                  className="min-h-[100px] border-border"
                />
              </div>
              
              <Button variant="professional" size="lg" className="w-full">
                Send Message
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;
