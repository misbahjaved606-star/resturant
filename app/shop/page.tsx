import { Container } from "@/components/container";
import { Heading } from "@/components/heading";
import { Subheading } from "@/components/subheading";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { BlurImage } from "@/components/blur-image";
import { Search, Filter, ShoppingBag, MessageCircle } from "lucide-react";
import { products, categories } from "@/lib/products";

export default function ShopPage() {
  return (
    <main className="min-h-screen bg-white pt-32 pb-20">
      <Container>
        <div className="text-center mb-12">
          <Heading className="text-black">Shop Our Collection</Heading>
          <Subheading className="text-neutral-600 mt-4">
            Discover premium branded cut pieces, fashion wear, and accessories
          </Subheading>
        </div>

        {/* Search & Filter */}
        <div className="flex flex-col md:flex-row gap-4 mb-12">
          <div className="relative flex-1">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-neutral-400" />
            <Input
              placeholder="Search products..."
              className="pl-12 h-12 border-neutral-300 focus:border-amber-600"
            />
          </div>
          <Button className="h-12 bg-black text-white hover:bg-amber-600 px-6">
            <Filter className="mr-2 h-4 w-4" /> Filters
          </Button>
        </div>

        {/* Category Pills */}
        <div className="flex flex-wrap gap-3 mb-12">
          <Badge className="bg-amber-600 text-white px-5 py-2 cursor-pointer hover:bg-amber-700">
            All Products
          </Badge>
          {categories.map((cat) => (
            <Badge
              key={cat}
              variant="outline"
              className="border-black text-black px-5 py-2 cursor-pointer hover:bg-black hover:text-white"
            >
              {cat}
            </Badge>
          ))}
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {products.map((product) => (
            <div
              key={product.id}
              className="group border border-neutral-200 hover:border-amber-600 transition-all duration-300 bg-white"
            >
              <div className="relative aspect-[3/4] overflow-hidden bg-neutral-100">
                <BlurImage
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                {product.isNew && (
                  <Badge className="absolute top-3 left-3 bg-amber-600 text-white">
                    New
                  </Badge>
                )}
                {product.isBestSeller && (
                  <Badge className="absolute top-3 right-3 bg-black text-white">
                    Best Seller
                  </Badge>
                )}
              </div>
              <div className="p-5">
                <p className="text-xs text-amber-600 font-medium uppercase tracking-wider mb-1">
                  {product.category}
                </p>
                <h3 className="text-black font-semibold text-lg mb-2 line-clamp-1">
                  {product.name}
                </h3>
                <p className="text-neutral-600 text-sm mb-4 line-clamp-2">
                  {product.description}
                </p>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-2xl font-bold text-black">
                    PKR {product.price.toLocaleString()}
                  </span>
                </div>
                <div className="flex gap-2">
                  <Button
                    size="sm"
                    className="flex-1 bg-black text-white hover:bg-amber-600"
                  >
                    <ShoppingBag className="mr-2 h-4 w-4" /> Add to Cart
                  </Button>
                  <Button
                    size="sm"
                    variant="outline"
                    className="border-green-600 text-green-600 hover:bg-green-600 hover:text-white"
                    asChild
                  >
                    <a
                      href={`https://wa.me/923465617880?text=Hi, I'm interested in ${encodeURIComponent(product.name)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <MessageCircle className="h-4 w-4" />
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </main>
  );
}
