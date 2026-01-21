import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Award, CheckCircle, Heart, Shield, Target, Users } from "lucide-react";
import { Link } from "wouter";

export default function About() {
  return (
    <div className="flex flex-col">
      {/* Page Header */}
      <section className="bg-gradient-to-br from-primary/5 to-accent/5 py-12 md:py-16">
        <div className="container">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">About Aqua Care</h1>
            <p className="text-lg text-muted-foreground">
              Your trusted partner for water filtration solutions in UAE since 2008. We're
              committed to providing pure, safe water for every home and business across the
              Emirates.
            </p>
          </div>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-12 md:py-16">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Story</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Aqua Care Trading LLC was established in 2008 with a simple yet powerful
                  mission: to provide every household and business in the UAE with access to
                  pure, safe drinking water. Understanding the unique water quality challenges
                  in the region, we set out to become the most trusted name in water
                  filtration solutions.
                </p>
                <p>
                  Over the past 15+ years, we've grown from a small startup to become the
                  authorized distributor of KENT RO Systems in the UAE, serving thousands of
                  satisfied customers across all seven emirates. Our success is built on a
                  foundation of quality products, expert service, and unwavering commitment to
                  customer satisfaction.
                </p>
                <p>
                  Today, Aqua Care stands as a leader in the water filtration industry,
                  offering a comprehensive range of solutions from residential RO systems to
                  large-scale industrial water treatment plants. Our team of certified
                  technicians and water quality experts work tirelessly to ensure every
                  customer receives the perfect solution for their needs.
                </p>
              </div>
            </div>
            <div className="relative">
              <img
                src="/images/family-home.jpg"
                alt="Happy family enjoying clean water from Aqua Care RO system"
                className="rounded-2xl shadow-xl"
                loading="lazy"
                width={600}
                height={400}
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-xl">
                <div className="text-4xl font-bold text-primary mb-1">15+</div>
                <div className="text-sm text-muted-foreground">Years of Excellence</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="py-12 md:py-16 bg-muted/30">
        <div className="container">
          <div className="grid md:grid-cols-3 gap-8">
            <Card>
              <CardContent className="pt-6">
                <div className="bg-primary/10 w-14 h-14 rounded-lg flex items-center justify-center mb-4">
                  <Target className="h-7 w-7 text-primary" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
                <p className="text-muted-foreground">
                  To provide every home and business in the UAE with access to pure, safe
                  drinking water through innovative filtration solutions and exceptional
                  service.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="bg-primary/10 w-14 h-14 rounded-lg flex items-center justify-center mb-4">
                  <Shield className="h-7 w-7 text-primary" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
                <p className="text-muted-foreground">
                  To be the most trusted and preferred water filtration solutions provider in
                  the Middle East, setting industry standards for quality and customer service.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="bg-primary/10 w-14 h-14 rounded-lg flex items-center justify-center mb-4">
                  <Heart className="h-7 w-7 text-primary" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Our Values</h3>
                <p className="text-muted-foreground">
                  Quality, integrity, customer focus, and innovation drive everything we do.
                  We're committed to excellence in every interaction and installation.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-12 md:py-16">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose Aqua Care?</h2>
            <p className="text-lg text-muted-foreground">
              We're more than just a water filter supplier - we're your long-term partner in
              health and wellness
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                icon: Award,
                title: "Authorized KENT Distributor",
                description:
                  "Official distributor of KENT RO Systems in UAE, ensuring genuine products with full manufacturer warranty and support.",
              },
              {
                icon: Users,
                title: "10,000+ Happy Customers",
                description:
                  "Trusted by thousands of families and businesses across all seven emirates for over 15 years.",
              },
              {
                icon: Shield,
                title: "Quality Assurance",
                description:
                  "All products undergo rigorous quality checks and come with comprehensive warranties and after-sales support.",
              },
              {
                icon: CheckCircle,
                title: "Expert Team",
                description:
                  "Certified technicians and water quality experts with extensive training and years of experience.",
              },
            ].map((item, index) => (
              <div key={index} className="flex gap-4">
                <div className="bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                  <item.icon className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                  <p className="text-muted-foreground">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications & Partnerships */}
      <section className="py-12 md:py-16 bg-primary text-primary-foreground">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Certifications & Partnerships
            </h2>
            <p className="text-lg opacity-90">
              Recognized and trusted by leading organizations and platforms
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "KENT Authorized",
                description: "Official distributor for UAE region",
              },
              {
                title: "ISO Certified",
                description: "Quality management standards",
              },
              {
                title: "Dubai Chamber",
                description: "Registered member",
              },
              {
                title: "Available on Major Platforms",
                description: "Amazon, Noon, Lulu, Sharaf DG",
              },
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="bg-white/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="h-8 w-8" />
                </div>
                <h3 className="font-semibold mb-2">{item.title}</h3>
                <p className="text-sm opacity-90">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 md:py-16">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { number: "15+", label: "Years Experience" },
              { number: "10,000+", label: "Happy Customers" },
              { number: "7", label: "Emirates Covered" },
              { number: "24/7", label: "Support Available" },
            ].map((stat, index) => (
              <div key={index}>
                <div className="text-4xl md:text-5xl font-bold text-primary mb-2">
                  {stat.number}
                </div>
                <div className="text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Commitment */}
      <section className="py-12 md:py-16 bg-muted/30">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">
              Our Commitment to You
            </h2>
            <div className="space-y-4 text-muted-foreground">
              <p className="text-center text-lg">
                At Aqua Care, we understand that clean water is not just a commodity - it's a
                fundamental necessity for health and well-being. That's why we're committed to:
              </p>
              <div className="grid md:grid-cols-2 gap-6 mt-8">
                {[
                  "Providing only genuine, certified products",
                  "Offering transparent pricing with no hidden costs",
                  "Ensuring professional installation and setup",
                  "Delivering responsive customer support",
                  "Maintaining long-term relationships with our customers",
                  "Continuously improving our products and services",
                ].map((commitment, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle className="h-6 w-6 text-accent flex-shrink-0 mt-0.5" />
                    <span>{commitment}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="container text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Experience Pure Water?</h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join thousands of satisfied customers who trust Aqua Care for their water
            filtration needs. Get started today!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/products">
              <Button size="lg">Explore Products</Button>
            </Link>
            <Link href="/contact">
              <Button size="lg" variant="outline">
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
