"use client";

import { Container } from "@/components/container";
import { Heading } from "@/components/heading";
import { Subheading } from "@/components/subheading";
import { ProductCard, Product } from "@/components/product-card";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const PRODUCT_DRES = "https://lrggyvioreorxttbasgi.supabase.co/storage/v1/object/public/app-assets/22326/images/1780821097669-product-dress-1";
const PRODUCT_MENS = "https://lrggyvioreorxttbasgi.supabase.co/storage/v1/object/public/app-assets/22326/images/1780821099489-product-mens-1";
const PRODUCT_BAG = "https://lrggyvioreorxttbasgi.supabase.co/storage/v1/object/public/app-assets/22326/images/1780821102698-product-bag-1";
const PRODUCT_FABRIC = "https://lrggyvioreorxttbasgi.supabase.co/storage/v1/object/public/app-assets/22326/images/1780821103641-product-fabric-1";
const PRODUCT_COSM = "https://lrggyvioreorxttbasgi.supabase.co/storage/v1/object/public/app-assets/22326/images/1780821105508-product-cosmetics";
const PRODUCT_ACC = "https://lrggyvioreorxttbasgi.supabase.co/storage/v1/object/public/app-assets/22326/images/1780821106525-product-accessories";

export const featuredProducts: Product[] = [
  { id: 1, name: "Embroidered Lawn Suit", price: 4500, originalPrice: 6000, image: PRODUCT_DRES, category: "Women's Wear", badge: "Sale" },
  { id: 2, name: "Premium Cotton Shalwar Kameez", price: 3200, image: PRODUCT_MENS, category: "Men's Wear" },
  { id: 3, name: "Designer Leather Handbag", price: 2800, originalPrice: 3500, image: PRODUCT_BAG, category: "Handbags", badge: "Bestseller" },
  { id: 4, name: "Branded Cut Piece - 3 Meter", price: 5500, image: PRODUCT_FABRIC, category: "Cut Pieces" },
  { id: 5, name: "Luxury Cosmetics Set", price: 1800, image: PRODUCT_COSM, category: "Cosmetics" },
  { id: 6, name: "Fashion Accessories Bundle", price: 1200, originalPrice: 1800, image: PRODUCT_ACC, category: "Accessories", badge: "New" },
  { id: 7, name: "Chiffon Embroidered Dress", price: 5800, image: PRODUCT_DRES, category: "Dresses", badge: "New Arrival" },
  { id: 8, name: "Branded Formal Shirt", price: 2200, image: PRODUCT_MENS, category: "Men's Wear" },
];

export const newArrivals: Product[] = [
  { id: 9, name: "Velvet Bridal Collection", price: 8500, image: PRODUCT_DRES, category: "Dresses", badge: "New" },
  { id: 10, name: "Designer Watch & Wallet Set", price: 3500, image: PRODUCT_ACC, category: "Accessories", badge: "New" },
  { id: 11, name: "Silk Cut Piece - Premium", price: 6800, image: PRODUCT_FABRIC, category: "Cut Pieces", badge: "New" },
  { id: 12, name: "Branded Handbag - Limited", price: 4200, image: PRODUCT_BAG, category: "Handbags", badge: "New" },
];

export const bestSellers: Product[] = [
  { id: 13, name: "Classic Black Handbag", price: 2500, originalPrice: 3200, image: PRODUCT_BAG, category: "Handbags", badge: "Bestseller" },
  { id: 14, name: "Summer Lawn Collection", price: 3800, image: PRODUCT_DRES, category: "Women's Wear", badge: "Bestseller" },
  { id: 15, name: "Men's Branded Kurta", price: 2800, image: PRODUCT_MENS, category: "Men's Wear", badge: "Bestseller" },
  { id: 16, name: "Makeup Essentials Kit", price: 2200, image: PRODUCT_COSM, category: "Cosmetics", badge: "Bestseller" },
];

export function FeaturedProducts() {
  return (
    <section className="bg-white py-20">
      <Container>
        <div className="mb-12 text-center">
          <Subheading>Curated for you</Subheading>
          <Heading>Featured Products</Heading>
        </div>
        <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4 md:gap-6">
          {featuredProducts.slice(0, 8).map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
        <div className="mt-12 text-center">
          <Button asChild size="lg" variant="outline" className="border-black text-black hover:bg-black hover:text-yellow-400">
            <Link href="/shop">View All Products</Link>
          </Button>
        </div>
      </Container>
    </section>
  );
}

export function NewArrivals() {
  return (
    <section className="bg-gray-50 py-20">
      <Container>
        <div className="mb-12 text-center">
          <Subheading>Just Landed</Subheading>
          <Heading>New Arrivals</Heading>
        </div>
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-6">
          {newArrivals.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </Container>
    </section>
  );
}

export function BestSellers() {
  return (
    <section className="bg-black py-20 text-white">
      <Container>
        <div className="mb-12 text-center">
          <Subheading className="text-yellow-400">Customer Favorites</Subheading>
          <Heading className="text-white">Best Selling Products</Heading>
        </div>
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-6">
          {bestSellers.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </Container>
    </section>
  );
}
