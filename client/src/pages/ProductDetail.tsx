import { Button } from "@/components/ui/button";
import ProductShare from "@/components/features/ProductShare";
import { products } from "@/lib/products";
import { ChevronLeft, Heart, ShoppingCart, Star } from "lucide-react";
import { useEffect, useState } from "react";
import { useLocation } from "wouter";
import { APP_URL } from "@/lib/constants";

export default function ProductDetail() {
  const [location, navigate] = useLocation();
  const [product, setProduct] = useState<typeof products[0] | null>(null);
  const [relatedProducts, setRelatedProducts] = useState<typeof products>([]);
  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    // Extract product ID from URL
    const productId = location.split("/product/")[1];
    const foundProduct = products.find((p) => p.id === productId);

    if (foundProduct) {
      setProduct(foundProduct);

      // Get related products from same category
      const related = products
        .filter((p) => p.category === foundProduct.category && p.id !== foundProduct.id)
        .slice(0, 4);
      setRelatedProducts(related);
    }
  }, [location]);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Product not found</h2>
          <Button onClick={() => navigate("/products")}>Back to Products</Button>
        </div>
      </div>
    );
  }

  const jsonLd = {
    "@context": "https://schema.org/",
    "@type": "Product",
    "name": product.name,
    "image": [`${APP_URL}${product.image}`],
    "description": product.description || product.longDescription,
    "brand": {
      "@type": "Brand",
      "name": "KENT"
    },
    "offers": {
      "@type": "Offer",
      "url": `${APP_URL}${location}`,
      "priceCurrency": "AED",
      "price": product.price.replace(/[^0-9.]/g, ""),
      "availability": product.inStock
        ? "https://schema.org/InStock"
        : "https://schema.org/OutOfStock",
    },
  };

  const breadcrumbLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": APP_URL
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Products",
        "item": `${APP_URL}/products`
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": product.name,
        "item": `${APP_URL}${location}`
      }
    ]
  };

  return (
    <div className="min-h-screen bg-background">
      <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      <script type="application/ld+json">{JSON.stringify(breadcrumbLd)}</script>
      {/* Breadcrumb */}
      <div className="bg-secondary/50 py-4">
        <div className="container max-w-6xl mx-auto px-4">
          <button
            onClick={() => navigate("/products")}
            className="flex items-center gap-2 text-primary hover:text-accent transition-colors mb-4"
          >
            <ChevronLeft className="w-4 h-4" />
            Back to Products
          </button>
          <p className="text-sm text-muted-foreground">
            {product.category} &gt; {product.subcategory} &gt; {product.name}
          </p>
        </div>
      </div>

      {/* Product Details */}
      <div className="container max-w-6xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12 animate-fade-in-up">
          {/* Product Image */}
          <div className="flex items-center justify-center bg-secondary rounded-xl p-8 card-hover-lift">
            <img
              src={product.image}
              alt={`${product.name} - Authorized KENT RO System UAE`}
              className="w-full h-auto max-h-96 object-contain"
              loading="lazy"
              width={500}
              height={500}
            />
          </div>

          {/* Product Info */}
          <div className="space-y-6">
            <div>
              <div className="flex items-start justify-between mb-4">
                <div>
                  <p className="text-sm font-semibold text-accent mb-2">{product.category}</p>
                  <h1 className="text-4xl font-bold mb-2">{product.name}</h1>
                  <p className="text-2xl font-bold text-primary">{product.price}</p>
                </div>
                {product.badge && (
                  <span className="bg-accent text-accent-foreground px-4 py-2 rounded-lg text-sm font-semibold">
                    {product.badge}
                  </span>
                )}
              </div>

              {/* Stock Status */}
              <div className="flex items-center gap-2 mb-4">
                <div
                  className={`w-3 h-3 rounded-full ${product.inStock ? "bg-green-500" : "bg-red-500"}`}
                ></div>
                <span className={product.inStock ? "text-green-600" : "text-red-600"}>
                  {product.inStock ? "In Stock" : "Out of Stock"}
                </span>
              </div>

              {/* Rating */}
              <div className="flex items-center gap-2 mb-6">
                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <span className="text-sm text-muted-foreground">(45 reviews)</span>
              </div>
            </div>

            {/* Description */}
            <div>
              <h3 className="font-semibold mb-2">Description</h3>
              <p className="text-muted-foreground">{product.longDescription}</p>
            </div>

            {/* Features */}
            <div>
              <h3 className="font-semibold mb-3">Key Features</h3>
              <ul className="space-y-2">
                {product.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-2 text-sm">
                    <div className="w-2 h-2 bg-accent rounded-full"></div>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-3 pt-6">
              <Button className="flex-1 gap-2" size="lg">
                <ShoppingCart className="w-5 h-5" />
                Get Quote
              </Button>
              <Button
                variant="outline"
                size="lg"
                onClick={() => setIsFavorite(!isFavorite)}
                className={isFavorite ? "bg-red-50" : ""}
              >
                <Heart className={`w-5 h-5 ${isFavorite ? "fill-red-500 text-red-500" : ""}`} />
              </Button>
              <ProductShare productName={product.name} productDescription={product.description} />
            </div>
          </div>
        </div>

        {/* Specifications */}
        <div className="bg-secondary/50 rounded-xl p-8 mb-12 animate-fade-in-up">
          <h2 className="text-2xl font-bold mb-6">Specifications</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {Object.entries(product.specifications).map(([key, value]) => (
              <div key={key} className="flex justify-between items-center pb-4 border-b border-border">
                <span className="font-semibold text-muted-foreground">{key}</span>
                <span className="font-bold">{value}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <div className="animate-fade-in-up">
            <h2 className="text-2xl font-bold mb-8">Related Products</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {relatedProducts.map((relProduct, i) => (
                <div
                  key={relProduct.id}
                  className="card-premium animate-fade-in-up stagger-item"
                >
                  <div className="aspect-square bg-secondary rounded-lg mb-4 flex items-center justify-center overflow-hidden">
                    <img
                      src={relProduct.image}
                      alt={`${relProduct.name} - Quality water filter in UAE`}
                      className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                      loading="lazy"
                      width={200}
                      height={200}
                    />
                  </div>
                  <h3 className="font-semibold mb-2 line-clamp-2">{relProduct.name}</h3>
                  <p className="text-sm text-muted-foreground mb-4">{relProduct.price}</p>
                  <Button
                    variant="outline"
                    size="sm"
                    className="w-full"
                    onClick={() => navigate(`/product/${relProduct.id}`)}
                  >
                    View Details
                  </Button>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
