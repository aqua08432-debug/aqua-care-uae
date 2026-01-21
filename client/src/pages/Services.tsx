import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Award,
  CheckCircle,
  Clock,
  Droplet,
  Settings,
  Shield,
  Wrench,
} from "lucide-react";
import { Link } from "wouter";

export default function Services() {
  const services = [
    {
      icon: Droplet,
      title: "Free Water Testing",
      description:
        "Comprehensive water quality analysis to determine the best filtration solution for your needs.",
      features: [
        "TDS level measurement",
        "pH testing",
        "Hardness analysis",
        "Chlorine detection",
        "Expert recommendations",
      ],
      cta: "Schedule Test",
    },
    {
      icon: Wrench,
      title: "Professional Installation",
      description:
        "Expert installation by certified technicians ensuring optimal performance and longevity.",
      features: [
        "Free installation with purchase",
        "Certified technicians",
        "Quality assurance",
        "System testing & setup",
        "User training included",
      ],
      cta: "Book Installation",
    },
    {
      icon: Settings,
      title: "Annual Maintenance",
      description:
        "Comprehensive maintenance packages to keep your system running at peak efficiency.",
      features: [
        "Filter replacement",
        "System cleaning",
        "Performance check",
        "Parts inspection",
        "Priority support",
      ],
      cta: "View Packages",
    },
    {
      icon: Shield,
      title: "Filter Replacement",
      description:
        "Timely filter replacement with genuine parts to maintain water quality and system efficiency.",
      features: [
        "Genuine OEM filters",
        "Scheduled reminders",
        "Quick replacement",
        "Quality guarantee",
        "Disposal service",
      ],
      cta: "Order Filters",
    },
    {
      icon: Award,
      title: "Repair Services",
      description:
        "Fast and reliable repair services for all types of water filtration systems.",
      features: [
        "Same-day service available",
        "Genuine spare parts",
        "Warranty repairs",
        "Experienced technicians",
        "90-day service warranty",
      ],
      cta: "Request Repair",
    },
    {
      icon: Clock,
      title: "Commercial Services",
      description:
        "Tailored solutions for businesses with ongoing support and maintenance contracts.",
      features: [
        "Custom solutions",
        "Bulk installations",
        "Preventive maintenance",
        "24/7 emergency support",
        "Service level agreements",
      ],
      cta: "Contact Sales",
    },
  ];

  const maintenancePackages = [
    {
      name: "Basic Package",
      price: "AED 299/year",
      features: [
        "1 annual service visit",
        "Filter inspection",
        "System cleaning",
        "Performance check",
        "Phone support",
      ],
      popular: false,
    },
    {
      name: "Standard Package",
      price: "AED 599/year",
      features: [
        "2 service visits per year",
        "1 filter replacement",
        "Complete system check",
        "Parts cleaning",
        "Priority phone support",
        "10% discount on parts",
      ],
      popular: true,
    },
    {
      name: "Premium Package",
      price: "AED 999/year",
      features: [
        "4 service visits per year",
        "2 filter replacements",
        "Complete maintenance",
        "Emergency call-out",
        "24/7 priority support",
        "20% discount on parts",
        "Extended warranty",
      ],
      popular: false,
    },
  ];

  return (
    <div className="flex flex-col">
      {/* Page Header */}
      <section className="bg-gradient-to-br from-primary/5 to-accent/5 py-12 md:py-16">
        <div className="container">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Services</h1>
            <p className="text-lg text-muted-foreground">
              Comprehensive water filtration services from consultation to installation,
              maintenance, and repair. We're with you every step of the way to ensure pure,
              safe water for your home or business.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-12 md:py-16">
        <div className="container">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="bg-primary/10 w-14 h-14 rounded-lg flex items-center justify-center mb-4">
                    <service.icon className="h-7 w-7 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                  <p className="text-muted-foreground mb-4">{service.description}</p>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm">
                        <CheckCircle className="h-4 w-4 text-accent flex-shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Link href="/contact">
                    <Button className="w-full">{service.cta}</Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Maintenance Packages */}
      <section className="py-12 md:py-16 bg-muted/30">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Annual Maintenance Packages
            </h2>
            <p className="text-lg text-muted-foreground">
              Choose the perfect maintenance plan to keep your water filtration system running
              optimally year-round
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {maintenancePackages.map((pkg, index) => (
              <Card
                key={index}
                className={`relative ${
                  pkg.popular ? "border-2 border-primary shadow-lg" : ""
                }`}
              >
                {pkg.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <span className="bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                <CardContent className="p-6">
                  <h3 className="text-2xl font-bold mb-2">{pkg.name}</h3>
                  <div className="text-3xl font-bold text-primary mb-6">{pkg.price}</div>
                  <ul className="space-y-3 mb-8">
                    {pkg.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Link href="/contact">
                    <Button
                      className="w-full"
                      variant={pkg.popular ? "default" : "outline"}
                      size="lg"
                    >
                      Subscribe Now
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-8">
            <p className="text-sm text-muted-foreground">
              All packages include genuine parts and certified technicians. Custom packages
              available for commercial clients.
            </p>
          </div>
        </div>
      </section>

      {/* Service Process */}
      <section className="py-12 md:py-16">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Service Process</h2>
            <p className="text-lg text-muted-foreground">
              Simple, transparent, and customer-focused approach to water filtration services
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Consultation",
                description:
                  "Free consultation to understand your water quality needs and requirements",
              },
              {
                step: "02",
                title: "Water Testing",
                description:
                  "Comprehensive water analysis to determine the best filtration solution",
              },
              {
                step: "03",
                title: "Installation",
                description:
                  "Professional installation by certified technicians with quality guarantee",
              },
              {
                step: "04",
                title: "Ongoing Support",
                description:
                  "Regular maintenance, filter replacements, and 24/7 customer support",
              },
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-primary">{item.step}</span>
                </div>
                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Our Services */}
      <section className="py-12 md:py-16 bg-primary text-primary-foreground">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Why Choose Our Services?
            </h2>
            <p className="text-lg opacity-90">
              Trusted by thousands of customers across UAE for quality service and support
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Certified Technicians",
                description: "Trained and certified professionals with years of experience",
              },
              {
                title: "Genuine Parts",
                description: "Only authentic OEM parts and filters for guaranteed quality",
              },
              {
                title: "Quick Response",
                description: "Same-day service available for urgent requests",
              },
              {
                title: "Warranty Coverage",
                description: "All services backed by comprehensive warranty",
              },
            ].map((item, index) => (
              <div key={index} className="text-center">
                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-sm opacity-90">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-muted/30">
        <div className="container text-center">
          <h2 className="text-3xl font-bold mb-4">Need Service or Support?</h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Our team is ready to help. Contact us today to schedule a service or get answers to
            your questions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button size="lg">Contact Us</Button>
            </Link>
            <a href="tel:+97142675814">
              <Button size="lg" variant="outline">
                Call: (971) 4 267 5814
              </Button>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
