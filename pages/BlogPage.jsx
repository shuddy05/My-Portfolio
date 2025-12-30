import React from "react";
import { blogPosts } from "../constants/data";
import BlogPostCard from "../components/BlogPostCard";

const BlogPage = ({ darkMode }) => {
  return (
    <section className="min-h-screen py-32 px-6 relative pt-24">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-fadeInUp">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">Blog & Articles</h1>
          <p className={`text-xl ${darkMode ? "text-slate-400" : "text-slate-600"}`}>
            Thoughts, tutorials, and insights on web development
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, idx) => (
            <BlogPostCard
              key={post.id}
              post={post}
              darkMode={darkMode}
              delay={idx * 0.1}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogPage;
