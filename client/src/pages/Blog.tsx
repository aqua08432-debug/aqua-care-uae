import { Button } from "@/components/ui/button";
import { Calendar, ChevronRight, Search } from "lucide-react";
import { useState } from "react";
import { useLocation } from "wouter";

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  date: string;
  category: string;
  image: string;
  readTime: number;
}

const blogPosts: BlogPost[] = [
  {
    id: "water-quality-uae",
    title: "Water Quality in UAE: What You Need to Know",
    excerpt:
      "Discover the challenges of water quality in the UAE and how proper filtration can protect your family.",
    content: `Water quality is a critical concern in the UAE. While tap water is generally safe, it often contains high levels of minerals, chlorine, and other contaminants that can affect taste and health.

Our comprehensive guide explores:
- Current water quality standards in UAE
- Common contaminants found in tap water
- Health impacts of untreated water
- Benefits of RO filtration systems
- Maintenance tips for optimal water quality

The UAE's water comes primarily from desalination plants, which can leave mineral deposits and salt residue. Installing a proper water filtration system ensures your family has access to clean, safe drinking water.`,
    author: "Aqua Care Team",
    date: "2024-11-15",
    category: "Water Quality",
    image: "/images/ro-installation.jpg",
    readTime: 5,
  },
  {
    id: "ro-system-benefits",
    title: "Benefits of RO Water Filtration Systems",
    excerpt:
      "Learn why RO (Reverse Osmosis) systems are the gold standard for home water purification.",
    content: `Reverse Osmosis (RO) systems have become the most popular choice for home water filtration. Here's why:

RO systems use a semi-permeable membrane to remove up to 99% of dissolved solids, bacteria, viruses, and other contaminants. This makes them incredibly effective at producing pure, clean drinking water.

Key benefits include:
- Superior purification (99% contaminant removal)
- Improved water taste and odor
- Long-lasting filters
- Cost-effective over time
- Environmentally friendly
- Easy maintenance

Whether you're concerned about water quality or simply want the best-tasting water, an RO system is an excellent investment for your home.`,
    author: "Aqua Care Team",
    date: "2024-11-10",
    category: "Technology",
    image: "/images/ro-installation.jpg",
    readTime: 6,
  },
  {
    id: "water-softener-guide",
    title: "Complete Guide to Water Softeners",
    excerpt:
      "Hard water can damage appliances and affect your skin. Learn how water softeners solve this problem.",
    content: `Hard water is a common problem in many areas of the UAE. It contains high levels of calcium and magnesium minerals that can:
- Damage appliances
- Reduce soap effectiveness
- Leave spots on dishes
- Dry out skin and hair

Water softeners use ion exchange technology to remove these minerals, providing numerous benefits:
- Extends appliance lifespan
- Improves soap and detergent effectiveness
- Softer skin and shinier hair
- Cleaner dishes and laundry
- Reduced energy consumption

Our guide covers everything you need to know about choosing and maintaining a water softener system.`,
    author: "Aqua Care Team",
    date: "2024-11-05",
    category: "Water Treatment",
    image: "/images/ro-installation.jpg",
    readTime: 7,
  },
  {
    id: "filter-maintenance",
    title: "How Often Should You Replace Water Filters?",
    excerpt:
      "Proper filter maintenance is crucial for optimal water quality. Here's what you need to know.",
    content: `Regular filter replacement is essential for maintaining your water filtration system's effectiveness. But how often should you replace them?

The answer depends on several factors:
- Water quality and TDS levels
- Daily water consumption
- Filter type
- System design

General guidelines:
- Sediment filters: 3-6 months
- Carbon filters: 6-12 months
- RO membranes: 2-3 years
- UV lamps: 1 year

Regular maintenance ensures your system continues to produce clean, safe water. Neglecting filter replacement can lead to reduced water quality and system damage.

We recommend setting a maintenance schedule and sticking to it for optimal results.`,
    author: "Aqua Care Team",
    date: "2024-10-30",
    category: "Maintenance",
    image: "/images/ro-installation.jpg",
    readTime: 4,
  },
  {
    id: "health-benefits-filtered-water",
    title: "Health Benefits of Drinking Filtered Water",
    excerpt:
      "Discover how filtered water can improve your health and well-being.",
    content: `Drinking clean, filtered water offers numerous health benefits:

1. Removes harmful contaminants
- Bacteria and viruses
- Heavy metals (lead, mercury)
- Pesticides and chemicals
- Chlorine and fluoride

2. Improves digestion
- Better nutrient absorption
- Reduced stomach issues
- Improved hydration

3. Supports immune system
- Fewer waterborne illnesses
- Better overall health
- Increased energy levels

4. Promotes skin health
- Clearer complexion
- Reduced acne
- Better hydration

5. Supports weight management
- Increased water consumption
- Better metabolism
- Reduced sugary drink intake

Investing in a quality water filtration system is an investment in your family's health.`,
    author: "Aqua Care Team",
    date: "2024-10-25",
    category: "Health",
    image: "/images/ro-installation.jpg",
    readTime: 5,
  },
  {
    id: "commercial-water-solutions",
    title: "Water Filtration Solutions for Businesses",
    excerpt:
      "Explore how commercial water filtration systems can benefit your business.",
    content: `Businesses in the UAE face unique water quality challenges. Whether you run a restaurant, hotel, or office, having access to clean water is essential.

Commercial water filtration systems offer:
- High-capacity filtration
- Consistent water quality
- Cost savings over time
- Improved product quality (for food/beverage businesses)
- Employee health and satisfaction
- Compliance with health standards

Our commercial solutions include:
- Whole-house RO systems
- Water coolers and dispensers
- Specialized filtration for specific industries
- Maintenance and support services

Let us help you find the perfect water solution for your business needs.`,
    author: "Aqua Care Team",
    date: "2024-10-20",
    category: "Business",
    image: "/images/ro-installation.jpg",
    readTime: 6,
  },
];

export default function Blog() {
  const [, navigate] = useLocation();
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const categories = Array.from(new Set(blogPosts.map((post) => post.category)));

  const filteredPosts = blogPosts.filter((post) => {
    const matchesSearch =
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = !selectedCategory || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-primary to-accent py-16">
        <div className="container max-w-6xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 animate-fade-in-up">
            Water Filtration Blog
          </h1>
          <p className="text-xl text-white/90 animate-fade-in-up">
            Expert insights and tips for clean, safe water
          </p>
        </div>
      </div>

      {/* Search & Filter */}
      <div className="container max-w-6xl mx-auto px-4 py-12">
        <div className="mb-8 animate-fade-in-up">
          <div className="relative mb-6">
            <Search className="absolute left-4 top-3 w-5 h-5 text-muted-foreground" />
            <input
              type="text"
              placeholder="Search articles..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap gap-2">
            <Button
              variant={selectedCategory === null ? "default" : "outline"}
              size="sm"
              onClick={() => setSelectedCategory(null)}
            >
              All Articles
            </Button>
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </Button>
            ))}
          </div>
        </div>

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPosts.map((post, i) => (
            <article
              key={post.id}
              className="card-premium animate-fade-in-up stagger-item overflow-hidden cursor-pointer"
              onClick={() => navigate(`/blog/${post.id}`)}
            >
              {/* Image */}
              <div className="aspect-video bg-secondary overflow-hidden">
                <img
                  src={post.image}
                  alt={`${post.title} - Aqua Care Water Blog UAE`}
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                  loading="lazy"
                  width={400}
                  height={225}
                />
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-semibold text-accent bg-accent/10 px-3 py-1 rounded-full">
                    {post.category}
                  </span>
                  <span className="text-xs text-muted-foreground">{post.readTime} min read</span>
                </div>

                <h3 className="text-xl font-bold mb-3 line-clamp-2 hover:text-accent transition-colors">
                  {post.title}
                </h3>

                <p className="text-muted-foreground text-sm mb-4 line-clamp-2">{post.excerpt}</p>

                <div className="flex items-center justify-between pt-4 border-t border-border">
                  <div className="flex items-center gap-2 text-xs text-muted-foreground">
                    <Calendar className="w-4 h-4" />
                    {new Date(post.date).toLocaleDateString("en-US", {
                      month: "short",
                      day: "numeric",
                      year: "numeric",
                    })}
                  </div>
                  <ChevronRight className="w-4 h-4 text-primary" />
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* No Results */}
        {filteredPosts.length === 0 && (
          <div className="text-center py-12">
            <p className="text-lg text-muted-foreground mb-4">No articles found</p>
            <Button onClick={() => setSearchTerm("")}>Clear search</Button>
          </div>
        )}
      </div>

      {/* Newsletter Section */}
      <div className="bg-secondary/50 py-16 mt-12">
        <div className="container max-w-2xl mx-auto px-4 text-center animate-fade-in-up">
          <h2 className="text-3xl font-bold mb-4">Stay Updated</h2>
          <p className="text-muted-foreground mb-6">
            Subscribe to our newsletter for the latest water filtration tips and industry news.
          </p>
          <div className="flex gap-2">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
            />
            <Button>Subscribe</Button>
          </div>
        </div>
      </div>
    </div>
  );
}
