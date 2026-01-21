import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Award,
  CheckCircle,
  Droplet,
  Factory,
  Home as HomeIcon,
  Phone,
  Shield,
  Store,
  ThumbsUp,
  Users,
  Wrench,
} from "lucide-react";
import { Link } from "wouter";

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary/5 via-background to-accent/5 py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/water-drop.jpg')] opacity-5 bg-cover bg-center"></div>
        <div className="container relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="inline-block">
                <span className="bg-accent/10 text-accent px-4 py-2 rounded-full text-sm font-semibold">
                  Authorized KENT Distributor for UAE
                </span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                Pure, Safe Water for Every UAE Home & Business
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground">
                Leading water filtration solutions provider in Dubai, Sharjah, and Ajman.
                Premium RO systems, water softeners, and complete purification solutions for
                homes, offices, and industries.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/quote">
                  <Button size="lg" className="text-lg px-8 bg-accent hover:bg-accent/90">
                    Get Free Quote
                  </Button>
                </Link>
                <a href="tel:+97142675814">
                  <Button size="lg" variant="outline" className="text-lg px-8 gap-2">
                    <Phone className="h-5 w-5" />
                    Call Us Now
                  </Button>
                </a>
              </div>
              <div className="flex items-center gap-8 pt-4">
                <div>
                  <div className="text-3xl font-bold text-primary">15+</div>
                  <div className="text-sm text-muted-foreground">Years Experience</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary">10,000+</div>
                  <div className="text-sm text-muted-foreground">Happy Customers</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary">24/7</div>
                  <div className="text-sm text-muted-foreground">Support</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <img
                src="/images/family-drinking-water.jpg"
                alt="Family enjoying pure, safe water from Aqua Care RO system"
                className="rounded-2xl shadow-2xl"
                loading="lazy"
                width={600}
                height={400}
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-xl">
                <div className="flex items-center gap-4">
                  <div className="bg-accent/10 p-3 rounded-full">
                    <Shield className="h-8 w-8 text-accent" />
                  </div>
                  <div>
                    <div className="font-bold text-lg">100% Safe</div>
                    <div className="text-sm text-muted-foreground">Certified Quality</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Problem-Solution Section */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Why Water Filtration Matters in UAE
            </h2>
            <p className="text-lg text-muted-foreground">
              UAE's water contains high TDS levels, chlorine, and minerals that affect health
              and appliances. Our advanced RO systems ensure pure, safe drinking water for your
              family.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <Card>
              <CardContent className="pt-6">
                <div className="bg-destructive/10 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                  <Droplet className="h-6 w-6 text-destructive" />
                </div>
                <h3 className="text-xl font-semibold mb-2">High TDS Levels</h3>
                <p className="text-muted-foreground">
                  UAE tap water often exceeds 500 TDS, containing dissolved minerals that
                  affect taste and health.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <div className="bg-destructive/10 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                  <Droplet className="h-6 w-6 text-destructive" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Chlorine & Chemicals</h3>
                <p className="text-muted-foreground">
                  Chlorine used for disinfection can cause skin irritation and affect water
                  taste and odor.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <div className="bg-accent/10 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                  <CheckCircle className="h-6 w-6 text-accent" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Our Solution</h3>
                <p className="text-muted-foreground">
                  Advanced RO+UV+UF technology removes 99.9% of contaminants while retaining
                  essential minerals.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Premium Products</h2>
            <p className="text-lg text-muted-foreground">
              Choose from our wide range of water purification solutions designed for UAE's
              unique water quality challenges.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "AQUA Care RO System",
                description:
                  "6-stage under-counter RO system with minerals, perfect for UAE homes",
                price: "From AED 899",
                image: "/images/ro-installation.jpg",
                features: ["RO+Minerals", "50 GPD", "Hydro-static Tank", "Free Installation"],
              },
              {
                title: "KENT Excel Plus",
                description:
                  "Most selling RO purifier with RO+UV+UF+TDS controller technology",
                price: "From AED 1,299",
                image: "/images/ro-installation.jpg",
                features: [
                  "RO+UV+UF",
                  "TDS Controller",
                  "Under Counter",
                  "1 Year Warranty",
                ],
              },
              {
                title: "Commercial RO 200 GPD",
                description:
                  "High-capacity system for offices, restaurants, and small businesses",
                price: "From AED 2,499",
                image: "/images/ro-installation.jpg",
                features: ["200 GPD", "5-Stage RO", "Booster Pump", "Professional Setup"],
              },
            ].map((product, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="aspect-video bg-white relative overflow-hidden">
                  <img
                    src={product.image}
                    alt={`${product.title} - High-quality water filtration in UAE`}
                    className="object-cover w-[276px] h-[256px] mt-1 ml-[94px]"
                    loading="lazy"
                  />
                  <div className="absolute top-4 right-4 bg-accent text-white px-3 py-1 rounded-full text-sm font-semibold">
                    {product.price}
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{product.title}</h3>
                  <p className="text-muted-foreground mb-4">{product.description}</p>
                  <ul className="space-y-2 mb-6">
                    {product.features.map((feature, i) => (
                      <li key={i} className="flex items-center gap-2 text-sm">
                        <CheckCircle className="h-4 w-4 text-accent flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Link href="/products">
                    <Button className="w-full">View Details</Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link href="/products">
              <Button size="lg" variant="outline">
                View All Products
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 md:py-24 bg-primary text-primary-foreground">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose Aqua Care?</h2>
            <p className="text-lg opacity-90">
              Your trusted partner for water filtration solutions across UAE
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Award,
                title: "Authorized KENT Distributor",
                description:
                  "Official distributor of KENT RO systems in UAE with genuine products and warranty",
              },
              {
                icon: Shield,
                title: "15+ Years Experience",
                description:
                  "Serving UAE since 2008 with thousands of satisfied customers across all emirates",
              },
              {
                icon: Wrench,
                title: "Professional Installation",
                description:
                  "Expert technicians provide free installation and setup for all systems",
              },
              {
                icon: Users,
                title: "24/7 Customer Support",
                description:
                  "Round-the-clock support for queries, service requests, and emergencies",
              },
              {
                icon: ThumbsUp,
                title: "Annual Maintenance",
                description:
                  "Comprehensive maintenance packages to keep your system running perfectly",
              },
              {
                icon: Store,
                title: "Available on Major Platforms",
                description:
                  "Find our products on Amazon, Noon, Lulu, Sharaf DG, and Souq.com",
              },
            ].map((item, index) => (
              <div key={index} className="flex gap-4">
                <div className="bg-white/10 w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                  <item.icon className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                  <p className="opacity-90">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Product Categories */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Complete Water Solutions
            </h2>
            <p className="text-lg text-muted-foreground">
              From residential to industrial, we have the perfect water filtration solution for
              your needs
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: HomeIcon,
                title: "Residential RO",
                description: "Perfect for homes and apartments",
                href: "/products/residential",
              },
              {
                icon: Store,
                title: "Commercial RO",
                description: "For offices and restaurants",
                href: "/products/commercial",
              },
              {
                icon: Factory,
                title: "Industrial RO",
                description: "Large-scale water treatment",
                href: "/products/industrial",
              },
              {
                icon: Droplet,
                title: "Water Softeners",
                description: "Remove hardness and scale",
                href: "/products/softeners",
              },
            ].map((category, index) => (
              <Link key={index} href={category.href}>
                <Card className="hover:shadow-lg transition-all hover:scale-105 cursor-pointer h-full">
                  <CardContent className="p-6 text-center">
                    <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                      <category.icon className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="text-lg font-semibold mb-2">{category.title}</h3>
                    <p className="text-sm text-muted-foreground">{category.description}</p>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Serving All of UAE</h2>
            <p className="text-lg text-muted-foreground">
              We provide installation, maintenance, and support across all emirates
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {[
              "Dubai",
              "Sharjah",
              "Ajman",
              "Abu Dhabi",
              "Ras Al Khaimah",
              "Fujairah",
              "Umm Al Quwain",
              "Al Ain",
            ].map((city) => (
              <div
                key={city}
                className="bg-white p-4 rounded-lg text-center font-semibold border-2 border-primary/20 hover:border-primary transition-colors"
              >
                {city}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Customers Say</h2>
            <p className="text-lg text-muted-foreground">
              Join thousands of satisfied customers across UAE
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Ahmed Al Mansoori",
                location: "Dubai",
                rating: 5,
                text: "Excellent service! The KENT Excel Plus has been working perfectly for 2 years. Installation was professional and the water quality is amazing.",
              },
              {
                name: "Sarah Johnson",
                location: "Sharjah",
                rating: 5,
                text: "Best decision for our family's health. The team was very knowledgeable and helped us choose the right system. Highly recommended!",
              },
              {
                name: "Mohammed Hassan",
                location: "Ajman",
                rating: 5,
                text: "Great value for money. The commercial RO system handles our restaurant's needs perfectly. Maintenance service is also excellent.",
              },
            ].map((testimonial, index) => (
              <Card key={index}>
                <CardContent className="pt-6">
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <svg
                        key={i}
                        className="w-5 h-5 text-yellow-400 fill-current"
                        viewBox="0 0 20 20"
                      >
                        <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                      </svg>
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-4">"{testimonial.text}"</p>
                  <div className="font-semibold">{testimonial.name}</div>
                  <div className="text-sm text-muted-foreground">{testimonial.location}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-gradient-to-r from-primary to-accent text-white">
        <div className="container text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready for Pure, Safe Water?
          </h2>
          <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
            Get a free water quality test and expert consultation. Our team will help you choose
            the perfect water filtration solution for your needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/quote">
              <Button
                size="lg"
                variant="secondary"
                className="text-lg px-8 bg-white text-primary hover:bg-white/90"
              >
                Request Free Quote
              </Button>
            </Link>
            <a href="tel:+97142675814">
              <Button
                size="lg"
                variant="outline"
                className="text-lg px-8 border-white text-white hover:bg-white/10"
              >
                <Phone className="h-5 w-5 mr-2" />
                Call: +971 55 112 4947
              </Button>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
