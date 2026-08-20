"use client";

import { useState } from "react";
import Link from "next/link";
import { Reveal } from "@/components/Reveal";

export interface CarouselItem {
  id: string;
  org: string;
  body: string;
  tags: string[];
  image?: string;
  slug?: string;
}

interface CarouselProps {
  items: CarouselItem[];
}

export function Carousel({ items }: CarouselProps) {
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 3;
  const totalPages = Math.ceil(items.length / itemsPerPage);

  const startIdx = currentPage * itemsPerPage;
  const visibleItems = items.slice(startIdx, startIdx + itemsPerPage);

  const next = () => {
    setCurrentPage((prev) => (prev + 1) % totalPages);
  };

  const prev = () => {
    setCurrentPage((prev) => (prev - 1 + totalPages) % totalPages);
  };

  return (
    <div className="mt-8">
      {/* Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
        {visibleItems.map((item, idx) => (
          <Reveal key={item.id} delay={idx * 60}>
            <div className="flex flex-col h-full border border-[var(--line)] rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
              {/* Image */}
              {item.image && (
                <div className="relative w-full h-48 bg-[var(--glass-bg)]">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={item.image}
                    alt={item.org}
                    className="w-full h-full object-cover"
                  />
                </div>
              )}

              {/* Content */}
              <div className="flex flex-col flex-1 p-4 md:p-5">
                {/* Title */}
                <h3 className="display-title display-sub text-[var(--ink)] mb-2">
                  {item.org}
                </h3>

                {/* Description */}
                <p className="text-sm leading-6 text-[var(--ink-soft)] mb-4 flex-1">
                  {item.body}
                </p>

                {/* Tags */}
                <ul className="tag-list mb-4">
                  {item.tags.map((tag) => (
                    <li key={tag} className="tag">
                      {tag}
                    </li>
                  ))}
                </ul>

                {/* CTA Button */}
                {item.slug && (
                  <Link
                    href={`/work/${item.slug}`}
                    className="button button-secondary w-full text-center"
                  >
                    View case study →
                  </Link>
                )}
              </div>
            </div>
          </Reveal>
        ))}
      </div>

      {/* Carousel controls */}
      <div className="mt-10 flex items-center justify-between">
        <button
          onClick={prev}
          className="button button-secondary"
          aria-label="Previous projects"
        >
          ← Previous
        </button>

        <div className="flex gap-2">
          {Array.from({ length: totalPages }).map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentPage(index)}
              className={`w-2 h-2 rounded-full transition-all ${
                index === currentPage
                  ? "bg-[var(--accent-deep)] w-8"
                  : "bg-[var(--line)]"
              }`}
              aria-label={`Go to page ${index + 1}`}
              aria-current={index === currentPage ? "true" : "false"}
            />
          ))}
        </div>

        <button
          onClick={next}
          className="button button-secondary"
          aria-label="Next projects"
        >
          Next →
        </button>
      </div>

      {/* Counter */}
      <div className="mt-4 text-center text-sm text-[var(--muted)]">
        {currentPage + 1} of {totalPages}
      </div>
    </div>
  );
}
