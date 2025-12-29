import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import {
  Wind,
  Snowflake,
  Wrench,
  Settings,
  CheckCircle,
  Clock,
  Shield,
  DollarSign,
  Car,
  Home,
  Refrigerator,
  Factory,
} from "lucide-react";
import acRepair from "@/assets/ac-repair.jpg";
import fridgeRepair from "@/assets/fridge-repair.jpg";
import washingMachineRepair from "@/assets/washing-machine-repair.jpg";
import autoAcRepair from "@/assets/auto-ac-repair.jpg";
import deepFreezerRepair from "@/assets/deep-freezer-repair.jpg";
import displayCooler from "@/assets/display-cooler.jpg";
import homeAppliances from "@/assets/home-appliances.jpg";

const ServicesPage = () => {
  const services = [
    {
      icon: Wind,
      title: "Air Conditioning Services",
      image: acRepair,
      description: "Complete AC solutions for your home and office",
      features: [
        "AC Installation & Setup",
        "Regular Maintenance",
        "Emergency Repairs",
        "Gas Refilling",
        "Duct Cleaning",
        "Thermostat Replacement",
      ],
  
    },
    {
      icon: Snowflake,
      title: "Refrigerator Repair",
      image: fridgeRepair,
      description: "Expert refrigerator repair and maintenance services",
      features: [
        "Cooling Issues",
        "Compressor Repair",
        "Ice Maker Repair",
        "Door Seal Replacement",
        "Temperature Control",
        "Annual Maintenance",
      ],

    },
    {
      icon: Wrench,
      title: "Washing Machine Repair",
      image: washingMachineRepair,
      description: "Professional washing machine repair for all brands",
      features: [
        "Drum Replacement",
        "Motor Repair",
        "Water Drainage Issues",
        "Spin Cycle Problems",
        "Control Panel Fixes",
        "Preventive Maintenance",
      ],
    
    },
    {
      icon: Home,
      title: "Home Appliances Repair",
      image: homeAppliances,
      description: "Comprehensive repair services for all home appliances",
      features: [
        "Microwave Repair",
        "Dishwasher Service",
        "Oven & Stove Repair",
        "Small Appliance Fixes",
        "Installation Services",
        "Warranty Support",
      ],
     
    },
    {
      icon: Car,
      title: "Auto AC Services",
      image: autoAcRepair,
      description: "Specialized automotive air conditioning repair",
      features: [
        "Car AC Repair",
        "Gas Charging",
        "Compressor Service",
        "Condenser Cleaning",
        "Leak Detection",
        "Performance Optimization",
      ],
    
    },
    {
      icon: Refrigerator,
      title: "Deep Freezer Services",
      image: deepFreezerRepair,
      description: "Commercial and industrial deep freezer solutions",
      features: [
        "Temperature Issues",
        "Compressor Replacement",
        "Seal & Gasket Repair",
        "Defrosting Problems",
        "Energy Efficiency Check",
        "Regular Servicing",
      ],
      
    },
    {
      icon: Factory,
      title: "Display Cooler Services",
      image: displayCooler,
      description: "Chicken display cooler repair and manufacturing",
      features: [
        "Custom Manufacturing",
        "Cooling System Repair",
        "LED Lighting Installation",
        "Glass Door Replacement",
        "Temperature Control",
        "Complete Refurbishment",
      ],
   
    },
  ];

  const whyChoose = [
    {
      icon: Clock,
      title: "Quick Response",
      description: "Same-day service available for urgent repairs",
    },
    {
      icon: Shield,
      title: "Quality Work",
      description: "90-day warranty on all parts and labor",
    },
    {
      icon: Wrench,
      title: "Expert Technicians",
      description: "Certified professionals with 10+ years experience",
    },
    {
      icon: DollarSign,
      title: "Fair Pricing",
      description: "Transparent pricing with no hidden charges",
    },
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-b from-primary/20 to-transparent">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <Badge className="mb-4 bg-primary/20 text-primary border-primary">
              Professional Services
            </Badge>
            <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
              Our Services
            </h1>
            <p className="text-muted-foreground text-xl">
              Expert refrigeration and air conditioning solutions tailored to your needs
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Detail Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="space-y-20">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                <Card className="overflow-hidden bg-card/30 backdrop-blur-sm border-border">
                  <div className={`grid md:grid-cols-2 gap-8 ${index % 2 === 1 ? "md:grid-flow-dense" : ""}`}>
                    <div className={`relative h-96 ${index % 2 === 1 ? "md:col-start-2" : ""}`}>
                      <img
                        src={service.image}
                        alt={service.title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
                      <div className="absolute bottom-6 left-6">
                        <service.icon className="h-16 w-16 text-primary" />
                      </div>
                    </div>
                    <div className="p-8 flex flex-col justify-center">
                      <h2 className="text-3xl font-bold mb-4">{service.title}</h2>
                      <p className="text-muted-foreground text-lg mb-6">
                        {service.description}
                      </p>
                      <div className="grid grid-cols-2 gap-3 mb-6">
                        {service.features.map((feature) => (
                          <div key={feature} className="flex items-start gap-2">
                            <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                            <span className="text-sm">{feature}</span>
                          </div>
                        ))}
                      </div>
                      <div className="flex items-center justify-between pt-6 border-t border-border">
                        
                        <Link to="/contact">
                          <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">
                            Book Service
                          </Button>
                        </Link>
                      </div>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold mb-4">Why Choose Cool Tech?</h2>
            <p className="text-muted-foreground text-lg">
              Professional service you can trust
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyChoose.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="p-6 text-center bg-card/50 backdrop-blur-sm border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 group h-full">
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ duration: 0.3 }}
                    className="inline-block mb-4"
                  >
                    <item.icon className="h-12 w-12 text-primary" />
                  </motion.div>
                  <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground">{item.description}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-r from-primary/20 to-accent/20 rounded-2xl p-12 text-center"
          >
            <Settings className="h-16 w-16 text-primary mx-auto mb-6" />
            <h2 className="text-4xl font-bold mb-4">
              Ready to Fix Your Appliance?
            </h2>
            <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
              Get in touch with us today for professional repair services in Hatton
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
                  Contact Us Now
                </Button>
              </Link>
              <a href="tel:+94770733074">
                <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary/10">
                  Call: +94 77 073 3074
                </Button>
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;
