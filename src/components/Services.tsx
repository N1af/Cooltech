import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { AirVent, Refrigerator, Wrench, Clock } from "lucide-react";

const services = [
  {
    icon: AirVent,
    title: "AC Repair & Maintenance",
    description: "Complete air conditioning solutions including installation, repair, maintenance, and gas refilling. Expert diagnosis and quick turnaround.",
    features: ["Installation", "Repairs", "Gas Refilling", "Maintenance"],
  },
  {
    icon: Refrigerator,
    title: "Fridge Repair Services",
    description: "Professional refrigerator repair for all brands and models. From cooling issues to compressor replacement, we handle it all.",
    features: ["All Brands", "Quick Service", "Genuine Parts", "Warranty"],
  },
];

const reasons = [
  {
    icon: Wrench,
    title: "Expert Technicians",
    description: "Certified professionals with years of experience",
  },
  {
    icon: Clock,
    title: "Quick Response",
    description: "Same-day service available for urgent repairs",
  },
];

const Services = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-background to-secondary/30 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,hsl(180_75%_45%/0.05),transparent_50%)]" />
      
      <div className="container relative z-10 mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 font-outfit bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent">
            Our Services
          </h2>
          <p className="text-muted-foreground text-lg font-outfit max-w-2xl mx-auto">
            Comprehensive refrigeration solutions for your home and business
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
              >
                <Card className="p-8 bg-card/50 backdrop-blur-sm border-border hover:border-primary/50 transition-all duration-300 h-full group hover:shadow-lg hover:shadow-primary/10">
                  <div className="flex items-start gap-6">
                    <div className="p-4 bg-primary/10 rounded-xl group-hover:bg-primary/20 transition-colors duration-300">
                      <Icon className="w-8 h-8 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-semibold mb-3 font-outfit text-foreground">
                        {service.title}
                      </h3>
                      <p className="text-muted-foreground mb-4 font-outfit">
                        {service.description}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {service.features.map((feature, idx) => (
                          <span
                            key={idx}
                            className="px-3 py-1 bg-secondary text-foreground rounded-full text-sm font-outfit font-medium"
                          >
                            {feature}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
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
          className="text-center mb-12"
        >
          <h3 className="text-3xl md:text-4xl font-bold mb-12 font-outfit text-foreground">
            Why Choose Us?
          </h3>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {reasons.map((reason, index) => {
            const Icon = reason.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
              >
                <Card className="p-6 bg-card/50 backdrop-blur-sm border-border hover:border-primary/50 transition-all duration-300 group">
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors duration-300">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="text-xl font-semibold mb-1 font-outfit text-foreground">
                        {reason.title}
                      </h4>
                      <p className="text-muted-foreground font-outfit text-sm">
                        {reason.description}
                      </p>
                    </div>
                  </div>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
