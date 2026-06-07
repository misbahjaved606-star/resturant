"use client";

import { Container } from "@/components/container";
import { Heading } from "@/components/heading";
import { Star } from "lucide-react";

const reviews = [
  {
    name: "Ayesha Khan",
    role: "Verified Customer",
    rating: 5,
    text: "Amazing quality branded clothes at unbelievable prices! The lawn collection is gorgeous. Highly recommended for fashion lovers in Islamabad.",
    avatar: "AK",
  },
  {
    name: "Fatima Ahmed",
    role: "Verified Customer",
    rating: 5,
    text: "Best place to buy branded cut pieces. The staff is super helpful and the variety is incredible. I've been a regular customer for 2 years now.",
    avatar: "FA",
  },
  {
    name: "Saima Malik",
    role: "Verified Customer",
    rating: 5,
    text: "The handbag I bought is genuine branded and the price was way better than other stores. Will definitely come back for more shopping!",
    avatar: "SM",
  },
  {
    name: "Hina Tariq",
    role: "Verified Customer",
    rating: 5,
    text: "Loved the cosmetics collection! Original products, great customer service, and they even helped me choose the right shades. Five stars!",
    avatar: "HT",
  },
];

export function CustomerReviews() {
  return (
    <section className="bg-gray-50 py-20">
      <Container>
        <div className="mb-12 text-center">
          <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-yellow-600">Testimonials</p>
          <Heading>What Our Customers Say</Heading>
        </div>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {reviews.map((r) => (
            <div key={r.name} className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm transition-shadow hover:shadow-xl">
              <div className="mb-4 flex gap-1">
                {[...Array(r.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-gray-700">"{r.text}"</p>
              <div className="mt-6 flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-yellow-400 to-yellow-600 font-bold text-black">
                  {r.avatar}
                </div>
                <div>
                  <p className="font-semibold text-gray-900">{r.name}</p>
                  <p className="text-sm text-gray-500">{r.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
