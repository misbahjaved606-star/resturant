"use client";

import { Button } from "@/components/ui/button";
import { ShoppingCart, MessageCircle } from "lucide-react";

export interface Product {
  id: number;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  category: string;
  badge?: string;
}

export function ProductCard({ product }: { product: Product }) {
  const whatsappMsg = encodeURIComponent(`Hi, I'm interested in: ${product.name} - PKR ${product.price}`);
  return (
    <div className="group relative overflow-hidden rounded-xl border border-gray-200 bg-white transition-all hover:shadow-2xl hover:-translate-y-1">
      <div className="relative aspect-[3/4] overflow-hidden bg-gray-100">
        <img
          src={product.image}
          alt={product.name}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        {product.badge && (
          <span className="absolute left-3 top-3 rounded-full bg-yellow-500 px-3 py-1 text-xs font-semibold text-black">
            {product.badge}
          </span>
        )}
        <div className="absolute inset-x-3 bottom-3 flex gap-2 opacity-0 transition-opacity group-hover:opacity-100">
          <Button size="sm" className="flex-1 bg-black text-white hover:bg-yellow-500 hover:text-black">
            <ShoppingCart className="mr-1 h-4 w-4" />
            Add to Cart
          </Button>
          <a
            href={`https://wa.me/923465617880?text=${whatsappMsg}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-9 items-center justify-center rounded-md bg-green-500 px-3 text-white hover:bg-green-600"
          >
            <MessageCircle className="h-4 w-4" />
          </a>
        </div>
      </div>
      <div className="p-4">
        <p className="text-xs uppercase tracking-wider text-gray-500">{product.category}</p>
        <h3 className="mt-1 font-semibold text-gray-900 line-clamp-1">{product.name}</h3>
        <div className="mt-2 flex items-center gap-2">
          <span className="text-lg font-bold text-black">PKR {product.price.toLocaleString()}</span>
          {product.originalPrice && (
            <span className="text-sm text-gray-400 line-through">PKR {product.originalPrice.toLocaleString()}</span>
          )}
        </div>
      </div>
    </div>
  );
}
