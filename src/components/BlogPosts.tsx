'use client';
import { FadeIn, FadeInStagger } from '@/components';
import clsx from 'clsx';
import Link from 'next/link';

interface BlogPost {
  title: string;
  subtitle: string;
  tags: string[];
  readTime: string;
  date: string;
  url: string;
  color: string;
}

// ── UPDATE THESE WITH YOUR REAL MEDIUM POST LINKS ────────────────
const posts: BlogPost[] = [
  {
    title: 'Building a Sales Insights Dashboard with Power BI and SQL',
    subtitle: 'A step-by-step walkthrough of connecting MySQL to Power BI, writing DAX measures for KPIs, and designing a dashboard that non-technical stakeholders actually use.',
    tags: ['Power BI', 'SQL', 'Data Analytics'],
    readTime: '6 min read',
    date: 'Dec 2024',
    url: 'https://medium.com/@adityagajbhiye77/content-is-king-but-distribution-is-god-how-ambani-quietly-took-control-of-what-1-4-88ca3076ca11',
    color: 'text-yellow-400',
  },
  {
    title: 'Teaching a Car to Drive with a Neural Network and Genetic Algorithms',
    subtitle: 'How I built a Python simulation where a neural network evolves across generations using genetic algorithms — no backpropagation, no labelled data, just selection pressure.',
    tags: ['Python', 'Neural Networks', 'Genetic Algorithm', 'AI'],
    readTime: '8 min read',
    date: 'Jan 2025',
    url: 'https://medium.com/@adityagajbhiye77/the-invisible-war-in-your-fridge-how-ambani-is-dismantling-indias-beverage-empire-one-shopkeeper-3b57fe1475a9',
    color: 'text-blue-400',
  },
  {
    title: 'The DA vs DS vs SDE Career Path — What I Learned at IIT BHU',
    subtitle: 'Breaking down the differences between Data Analyst, Data Scientist, and Software Engineer roles — skills, day-to-day work, salaries, and which path makes sense for you.',
    tags: ['Career', 'Data Science', 'Software Engineering'],
    readTime: '5 min read',
    date: 'Feb 2025',
    url: 'https://medium.com/@adityagajbhiye77/how-meesho-did-what-no-indian-e-commerce-company-has-ever-done-turn-a-profit-1e076fa6a2f9',
    color: 'text-green-400',
  },
];

export default function BlogPosts() {
  return (
    <div className="relative z-10 mt-20 @container">
      <FadeInStagger className="grid grid-cols-1 gap-6 @lg:grid-cols-3" faster once>
        {posts.map((post) => (
          <FadeIn key={post.url}>
            <Link href={post.url} target="_blank" className="block h-full">
              <div className="h-full border border-gray-500/20 rounded-2xl p-6 bg-gray-900/20 hover:bg-gray-900/40 transition-all duration-300 hover:border-gray-500/40 flex flex-col gap-4 group">

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {post.tags.map((tag) => (
                    <span key={tag} className={clsx('text-xs font-semibold px-2 py-1 rounded-full bg-gray-800 border border-gray-700', post.color)}>
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Title */}
                <h3 className="text-white font-semibold text-base leading-snug group-hover:text-blue-100 transition-colors">
                  {post.title}
                </h3>

                {/* Subtitle */}
                <p className="text-gray-500 text-sm leading-relaxed flex-1">
                  {post.subtitle}
                </p>

                {/* Footer */}
                <div className="flex items-center justify-between text-xs text-gray-600 pt-2 border-t border-gray-700/50">
                  <span>{post.date}</span>
                  <span>{post.readTime}</span>
                  <span className="text-gray-500 group-hover:text-blue-300 transition-colors">Read on Medium →</span>
                </div>

              </div>
            </Link>
          </FadeIn>
        ))}
      </FadeInStagger>
    </div>
  );
}
