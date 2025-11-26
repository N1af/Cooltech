import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

const contactInfo = [
  {
    icon: MapPin,
    title: "Location",
    detail: "Hatton, Sri Lanka",
    description: "Serving Hatton and surrounding areas",
  },
  {
    icon: Phone,
    title: "Phone",
    detail: "Contact for service",
    description: "Available for emergency repairs",
  },
  {
    icon: Clock,
    title: "Hours",
    detail: "7 Days a Week",
    description: "Same-day service available",
  },
];

const Contact = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-secondary/30 to-background relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,hsl(180_75%_45%/0.05),transparent_50%)]" />
      
      <div className="container relative z-10 mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 font-outfit bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent">
            Get In Touch
          </h2>
          <p className="text-muted-foreground text-lg font-outfit max-w-2xl mx-auto">
            Need urgent repair? We're here to help. Contact us for professional service.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {contactInfo.map((info, index) => {
            const Icon = info.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
              >
                <Card className="p-6 bg-card/50 backdrop-blur-sm border-border hover:border-primary/50 transition-all duration-300 h-full text-center group hover:shadow-lg hover:shadow-primary/10">
                  <div className="inline-flex items-center justify-center p-4 bg-primary/10 rounded-xl mb-4 group-hover:bg-primary/20 transition-colors duration-300">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2 font-outfit text-foreground">
                    {info.title}
                  </h3>
                  <p className="text-primary font-outfit font-semibold mb-1">
                    {info.detail}
                  </p>
                  <p className="text-muted-foreground text-sm font-outfit">
                    {info.description}
                  </p>
                </Card>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mx-auto"
        >
          <Card className="p-8 md:p-12 bg-gradient-to-br from-primary/10 to-secondary/50 backdrop-blur-sm border-primary/30 text-center">
            <h3 className="text-2xl md:text-3xl font-bold mb-4 font-outfit text-foreground">
              Ready to Fix Your Appliance?
            </h3>
            <p className="text-muted-foreground font-outfit mb-8">
              Don't let a broken AC or fridge disrupt your life. Our expert technicians are ready to help you today.
            </p>
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-outfit font-semibold px-8 py-6 text-lg rounded-xl shadow-lg hover:shadow-primary/50 transition-all duration-300"
            >
              <Phone className="mr-2" />
              Call Now for Service
            </Button>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
