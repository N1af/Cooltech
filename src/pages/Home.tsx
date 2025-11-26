import { motion } from "framer-motion";
import Hero from "@/components/Hero";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Wind, 
  Snowflake, 
  Clock, 
  Shield, 
  Users, 
  Award, 
  Phone,
  Wrench,
  CheckCircle,
  Star,
  MapPin,
  TrendingUp,
  Home as HomeIcon,
  Car,
  Factory,
} from "lucide-react";
import acRepair from "@/assets/ac-repair.jpg";
import fridgeRepair from "@/assets/fridge-repair.jpg";
import washingMachineRepair from "@/assets/washing-machine-repair.jpg";
import autoAcRepair from "@/assets/auto-ac-repair.jpg";
import teamImage from "@/assets/team.jpg";

const Home = () => {
  const services = [
    {
      icon: Wind,
      title: "AC Repair & Service",
      description: "Expert air conditioning repair and maintenance services",
      image: acRepair,
    },
    {
      icon: Snowflake,
      title: "Refrigerator Repair",
      description: "Professional fridge repair and cooling solutions",
      image: fridgeRepair,
    },
  ];

  const features = [
    {
      icon: Clock,
      title: "24/7 Emergency Service",
      description: "Available round the clock for urgent repairs",
    },
    {
      icon: Shield,
      title: "Licensed Technicians",
      description: "Certified professionals with years of experience",
    },
    {
      icon: Users,
      title: "Customer Satisfaction",
      description: "1000+ happy customers across Hatton",
    },
    {
      icon: Award,
      title: "Quality Guaranteed",
      description: "90-day warranty on all repair work",
    },
  ];

  return (
    <div className="min-h-screen">
      <Hero />

      {/* Quick Services Section */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
              Our Services
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Professional refrigeration and air conditioning solutions in Hatton
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                <Card className="group overflow-hidden bg-card/50 backdrop-blur-sm border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/20">
                  <div className="relative h-64 overflow-hidden">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
                    <div className="absolute bottom-4 left-4 right-4">
                      <service.icon className="h-10 w-10 text-primary mb-2" />
                      <h3 className="text-2xl font-bold text-foreground mb-2">
                        {service.title}
                      </h3>
                      <p className="text-muted-foreground">{service.description}</p>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-center"
          >
            <Link to="/services">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
                View All Services
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold mb-4">Why Choose Us?</h2>
            <p className="text-muted-foreground text-lg">
              Trusted by hundreds of customers in Hatton
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="p-6 text-center bg-card/30 backdrop-blur-sm border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 group">
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ duration: 0.3 }}
                    className="inline-block mb-4"
                  >
                    <feature.icon className="h-12 w-12 text-primary" />
                  </motion.div>
                  <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-b from-secondary/30 to-transparent relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(var(--primary-rgb),0.1),transparent)]" />
        <div className="container mx-auto px-4 relative">
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { number: "10+", label: "Years Experience", icon: Award },
              { number: "1500+", label: "Happy Clients", icon: Users },
              { number: "5000+", label: "Repairs Done", icon: Wrench },
              { number: "98%", label: "Success Rate", icon: TrendingUp },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="p-8 text-center bg-card/50 backdrop-blur-sm border-border hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:shadow-primary/20 group">
                  <stat.icon className="h-10 w-10 text-primary mx-auto mb-4 group-hover:scale-110 transition-transform" />
                  <motion.h3 
                    className="text-5xl font-bold mb-2 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent"
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 + 0.3 }}
                  >
                    {stat.number}
                  </motion.h3>
                  <p className="text-muted-foreground font-medium">{stat.label}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <Badge className="mb-4 bg-primary/20 text-primary border-primary">
              Simple Process
            </Badge>
            <h2 className="text-4xl font-bold mb-4">How We Work</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Get your appliances fixed in 4 simple steps
            </p>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Contact Us",
                description: "Call or message us about your appliance issue",
                icon: Phone,
              },
              {
                step: "02",
                title: "Schedule Visit",
                description: "Choose a convenient time for our technician",
                icon: Clock,
              },
              {
                step: "03",
                title: "Diagnosis & Repair",
                description: "Expert diagnosis and professional repair work",
                icon: Wrench,
              },
              {
                step: "04",
                title: "Quality Check",
                description: "Testing and warranty on all repairs",
                icon: CheckCircle,
              },
            ].map((step, index) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="relative"
              >
                <Card className="p-6 bg-card/30 backdrop-blur-sm border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 group h-full">
                  <div className="absolute -top-6 left-6 bg-primary text-primary-foreground w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold shadow-lg">
                    {step.step}
                  </div>
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 10 }}
                    transition={{ duration: 0.3 }}
                    className="mt-6 mb-4 inline-block"
                  >
                    <step.icon className="h-12 w-12 text-primary" />
                  </motion.div>
                  <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground">{step.description}</p>
                </Card>
                {index < 3 && (
                  <div className="hidden md:block absolute top-1/2 -right-4 w-8 h-0.5 bg-primary/30" />
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <Badge className="mb-4 bg-primary/20 text-primary border-primary">
              Testimonials
            </Badge>
            <h2 className="text-4xl font-bold mb-4">What Our Clients Say</h2>
            <p className="text-muted-foreground text-lg">
              Real reviews from satisfied customers
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Kasun Perera",
                role: "Home Owner",
                review: "Excellent service! Fixed my AC within hours. Very professional and affordable pricing.",
                rating: 5,
              },
              {
                name: "Dilini Fernando",
                role: "Restaurant Owner",
                review: "They manufactured a custom display cooler for my shop. Outstanding quality and service!",
                rating: 5,
              },
              {
                name: "Ravi Silva",
                role: "Business Owner",
                review: "Been using their services for 3 years. Always reliable, quick, and professional. Highly recommended!",
                rating: 5,
              },
            ].map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
              >
                <Card className="p-6 bg-card/50 backdrop-blur-sm border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 group h-full">
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="h-5 w-5 fill-primary text-primary"
                      />
                    ))}
                  </div>
                  <p className="text-foreground mb-6 italic">"{testimonial.review}"</p>
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                      <Users className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-bold">{testimonial.name}</h4>
                      <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Badge className="mb-4 bg-primary/20 text-primary border-primary">
                Service Coverage
              </Badge>
              <h2 className="text-4xl font-bold mb-6">
                Serving Hatton & Surrounding Areas
              </h2>
              <p className="text-muted-foreground text-lg mb-8">
                We provide reliable refrigeration and air conditioning services throughout Hatton and nearby regions. Our technicians are ready to assist you wherever you are.
              </p>
              <div className="grid grid-cols-2 gap-4 mb-8">
                {[
                  { icon: HomeIcon, label: "Residential Services" },
                  { icon: Factory, label: "Commercial Solutions" },
                  { icon: Car, label: "Automotive AC" },
                  { icon: Wrench, label: "Emergency Repairs" },
                ].map((item, index) => (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="flex items-center gap-3 p-4 rounded-lg bg-secondary/30 hover:bg-secondary/50 transition-all"
                  >
                    <item.icon className="h-6 w-6 text-primary flex-shrink-0" />
                    <span className="font-medium text-sm">{item.label}</span>
                  </motion.div>
                ))}
              </div>
              <div className="flex items-start gap-3 p-4 bg-primary/10 rounded-lg border border-primary/20">
                <MapPin className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-bold mb-1">Main Location</h4>
                  <p className="text-muted-foreground">Cool Tech Refrigeration, Hatton, Sri Lanka</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src={teamImage}
                  alt="Our team"
                  className="w-full h-[500px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/40 to-transparent" />
                <div className="absolute bottom-8 left-8 right-8">
                  <h3 className="text-3xl font-bold text-white mb-2">
                    Professional Team
                  </h3>
                  <p className="text-white/90">
                    Certified technicians with years of expertise
                  </p>
                </div>
              </div>
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="absolute -top-6 -right-6 bg-primary text-primary-foreground p-6 rounded-2xl shadow-xl"
              >
                <div className="text-center">
                  <div className="text-4xl font-bold mb-1">10+</div>
                  <div className="text-sm">Years Serving</div>
                  <div className="text-sm">Hatton</div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* All Services Grid */}
      <section className="py-20 bg-gradient-to-b from-secondary/30 to-transparent">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <Badge className="mb-4 bg-primary/20 text-primary border-primary">
              Complete Solutions
            </Badge>
            <h2 className="text-4xl font-bold mb-4">All Our Services</h2>
            <p className="text-muted-foreground text-lg">
              Comprehensive repair and maintenance for all your needs
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Wind, title: "Air Conditioning", image: acRepair },
              { icon: Snowflake, title: "Refrigerator", image: fridgeRepair },
              { icon: Wrench, title: "Washing Machine", image: washingMachineRepair },
              { icon: Car, title: "Auto AC", image: autoAcRepair },
            ].map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="group overflow-hidden bg-card/30 backdrop-blur-sm border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/20 cursor-pointer">
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent" />
                    <service.icon className="absolute top-4 right-4 h-8 w-8 text-white drop-shadow-lg" />
                  </div>
                  <div className="p-4">
                    <h3 className="font-bold text-lg group-hover:text-primary transition-colors">
                      {service.title}
                    </h3>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-center mt-12"
          >
            <Link to="/services">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
                View All 7 Services
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary/10 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(var(--primary-rgb),0.15),transparent)]" />
        <div className="container mx-auto px-4 relative">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <motion.div
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
              className="inline-block mb-6"
            >
              <Phone className="h-16 w-16 text-primary" />
            </motion.div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Need Immediate Assistance?
            </h2>
            <p className="text-muted-foreground text-lg mb-8">
              Our expert technicians are ready to help you with any refrigeration or AC issues. Available 24/7 for emergency repairs!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg hover:shadow-primary/50 transition-all">
                  Contact Us Now
                </Button>
              </Link>
              <a href="tel:+94123456789">
                <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary/10 shadow-lg">
                  <Phone className="h-5 w-5 mr-2" />
                  Call: +94 123 456 789
                </Button>
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;
