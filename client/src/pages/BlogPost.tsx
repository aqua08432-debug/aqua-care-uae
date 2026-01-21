import { Button } from "@/components/ui/button";
import ProductShare from "@/components/features/ProductShare";
import { Calendar, ChevronLeft, Clock, User } from "lucide-react";
import { useEffect, useState } from "react";
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
];

export default function BlogPost() {
  const [location, navigate] = useLocation();
  const [post, setPost] = useState<BlogPost | null>(null);

  useEffect(() => {
    const postId = location.split("/blog/")[1];
    const foundPost = blogPosts.find((p) => p.id === postId);
    setPost(foundPost || null);
  }, [location]);

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Article not found</h2>
          <Button onClick={() => navigate("/blog")}>Back to Blog</Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-secondary/50 py-8">
        <div className="container max-w-3xl mx-auto px-4">
          <button
            onClick={() => navigate("/blog")}
            className="flex items-center gap-2 text-primary hover:text-accent transition-colors mb-6"
          >
            <ChevronLeft className="w-4 h-4" />
            Back to Blog
          </button>

          <h1 className="text-4xl md:text-5xl font-bold mb-4 animate-fade-in-up">{post.title}</h1>

          <div className="flex flex-wrap gap-4 text-sm text-muted-foreground animate-fade-in-up">
            <div className="flex items-center gap-2">
              <User className="w-4 h-4" />
              {post.author}
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              {new Date(post.date).toLocaleDateString("en-US", {
                month: "long",
                day: "numeric",
                year: "numeric",
              })}
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              {post.readTime} min read
            </div>
            <span className="bg-accent/10 text-accent px-3 py-1 rounded-full">{post.category}</span>
          </div>
        </div>
      </div>

      {/* Featured Image */}
      <div className="bg-secondary py-8">
        <div className="container max-w-3xl mx-auto px-4">
          <img
            src={post.image}
            alt={post.title}
            className="w-full h-96 object-cover rounded-xl animate-fade-in-up"
          />
        </div>
      </div>

      {/* Content */}
      <div className="container max-w-3xl mx-auto px-4 py-12">
        <article className="prose prose-lg max-w-none animate-fade-in-up">
          {post.content.split("\n\n").map((paragraph, i) => {
            if (paragraph.startsWith("-")) {
              return (
                <ul key={i} className="list-disc list-inside space-y-2 my-4">
                  {paragraph
                    .split("\n")
                    .filter((line) => line.trim())
                    .map((line, j) => (
                      <li key={j} className="text-muted-foreground">
                        {line.replace(/^-\s*/, "")}
                      </li>
                    ))}
                </ul>
              );
            }
            return (
              <p key={i} className="text-muted-foreground leading-relaxed mb-6">
                {paragraph}
              </p>
            );
          })}
        </article>

        {/* Share Section */}
        <div className="mt-12 pt-8 border-t border-border">
          <h3 className="font-semibold mb-4">Share this article</h3>
          <div className="flex gap-3">
            <ProductShare productName={post.title} productDescription={post.excerpt} />
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-12 bg-gradient-to-r from-primary to-accent rounded-xl p-8 text-white text-center animate-fade-in-up">
          <h3 className="text-2xl font-bold mb-4">Ready for Clean, Safe Water?</h3>
          <p className="mb-6">
            Discover our range of water filtration solutions tailored to your needs.
          </p>
          <Button
            size="lg"
            className="bg-white text-primary hover:bg-gray-100"
            onClick={() => navigate("/products")}
          >
            Explore Products
          </Button>
        </div>
      </div>
    </div>
  );
}
