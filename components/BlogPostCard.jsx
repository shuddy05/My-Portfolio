import React from "react";
import { FiCalendar, FiArrowRight } from "react-icons/fi";

const BlogPostCard = ({ post, darkMode, delay }) => {
  return (
    <article
      className={`rounded-2xl overflow-hidden ${
        darkMode ? "bg-slate-900/50" : "bg-slate-50"
      } backdrop-blur-sm border ${
        darkMode ? "border-slate-800" : "border-slate-200"
      } hover:border-cyan-500/50 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/20 cursor-pointer group animate-fadeInUp`}
      style={{ animationDelay: `${delay}s` }}
    >
      <div className="relative overflow-hidden aspect-video">
        <img
          src={post.image}
          alt={post.title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute top-4 left-4">
          <span
            className={`px-3 py-1 rounded-full text-sm font-semibold ${
              darkMode
                ? "bg-cyan-500/20 text-cyan-400"
                : "bg-cyan-100 text-cyan-700"
            } border ${
              darkMode ? "border-cyan-500/30" : "border-cyan-200"
            } backdrop-blur-sm`}
          >
            {post.category}
          </span>
        </div>
      </div>
      <div className="p-6">
        <div
          className={`flex items-center gap-4 text-sm ${
            darkMode ? "text-slate-500" : "text-slate-600"
          } mb-3`}
        >
          <span className="flex items-center gap-1">
            <FiCalendar className="w-4 h-4" />
            {post.date}
          </span>
          <span>•</span>
          <span>{post.readTime}</span>
        </div>
        <h3 className="text-xl font-bold mb-3 group-hover:text-cyan-400 transition-colors">
          {post.title}
        </h3>
        <p className={`${darkMode ? "text-slate-400" : "text-slate-600"} mb-4`}>
          {post.excerpt}
        </p>
        <button className="text-cyan-400 hover:text-cyan-300 font-semibold flex items-center gap-2 transition-all hover:gap-3">
          Read More <FiArrowRight className="w-4 h-4" />
        </button>
      </div>
    </article>
  );
};

export default BlogPostCard;
