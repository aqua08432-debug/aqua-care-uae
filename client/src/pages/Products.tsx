import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, Filter } from "lucide-react";
import { useState } from "react";
import { Link } from "wouter";

type ProductCategory = "all" | "residential" | "commercial" | "industrial" | "softeners";

interface Product {
  id: string;
  name: string;
  category: ProductCategory;
  description: string;
  price: string;
  features: string[];
  image: string;
  badge?: string;
}

const products: Product[] = [
  {
    id: "six-stage-ro",
    name: "Six Stage RO Water Filter",
    category: "residential",
    description:
      "Advanced 6-stage filtration and reverse osmosis process that effectively removes dissolved salts, heavy metals, chemicals, chlorine, and odors from UAE water supply",
    price: "Contact for Quote",
    features: ["6-Stage RO", "Removes Heavy Metals", "Chlorine Removal", "Free Installation"],
    image: "/images/products/six-stage-ro.jpg",
    badge: "Best Seller",
  },
  {
    id: "kent-sterling-star",
    name: "KENT Sterling Star Mineral RO Water Purifier",
    category: "residential",
    description:
      "Premium under-the-counter purification system with RO + UV + UF + Alkaline + Copper + TDS Control technology, featuring digital display for real-time monitoring",
    price: "Contact for Quote",
    features: ["RO+UV+UF", "Alkaline+Copper", "Digital Display", "TDS Control"],
    image: "/images/products/kent-sterling-star.jpg",
    badge: "Premium",
  },
  {
    id: "kent-sterling-plus",
    name: "KENT Sterling+ Mineral RO Water Purifier",
    category: "residential",
    description:
      "Compact under-counter RO water purifier with transparent body design, providing 100% safe and clean drinking water with mineral retention technology",
    price: "Contact for Quote",
    features: ["RO+UV+UF", "Compact Design", "Mineral Retention", "Save Water Tech"],
    image: "/images/products/kent-sterling-plus.jpg",
    badge: "Popular",
  },
  {
    id: "kent-smart-alkalizer",
    name: "KENT Smart Alkalizer Water Purifier",
    category: "residential",
    description:
      "Advanced alkaline water purification system that enhances pH levels while removing impurities, perfect for health-conscious families in UAE",
    price: "Contact for Quote",
    features: ["Alkaline Water", "pH Enhancement", "Smart Technology", "Mineral RO"],
    image: "/images/ro-installation.jpg",
  },
  {
    id: "kent-prime-plus",
    name: "KENT Prime Plus Mineral RO Water Purifier",
    category: "residential",
    description:
      "Wall-mounted water purification system with save water technology, featuring up to 60% water recovery and digital display for filter life monitoring",
    price: "Contact for Quote",
    features: ["Wall Mount", "60% Water Recovery", "Digital Display", "Mineral RO"],
    image: "/images/products/kent-prime-plus.jpg",
  },
  {
    id: "kent-pearl",
    name: "KENT Pearl Mineral RO",
    category: "residential",
    description:
      "Elegant countertop water purifier with advanced RO+UV+UF technology, perfect for modern UAE kitchens seeking both performance and aesthetics",
    price: "Contact for Quote",
    features: ["RO+UV+UF", "Countertop Design", "Mineral Retention", "Elegant Finish"],
    image: "/images/ro-installation.jpg",
  },
  {
    id: "kent-maxx",
    name: "KENT MAXX UV + UF Water Purifier",
    category: "residential",
    description:
      "Dual purification technology using UV and UF for areas with low TDS water, ensuring microbiologically safe drinking water without electricity",
    price: "Contact for Quote",
    features: ["UV+UF", "No Electricity", "Low TDS", "Transparent Design"],
    image: "/images/ro-installation.jpg",
  },
  {
    id: "kent-grand-plus",
    name: "KENT Grand Plus RO Purifier",
    category: "residential",
    description:
      "Transparent design showcasing KENT's patented Mineral RO technology with TDS controller for optimal mineral retention and water purity",
    price: "Contact for Quote",
    features: ["Mineral RO", "TDS Controller", "Transparent Design", "Wall Mount"],
    image: "/images/products/kent-grand-plus.jpg",
  },
  {
    id: "commercial-200",
    name: "Commercial RO 200 GPD System",
    category: "commercial",
    description:
      "High-capacity 5-stage RO system perfect for offices, restaurants, and cafes across UAE, delivering consistent pure water for commercial needs",
    price: "From AED 2,499",
    features: ["200 GPD", "5-Stage RO", "Booster Pump", "Professional Setup"],
    image: "/images/ro-installation.jpg",
  },
  {
    id: "commercial-400",
    name: "Commercial RO 400 GPD System",
    category: "commercial",
    description:
      "Medium-capacity system for growing businesses and larger establishments, featuring auto-flush and low maintenance design",
    price: "From AED 3,999",
    features: ["400 GPD", "5-Stage RO", "Auto Flush", "Low Maintenance"],
    image: "/images/ro-installation.jpg",
  },
  {
    id: "commercial-800",
    name: "Commercial RO 800 GPD System",
    category: "commercial",
    description:
      "High-output system for hotels, large restaurants, and commercial facilities with automatic controls and extended warranty coverage",
    price: "From AED 6,499",
    features: ["800 GPD", "Heavy Duty", "Auto Controls", "Extended Warranty"],
    image: "/images/ro-installation.jpg",
  },
  {
    id: "industrial-ro",
    name: "Industrial RO System (Up to 50,000 GPD)",
    category: "industrial",
    description:
      "Custom-designed industrial water treatment solutions for large-scale operations across UAE, with full automation and 24/7 technical support",
    price: "Contact for Quote",
    features: ["Up to 50,000 GPD", "Custom Design", "Full Automation", "24/7 Support"],
    image: "/images/ro-installation.jpg",
    badge: "Enterprise",
  },
  {
    id: "water-softener",
    name: "Water Softener System",
    category: "softeners",
    description:
      "Remove hardness and scale from UAE water supply, protecting your appliances and plumbing with auto-regeneration technology",
    price: "From AED 1,899",
    features: ["Auto Regeneration", "Salt-based", "Flow Meter", "5 Year Warranty"],
    image: "/images/ro-installation.jpg",
  },
  {
    id: "water-softener-wh",
    name: "Water Softener with Whole House Filter",
    category: "softeners",
    description:
      "Complete solution combining water softening with whole house filtration, ideal for villas and large homes in UAE",
    price: "From AED 3,499",
    features: ["Softener + Filter", "Whole House", "Auto Controls", "Premium Quality"],
    image: "/images/ro-installation.jpg",
  },
];

export default function Products() {
  const [selectedCategory, setSelectedCategory] = useState<ProductCategory>("all");

  const categories = [
    { id: "all" as ProductCategory, name: "All Products", count: products.length },
    {
      id: "residential" as ProductCategory,
      name: "Residential RO",
      count: products.filter((p) => p.category === "residential").length,
    },
    {
      id: "commercial" as ProductCategory,
      name: "Commercial RO",
      count: products.filter((p) => p.category === "commercial").length,
    },
    {
      id: "industrial" as ProductCategory,
      name: "Industrial RO",
      count: products.filter((p) => p.category === "industrial").length,
    },
    {
      id: "softeners" as ProductCategory,
      name: "Water Softeners",
      count: products.filter((p) => p.category === "softeners").length,
    },
  ];

  const filteredProducts =
    selectedCategory === "all"
      ? products
      : products.filter((p) => p.category === selectedCategory);

  return (
    <div className="flex flex-col">
      {/* Page Header */}
      <section className="bg-gradient-to-br from-primary/5 to-accent/5 py-12 md:py-16">
        <div className="container">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Products</h1>
            <p className="text-lg text-muted-foreground">
              Explore our comprehensive range of water filtration and purification solutions
              designed specifically for UAE's water quality challenges. From residential to
              industrial, we have the perfect system for your needs.
            </p>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-12 md:py-16">
        <div className="container">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Filters Sidebar */}
            <aside className="lg:w-64 flex-shrink-0">
              <div className="sticky top-20">
                <div className="flex items-center gap-2 mb-4">
                  <Filter className="h-5 w-5" />
                  <h2 className="text-lg font-semibold">Filter by Category</h2>
                </div>
                <div className="space-y-2">
                  {categories.map((category) => (
                    <button
                      key={category.id}
                      onClick={() => setSelectedCategory(category.id)}
                      className={`w-full text-left px-4 py-3 rounded-lg transition-colors ${selectedCategory === category.id
                        ? "bg-primary text-primary-foreground"
                        : "bg-muted hover:bg-muted/80"
                        }`}
                    >
                      <div className="flex justify-between items-center">
                        <span className="font-medium">{category.name}</span>
                        <span
                          className={`text-sm ${selectedCategory === category.id
                            ? "opacity-90"
                            : "text-muted-foreground"
                            }`}
                        >
                          ({category.count})
                        </span>
                      </div>
                    </button>
                  ))}
                </div>

                {/* Contact Card */}
                <Card className="mt-8">
                  <CardContent className="p-6">
                    <h3 className="font-semibold mb-2">Need Help Choosing?</h3>
                    <p className="text-sm text-muted-foreground mb-4">
                      Our experts are here to help you select the perfect water filtration
                      system.
                    </p>
                    <Link href="/contact">
                      <Button className="w-full" size="sm">
                        Contact Us
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              </div>
            </aside>

            {/* Products Grid */}
            <div className="flex-1">
              <div className="mb-6">
                <p className="text-muted-foreground">
                  Showing {filteredProducts.length} product
                  {filteredProducts.length !== 1 ? "s" : ""}
                </p>
              </div>

              <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
                {filteredProducts.map((product) => (
                  <Card
                    key={product.id}
                    className="overflow-hidden group hover:shadow-lg transition-shadow"
                  >
                    <div className="aspect-square bg-white relative overflow-hidden border-b">
                      <img
                        src={product.image}
                        alt={`${product.name} - ${product.category} filtration UAE`}
                        className="w-full h-full object-contain p-4 group-hover:scale-105 transition-transform duration-500"
                        loading="lazy"
                        width={300}
                        height={300}
                      />
                      {product.badge && (
                        <div className="absolute top-4 left-4 bg-accent text-white px-3 py-1 rounded-full text-sm font-semibold shadow-sm">
                          {product.badge}
                        </div>
                      )}
                      <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-semibold text-primary shadow-sm">
                        {product.price}
                      </div>
                    </div>
                    <CardContent className="p-6">
                      <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
                      <p className="text-muted-foreground text-sm mb-4">
                        {product.description}
                      </p>
                      <ul className="space-y-2 mb-6">
                        {product.features.map((feature, i) => (
                          <li key={i} className="flex items-center gap-2 text-sm">
                            <CheckCircle className="h-4 w-4 text-accent flex-shrink-0" />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                      <div className="flex gap-2">
                        <Link href={`/products/${product.id}`} className="flex-1">
                          <Button variant="outline" className="w-full">
                            View Details
                          </Button>
                        </Link>
                        <Link href="/quote" className="flex-1">
                          <Button className="w-full">Get Quote</Button>
                        </Link>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div >
        </div >
      </section >

      {/* CTA Section */}
      < section className="py-16 bg-muted/30" >
        <div className="container text-center">
          <h2 className="text-3xl font-bold mb-4">Can't Find What You're Looking For?</h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            We offer custom water filtration solutions tailored to your specific requirements.
            Contact us for a personalized consultation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/quote">
              <Button size="lg">Request Custom Quote</Button>
            </Link>
            <Link href="/contact">
              <Button size="lg" variant="outline">
                Talk to an Expert
              </Button>
            </Link>
          </div>
        </div>
      </section >
    </div >
  );
}
