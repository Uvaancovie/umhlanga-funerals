"use client";

import React, { useState } from "react";
import { Clock, ChevronRight, Tag, BookOpen, Car, Shield, Calendar } from "lucide-react";

const NewsAndBlogs = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const categories = [
    { id: "all", name: "All Posts" },
    { id: "news", name: "News" },
    { id: "guides", name: "Funeral Guides" },
    { id: "policy", name: "Policy Updates" },
  ];

  const blogPosts = [
    {
      id: 1,
      title: "Understanding Funeral Insurance: A Comprehensive Guide",
      excerpt:
        "Learn everything you need to know about funeral insurance and how to choose the right policy for your family's needs.",
      category: "guides",
      icon: <BookOpen className="w-12 h-12" />,
      date: "March 15, 2024",
      readTime: "5 min read",
      tags: ["Insurance", "Planning"],
    },
    {
      id: 2,
      title: "New Premium Fleet Additions",
      excerpt:
        "Introducing our latest additions to the luxury vehicle fleet, including the prestigious Rolls-Royce Phantom.",
      category: "news",
      icon: <Car className="w-12 h-12" />,
      date: "March 10, 2024",
      readTime: "3 min read",
      tags: ["Fleet", "Services"],
    },
    {
      id: 3,
      title: "2024 Policy Updates and Benefits",
      excerpt:
        "Important updates to our funeral policy benefits and coverage options for the new year.",
      category: "policy",
      icon: <Shield className="w-12 h-12" />,
      date: "March 5, 2024",
      readTime: "4 min read",
      tags: ["Policy", "Updates"],
    },
    {
      id: 4,
      title: "Planning a Memorial Service: Step by Step",
      excerpt:
        "A detailed guide to planning a meaningful memorial service that honors your loved one.",
      category: "guides",
      icon: <Calendar className="w-12 h-12" />,
      date: "March 1, 2024",
      readTime: "6 min read",
      tags: ["Planning", "Memorial"],
    },
  ];

  const filteredPosts =
    activeCategory === "all"
      ? blogPosts
      : blogPosts.filter((post) => post.category === activeCategory);

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-black mb-4">
            Latest News & Insights
          </h2>
          <p className="text-xl text-gray-600">
            Stay informed with our latest updates, guides, and industry news
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-colors duration-300
                ${
                  activeCategory === category.id
                    ? "bg-orange-500 text-white"
                    : "bg-white text-gray-600 hover:bg-orange-100"
                }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 mb-12">
          {filteredPosts.map((post) => (
            <article
              key={post.id}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              {/* Icon Header */}
              <div className="p-6 flex justify-center items-center bg-orange-50">
                <div className="text-orange-500">{post.icon}</div>
              </div>

              {/* Content */}
              <div className="p-6">
                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {post.tags.map((tag) => (
                    <span
                      key={tag}
                      className="inline-flex items-center px-3 py-1 rounded-full bg-orange-100 text-orange-600 text-sm"
                    >
                      <Tag className="w-3 h-3 mr-1" />
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Title */}
                <h3 className="text-xl font-semibold mb-3 hover:text-orange-500 transition-colors duration-300">
                  <a
                    href="https://www.facebook.com/umhlangafunerals"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {post.title}
                  </a>
                </h3>

                {/* Excerpt */}
                <p className="text-gray-600 mb-4">{post.excerpt}</p>

                {/* Meta */}
                <div className="flex items-center justify-between text-sm text-gray-500">
                  <div className="flex items-center">
                    <Clock className="w-4 h-4 mr-1" />
                    {post.readTime}
                  </div>
                  <span>{post.date}</span>
                </div>
              </div>

              {/* Read More Link */}
              <div className="px-6 pb-6">
                <a
                  href="https://www.facebook.com/umhlangafunerals"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-orange-500 hover:text-orange-600 font-medium"
                >
                  Read More
                  <ChevronRight className="w-4 h-4 ml-1" />
                </a>
              </div>
            </article>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center">
          <a
            href="https://www.facebook.com/umhlangafunerals"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-8 py-3 text-lg font-semibold text-white bg-orange-500 rounded-lg hover:bg-orange-600 transition-colors duration-300"
          >
            View All Posts
          </a>
        </div>
      </div>
    </section>
  );
};

export default NewsAndBlogs;
