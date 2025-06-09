"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const slides = [
  {
    id: 1,
    title: "Understanding Mutual Funds in Today's Economy",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam nonummy nibh euismod tempor incididunt ut labore et dolore magna aliquam erat, sed diam voluptua. At",
    image: "https://modii.org/wp-content/uploads/2020/12/random.png",
    link: "#",
  },
  {
    id: 2,
    title: "Stock Market Trends and Analysis",
    description:
      "Discover the latest trends in stock market performance and learn how to analyze market movements for better investment decisions.",
    image:
      "https://cdn.pixabay.com/photo/2021/12/12/20/00/play-6865967_640.jpg",
    link: "#",
  },
  {
    id: 3,
    title: "Cryptocurrency Investment Guide",
    description:
      "A comprehensive guide to understanding cryptocurrency markets and making informed investment choices in digital assets.",
    image:
      "https://media.istockphoto.com/id/183821822/photo/say.jpg?s=612x612&w=0&k=20&c=kRmCjTzA9cq4amgRgeHkZsZuvxezUtC8wdDYfKg-mho=",
    link: "#",
  },
  {
    id: 4,
    title: "Real Estate Investment Strategies",
    description:
      "Explore different real estate investment approaches and learn how to build wealth through property investments.",
    image: "/placeholder.svg?height=300&width=400",
    link: "#",
  },
  {
    id: 5,
    title: "Retirement Planning Essentials",
    description:
      "Essential strategies for planning your retirement and ensuring financial security in your golden years.",
    image: "/placeholder.svg?height=300&width=400",
    link: "#",
  },
];

export default function MarketInsightsSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <section className="bg-gray-50 py-16 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">
            Explore Our Hub of Market Insights
          </h2>
          <a
            href="#"
            className="text-[#8800ff] hover:text-[#6600cc] font-extrabold underline flex items-center gap-1 transition-colors"
          >
            View All
            <ChevronRight size={16} />
          </a>
        </div>

        {/* Slider Container */}
        <div className="bg-white rounded-2xl p-8 shadow-sm">
          <div className="grid md:grid-cols-2 gap-8 items-start">
            {/* Content Side */}
            <div className="flex flex-col justify-between h-full">
              <div className="space-y-6">
                <h3 className="text-2xl font-semibold text-gray-900">
                  {slides[currentSlide].title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {slides[currentSlide].description}
                </p>
                <a
                  href={slides[currentSlide].link}
                  className="inline-flex items-center text-[#8800ff] hover:text-[#6600cc] font-medium transition-colors"
                >
                  Learn More
                  <ChevronRight size={16} className="ml-1" />
                </a>
              </div>
              {/* Navigation Controls */}
              <div className="flex items-center justify-between mt-8">
                {/* Pagination Dots */}
                <div className="flex items-center gap-2">
                  {slides.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => goToSlide(index)}
                      className={`h-1 rounded-full transition-all duration-300 ${
                        index === currentSlide
                          ? "w-15 bg-[#8800ff]"
                          : "w-15 bg-gray-300 hover:bg-gray-400"
                      }`}
                      aria-label={`Go to slide ${index + 1}`}
                    />
                  ))}
                </div>

                {/* Arrow Navigation */}
                <div className="flex items-center gap-2">
                  <Button
                    onClick={prevSlide}
                    variant={"outline"}
                    size={"icon"}
                    className="p-2  bg-foreground text-background  rounded-full border border-gray-300 hover:border-gray-400 hover:bg-gray-50 transition-colors"
                    aria-label="Previous slide"
                    disabled={!currentSlide}
                  >
                    <ChevronLeft size={20} className="text-gray-600" />
                  </Button>
                  <Button
                    onClick={nextSlide}
                    variant={"outline"}
                    size={"icon"}
                    className="p-2  bg-foreground text-background  rounded-full border border-gray-300 hover:border-gray-400 hover:bg-gray-50 transition-colors"
                    aria-label="Next slide"
                    disabled={currentSlide === slides.length - 1}
                  >
                    <ChevronRight size={20} className="text-gray-600" />
                  </Button>
                </div>
              </div>
            </div>

            {/* Image Side */}
            <div className="relative">
              <div className="aspect-[4/3] bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl overflow-hidden">
                <img
                  src={slides[currentSlide].image || "/placeholder.svg"}
                  alt={slides[currentSlide].title}
                  className="w-full h-full object-cover"
                />
                {/* Decorative elements to simulate the chart interface */}
                <div className="absolute top-4 right-4 flex gap-2">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
