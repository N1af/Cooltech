import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  MessageSquare,
  Send,
  Quote,
} from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import ownerImage from "@/assets/owner.jpg";

const ContactPage = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent!",
      description: "We'll get back to you as soon as possible.",
    });
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  const contactInfo = [
    {
      icon: Phone,
      title: "Phone",
      details: ["+94 123 456 789", "+94 987 654 321"],
      action: "Call Now",
      link: "tel:+94123456789",
    },
    {
      icon: Mail,
      title: "Email",
      details: ["info@cooltech.lk", "service@cooltech.lk"],
      action: "Send Email",
      link: "mailto:info@cooltech.lk",
    },
    {
      icon: MapPin,
      title: "Location",
      details: ["123 Main Street", "Hatton, Sri Lanka"],
      action: "Get Directions",
      link: "https://maps.google.com",
    },
    {
      icon: Clock,
      title: "Working Hours",
      details: ["Mon - Sat: 8:00 AM - 6:00 PM", "Sun: Emergency Only"],
      action: null,
      link: null,
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
              Get in Touch
            </Badge>
            <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
              Contact Us
            </h1>
            <p className="text-muted-foreground text-xl">
              Have a question or need repair service? We're here to help!
            </p>
          </motion.div>
        </div>
      </section>

      {/* Owner Section */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src={ownerImage}
                  alt="Business Owner"
                  className="w-full h-[500px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent" />
              </div>
              <motion.div
                initial={{ scale: 0, rotate: -180 }}
                whileInView={{ scale: 1, rotate: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="absolute -bottom-6 -right-6 bg-primary text-primary-foreground p-6 rounded-2xl shadow-xl"
              >
                <div className="text-center">
                  <div className="text-3xl font-bold mb-1">10+</div>
                  <div className="text-sm">Years of</div>
                  <div className="text-sm">Excellence</div>
                </div>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Badge className="mb-4 bg-primary/20 text-primary border-primary">
                Meet Our Owner
              </Badge>
              <h2 className="text-4xl font-bold mb-6">
                Your Trusted Refrigeration Expert
              </h2>
              <div className="space-y-4 text-muted-foreground text-lg mb-8">
                <p>
                  Welcome to Cool Tech Refrigeration! I'm proud to serve the Hatton community with over a decade of experience in refrigeration and air conditioning services.
                </p>
                <p>
                  Our commitment is simple: provide honest, reliable, and professional repair services that you can trust. Every repair is treated with the same care as if it were for my own family.
                </p>
              </div>
              
              <Card className="p-6 bg-card/30 backdrop-blur-sm border-border border-l-4 border-l-primary">
                <div className="flex gap-3 mb-4">
                  <Quote className="h-8 w-8 text-primary flex-shrink-0" />
                  <div>
                    <p className="text-foreground italic mb-3">
                      "Quality service isn't just about fixing appliances—it's about building lasting relationships with our customers and ensuring their complete satisfaction."
                    </p>
                    <div className="font-bold text-primary">- Owner, Cool Tech Refrigeration</div>
                  </div>
                </div>
              </Card>

              <div className="grid grid-cols-3 gap-4 mt-8">
                {[
                  { number: "1500+", label: "Happy Clients" },
                  { number: "5000+", label: "Repairs Done" },
                  { number: "98%", label: "Satisfaction" },
                ].map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="text-center"
                  >
                    <div className="text-3xl font-bold text-primary mb-1">{stat.number}</div>
                    <div className="text-sm text-muted-foreground">{stat.label}</div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
            {contactInfo.map((info, index) => (
              <motion.div
                key={info.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="p-6 bg-card/30 backdrop-blur-sm border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 group h-full">
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ duration: 0.3 }}
                    className="inline-block mb-4"
                  >
                    <info.icon className="h-10 w-10 text-primary" />
                  </motion.div>
                  <h3 className="text-xl font-bold mb-3">{info.title}</h3>
                  <div className="space-y-1 mb-4">
                    {info.details.map((detail) => (
                      <p key={detail} className="text-muted-foreground">
                        {detail}
                      </p>
                    ))}
                  </div>
                  {info.action && info.link && (
                    <a href={info.link} target="_blank" rel="noopener noreferrer">
                      <Button
                        variant="outline"
                        size="sm"
                        className="w-full border-primary text-primary hover:bg-primary/10"
                      >
                        {info.action}
                      </Button>
                    </a>
                  )}
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Contact Form and Map */}
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Card className="p-8 bg-card/30 backdrop-blur-sm border-border">
                <div className="flex items-center gap-3 mb-6">
                  <MessageSquare className="h-8 w-8 text-primary" />
                  <h2 className="text-3xl font-bold">Send Us a Message</h2>
                </div>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Full Name *
                    </label>
                    <Input
                      required
                      placeholder="John Doe"
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      className="bg-background/50"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Email Address *
                    </label>
                    <Input
                      required
                      type="email"
                      placeholder="john@example.com"
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      className="bg-background/50"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Phone Number *
                    </label>
                    <Input
                      required
                      type="tel"
                      placeholder="+94 123 456 789"
                      value={formData.phone}
                      onChange={(e) =>
                        setFormData({ ...formData, phone: e.target.value })
                      }
                      className="bg-background/50"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Message *
                    </label>
                    <Textarea
                      required
                      placeholder="Describe your repair needs..."
                      rows={5}
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      className="bg-background/50"
                    />
                  </div>
                  <Button
                    type="submit"
                    className="w-full bg-primary hover:bg-primary/90 text-primary-foreground gap-2"
                    size="lg"
                  >
                    <Send className="h-4 w-4" />
                    Send Message
                  </Button>
                </form>
              </Card>
            </motion.div>

            {/* Map and Additional Info */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              <Card className="overflow-hidden bg-card/30 backdrop-blur-sm border-border">
                <div className="h-80 bg-secondary/50 flex items-center justify-center">
                  <div className="text-center">
                    <MapPin className="h-16 w-16 text-primary mx-auto mb-4" />
                    <p className="text-muted-foreground">
                      Map integration would go here
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="p-8 bg-gradient-to-br from-primary/20 to-accent/20 border-border">
                <h3 className="text-2xl font-bold mb-4">
                  Need Immediate Help?
                </h3>
                <p className="text-muted-foreground mb-6">
                  For urgent repairs and emergencies, call us directly:
                </p>
                <a href="tel:+94123456789">
                  <Button
                    size="lg"
                    className="w-full bg-primary hover:bg-primary/90 text-primary-foreground gap-2"
                  >
                    <Phone className="h-5 w-5" />
                    Call: +94 123 456 789
                  </Button>
                </a>
                <p className="text-sm text-muted-foreground mt-4 text-center">
                  Available 24/7 for emergency services
                </p>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Preview */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-2xl mx-auto"
          >
            <h2 className="text-4xl font-bold mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-muted-foreground text-lg mb-8">
              Find quick answers to common questions about our services
            </p>
            <div className="space-y-4">
              <Card className="p-6 text-left bg-card/50 backdrop-blur-sm border-border">
                <h3 className="font-bold mb-2">Do you offer same-day service?</h3>
                <p className="text-muted-foreground">
                  Yes! We offer same-day service for most repairs. Call us before 12 PM for same-day appointments.
                </p>
              </Card>
              <Card className="p-6 text-left bg-card/50 backdrop-blur-sm border-border">
                <h3 className="font-bold mb-2">What's your service warranty?</h3>
                <p className="text-muted-foreground">
                  All our repairs come with a 90-day warranty on parts and labor.
                </p>
              </Card>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
